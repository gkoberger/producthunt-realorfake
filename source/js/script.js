var stuff = [
  ['Dwyneed', 'SMS a human who will talk you out of purchases', false],
  ['Watercoolr', 'Pop culture updates to keep up with your coworkers', false],
  ['Pinebox', 'Birchbox for morticians', false],
  ['Worn On TV', 'Buy clothing worn in your favorite TV shows', true],
  ['Newscombinator', 'Like Google-News, but for hackers', true],
  ['Meer-katalytics', 'Complete analytics for all Meerkats', true],
];

(function() {
  $(window).on('resize', function() {
    $('section').height($(window).height());
  }).trigger('resize');

  var next = stuff[Math.floor(Math.random() * stuff.length)];
  $('.item.current h3').text(next[0]);
  $('.item.current p').text(next[1]);

  var score = (window.localStorage['score'] || 0)*1;
  var total = (window.localStorage['total'] || 0)*1;

  console.log(total);


  function updateScore() {
    $('.update-score').text(score);
    $('.update-total').text(total);
    $('.update-percent').text(Math.floor((score / total) * 100) + "%");

    window.localStorage['total'] = total;
    window.localStorage['score'] = score;
  };

  $('.button').click(function() {
    var real = next[2];
    var correct = $(this).attr('guess') == (real ? 'real' : 'fake');

    total++;
    if(correct) score++;
    updateScore();

    next = stuff[Math.floor(Math.random() * stuff.length)];

    $('.quote').addClass('hide');
    $('.score').addClass('on');
    $('.item.next').addClass('hide');

    $('.item.current').addClass('next').removeClass('current');
    $('.right').removeClass('yes no');
    $('.right').addClass(correct ? 'yes' : 'no');

    var text = '';
    if(correct) {
      if(real) {
        text = 'Yup, this is a real product!';
      } else {
        text = 'You spotted the fake!';
      }
    } else {
      if(real) {
        text = 'Actually, it is real!';
      } else {
        text = 'Nope, not real&hellip; yet!';
      }
    }

    $('.score h4').html(text);

    var clone = function(side) {
      var $el = $('#demo').clone().attr('id', null);
      $('.' + side + ' .items').append($el.addClass('current'));
      $('h3', $el).text(next[0]);
      $('p', $el).text(next[1]);
    };

    clone('left');
    clone('right');

    $('.item.current').show();
    $('.left .item.current').addClass('fadein');
  });
})();

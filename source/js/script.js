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

  $('.button').click(function() {
    var correct = $(this).attr('guess') == (next[2] ? 'real' : 'fake');

    next = stuff[Math.floor(Math.random() * stuff.length)];

    $('.quote').addClass('hide');
    $('.item.next').addClass('hide');

    $('.item.current').addClass('next').removeClass('current');
    $('.right').removeClass('yes no');
    $('.right').addClass(correct ? 'yes' : 'no');

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

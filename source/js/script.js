(function() {
  $(window).on('resize', function() {
    $('.top.panel, .top .item').height($(window).height() - 360)
    $('.bottom .item').height($(window).height() - 360)
    $('.bottom .item').css('top', ($(window).height() - 360) * -1)
  }).trigger('resize');

  $('.button').click(function() {
    $('.bottom .item.drop .container').addClass('fade');

    if(Math.random() > 0.5) {
      $('.bottom .item.current').addClass('correct');
    }

    $('.item.current').addClass('drop');
    $('.item').removeClass('current');

    setTimeout(function() {
      var $top = $('#demo').clone().attr('id', null);
      $('.top.panel').append($top.addClass('current'));

      var $bottom = $('#demo').clone().attr('id', null);
      $('.bottom.panel').append($bottom.addClass('current'));

      $(window).trigger('resize');
      $('.bottom .item.current').show();
      $('.top .item.current').fadeIn();
    }, 400);

    return false;
  });
})();

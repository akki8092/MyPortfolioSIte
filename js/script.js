//jQuery 先頭ページへジャンプ

$(function() {
  'use strict';

  $('#back-to-top').hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 700) {
      $('#back-to-top').fadeIn(800);
    } else {
      $('#back-to-top').fadeOut(800);
    }
    });
  $('#back-to-top i').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

});

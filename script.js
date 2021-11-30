$(document).ready(function () {
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
});

$('.bg-image').paroller();

Sticker.init('.sticker');

AOS.init();

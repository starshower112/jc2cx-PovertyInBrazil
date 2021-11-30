$(document).ready(function(){
  $("#myCarousel").carousel();
    if ( $(window).width() < 640 ) {
       $('.col-sm-6').unwrap().addClass('item');
       $('.col-sm-6:first').addClass('active');
    }
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:3
        }
    }
})
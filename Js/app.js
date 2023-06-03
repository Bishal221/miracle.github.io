// Made by Bishal Kayal
// Offical Website fullstackguru.in

$(document).ready(function() {
    $('.menu_toggle').click(function() {
      $('#menu').toggleClass("active");
      $('.menu_toggle').toggleClass("active");
    });
  });
  
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  
  




console.log("Made by Bishal Kayal");
console.log("Offical Website fullstackguru.in");
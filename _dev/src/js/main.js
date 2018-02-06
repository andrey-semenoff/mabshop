'use strict';

$(function () {

  // Инициализация скрипта
  Smooth_Scroll.init();
  
  // owl-carousel init
  $(".carousel_main").owlCarousel({
  	items: 5,
    slideBy: 5,
  	loop: true,
    autoplay: true,
  	smartSpeed: 500,
    autoplayTimeout: 10000,
  	autoHeight: true,
  	nav: true,
  	navText: [
  		'<svg class="owl-nav_arrow"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow"></use></svg>',
  		'<svg class="owl-nav_arrow"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow"></use></svg>'
  	],
  	responsive: {
  		992: {
        items: 5,
        slideBy: 5,
      },
      
      768: {
      	items: 3,
        slideBy: 3,
      },
      
      550: {
      	items: 2,
        slideBy: 2,
      },

      0: {
      	items: 1,
        slideBy: 1,
      }
  	}
  });
});



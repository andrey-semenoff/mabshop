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

  $(document).scroll(function() {
    var scroll_top = $(this).scrollTop(),
        $menu = $('.menu'),
        sidebar_top = $('.sidebar').offset().top;

    if( scroll_top >= sidebar_top ) {
      $menu.addClass('menu_fixed');
    } else {
       $menu.removeClass('menu_fixed');
    }
  });

  if( $('.menu-item_active').length ) {
    setPointerTop($('.menu-pointer'), $('.menu-item_active'), 'static');
  }

  // menu-pointer
  $('.menu-link').on('mouseover', function() {
    setPointerTop($('.menu-pointer'), $(this), 'dynamic');
  });

  $('.sidebar').on('mouseleave', function() {
     $('.menu-pointer').css({
      top: $('.menu-pointer').data('top') + 'px' 
     }).removeClass('menu-pointer_dynamic');
  });

});


///////////////////////////////
// FUNCTIONS
///////////////////////////////

function setPointerTop($pointer, $target, state) {
  var target_middle = $target.offset().top + $target.height() / 2,
      sidebar_top = $('.menu').offset().top,
      top = target_middle - sidebar_top - ($pointer.data('height') || $pointer.outerHeight()) / 2;
  
  if( state == 'dynamic' ) {
    $pointer.addClass('menu-pointer_dynamic');
  } else {
    $pointer.data('top', top).data('height', $pointer.outerHeight());
  }
  
  $pointer.show().css({
    top: top + 'px'
  });
}

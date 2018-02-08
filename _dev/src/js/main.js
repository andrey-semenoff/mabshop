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
        $burger = $('.burger'),
        sidebar_top = $('.sidebar').offset().top;

    if( scroll_top >= sidebar_top ) {
      $menu.addClass('menu_fixed');
      $burger.addClass('burger_fixed');
    } else {
      $menu.removeClass('menu_fixed');
      $burger.removeClass('burger_fixed');
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

  //shop-button_promo
  $('.shop-button_promo').on('click', function() {
    var $this = $(this),
        $text = $this.children('.shop-button_promo__text'),
        $holder = $this.children('.shop-button_promo__code-holder');
  
    $text.toggle();
    $holder.toggle();
  });

  $('.shop-button_promo__code-holder').on('click', function(e) {
    e.stopPropagation();

    var $this = $(this),
        $code = $this.children('.shop-button_promo__code'),
        $msg = $('.shop-button_promo__msg');
  
    // console.log($code.text());
    $msg.text(copyText($code)).show(function() {
      setTimeout(function() {
        $msg.hide();
      }, 2000);
    });
  });

// burger toggle
  $(document).on('click', '.burger', function () {
    var $this = $(this),
        $sidebar = $this.parent();

    $this.toggleClass('burger_close');
    $sidebar.toggleClass('sidebar_open');
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

// Select text within element
function copyText($el) {
  if (document.selection) {
      var range = document.body.createTextRange();
      range.moveToElementText($el[0]);
      range.select();
  } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode($el[0]);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
  }

  var answer = '';
  
  try {
     var ok = document.execCommand('copy');

     if (ok) answer = 'Код скопирован!';
  } catch (err) {}

  return answer;
}

// function copyText($el) {
//   var answer = '';

//   $el.select();

//   try {
//      var ok = document.execCommand('copy');

//      if (ok) answer = 'Copied!';
//      else answer = 'Unable to copy!';
//   } catch (err) {
//      answer = 'Unsupported Browser!';
//   }

//   return answer;
// }
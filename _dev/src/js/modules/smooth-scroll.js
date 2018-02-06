/** =======================
* ----- Smooth_Scroll ----
* ====================== */

var Smooth_Scroll = (function() {

	  function init() {
	    $(document).on('click', 'a[href="#"][data-scroll]', function(e) {
	    	e.preventDefault;
	      var target = $(this.hash),
	      		top = 0;
	      
	      if ( target.length ) {
	        top = target.offset().top
	      }

	      $('html, body').animate({
          scrollTop: top
        }, 1000);
	    })
	  }

		return {
		  init: init
		}
}());
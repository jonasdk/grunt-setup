// The main javascript file where things that are needed to run the site
// The thing that is nice to have and desktop only is going elsewhere

var NAMESPACE = {};

// Require
require(['imager'], function(Imager) {
  // Log when I got into the part of the script that has Imager.js required.
  //console.log( "START: ImagerJS loaded - ready for take off" );
  var imager = new Imager({
    availableWidths: [320, 640, 1024, 1912],
  });
});

// The main part of the scripts needs jQuery to work
require(['jquery'], function($) {
  // Log when I got into the part of the script that has jquery required.
  //console.log( "START: jquery loaded and main ready for take off" );

  // The jQuery functions goes below here
  $(function() {

    // General accordion for use everywhere
    NAMESPACE.accordion = {
      enhance: function() {
        if ($('.js--accordion').length) {
          // First hide all panels
          $('.js--accordion .list--accordion__content').hide();

          //Handle click function
          $('.js--accordion .header--accordion').on('click', function() {
            //this clicked active menu item
            var $activemenuitem = $(this);
            var $activeMenuItemWrapper = $activemenuitem.parent();

            //the target panel content
            var $target = $activemenuitem.next('.list--accordion__content');

            // Toggle menu items according to the current state
            if (!$activeMenuItemWrapper.hasClass('accordion-active')) {
              //Only toggle non-displayed
              //slide up any open panels and remove active class
              $('.js--accordion').find('.accopen').slideUp().removeClass('accopen');

              //remove any active class
              $('.js--accordion').find('.accordion-active').removeClass('accordion-active');

              //add active class
              $activeMenuItemWrapper.addClass('accordion-active');

              //slide down target panel
              $target.addClass('accopen').slideDown();
            } else {
              //slide up any open panels and remove active class
              $('.list--accordion__content.accopen').slideUp().removeClass('accopen');

              // Make sure no menu is belived to be active anymore
              $activeMenuItemWrapper.removeClass('accordion-active');
            }

            return false;
          });
        }
      },
    };

    // Activating function parts when the page is ready
    $(window).ready(function() {
      NAMESPACE.accordion.enhance();
    });

    // When the window resizes this have to run one more time.
    $(window).resize(function() {
    });

    // # Stop for Adding desktop style

  });
});

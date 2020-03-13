$(document).ready(function(e) {

  // Scrolled navbar class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.navbar').addClass('navbar-scrolled');
    } else {
      $('.navbar').removeClass('navbar-scrolled');
    }
  });

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smoothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 50
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  // fancybox init

  $(".fancybox").fancybox({
    padding: 10,
    helpers: {
      overlay: {
        locked: false
      }
    }
  });

  $('.with-hover-text, .regular-link').click(function(e) {
    e.stopPropagation();
  });

  /***************
   * = Hover text *
   * Hover text for the last slide
   ***************/
  $('.with-hover-text').hover(
    function(e) {
      $(this).css('overflow', 'visible');
      $(this).find('.hover-text')
        .show()
        .css('opacity', 0)
        .animate({
            paddingTop: '25px',
            opacity: 1
          },
          'fast',
          'linear'
        );
    },
    function(e) {
      var obj = $(this);
      $(this).find('.hover-text')
        .animate({
            paddingTop: '0',
            opacity: 0
          },
          'fast',
          'linear',
          function() {
            $(this).hide();
            $(obj).css('overflow', 'hidden');
          }
        );
    }
  );

  var img_loaded = 0;
  var j_images = [];


});

/******************
 * = Gallery hover *
 ******************/
jQuery(document).ready(function($) {
  //Cache some variables
  var images = $('#portfolio a');

  images.hover(
    function(e) {
      var asta = $(this).find('img');
      $('#portfolio img').not(asta).stop(false, false).animate({
          opacity: .5
        },
        'fast',
        'linear'
      );
      var zoom = $('<div class="zoom"></div>');
      if ($(this).hasClass('video')) {
        zoom.addClass('video');
      }
      $(this).prepend(zoom);
    },
    function(e) {
      $('#portfolio img').stop(false, false).animate({
          opacity: 1
        },
        'fast',
        'linear'
      );
      $('.zoom').remove();
    }
  );
});

// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require semantic-ui
//= require_tree .


$(document)
.ready(function() {
  //hide drop ins
  $('.animated .icon').hide()

  //shapes
  $('.shape').shape('flip over');

  $('.flip-button').on('click', function() {
  ($(this).closest('.column').find('.shape')).shape('flip up')
  });

  //shape button
  var i = 1;
 function myLoop () {
   setTimeout(function () {
     $('.flip-button').transition('bounce')
     i++;
     if (i < 5) {
       myLoop();
     }
   }, 5000)
 }
 myLoop();


  // fix menu when passed
  $('.masthead')
  .visibility({
    once: false,
    onBottomPassed: function() {
      $('.fixed.menu').transition('fade in');
    },
    onBottomPassedReverse: function() {
      $('.fixed.menu').transition('fade out');
    }
  })
  ;

  // create sidebar and attach to menu open
  $('.ui.sidebar')
  .sidebar('attach events', '.toc.item');

  // hide socials
  // drop in socials
  $('.animated .icon')
  .transition({
    animation : 'drop',
    duration  : 2000,
    reverse: 'false',
    interval  : 100
  })
  ;

  // social icon bounce
  $('.social-logo').on('mouseover', function() {
    $(this).transition('bounce')
  });


  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

})
;

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

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-75658047-1', 'auto');
  ga('send', 'pageview');


  //hide drop ins
  $('.animated .icon').hide()

  //shapes
  $('.shape').shape();
  $('.shape').shape('flip over');

  $('.flip-button').on('click', function() {
  ($(this).closest('.column').find('.shape')).shape('flip up')
  });


  // fix menu when passed
  $('.masthead')
  .visibility({
    once: false,
    onBottomPassed: function() {
      $('.fixed.menu').transition('fade in');
      $('.fixed-animated .icon').show()
      .transition({
        animation : 'jiggle',
        duration  : 1000,
        reverse: 'true',
        interval  : 250
      });
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
    duration  : 3000,
    reverse: 'false',
    interval  : 150
  }).transition({
        animation : 'jiggle',
        duration  : 1000,
        reverse: 'true',
        interval  : 250
      });

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

// $(function(){
//   $("#slides").slidesjs({
//     width: 900,
//     height: 680,
//     play: {
//       active: true,
//       auto: true,
//       interval: 3000,
//       swap: true
//     },
//     fade: {
//         speed: 300,
//           // [number] Speed in milliseconds of the fade animation.
//         crossfade: true
//           // [boolean] Cross-fade the transition.
//       },
//     // navigation: {
//     //   active: true,
//     //   effect: "fade"
//     // }
//   });
$(document).ready(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails"
  });
});

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

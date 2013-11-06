$(function(){
  $("#slides").slidesjs({
    width: 940,
    height: 680,
    play: {
      active: true,
      auto: true,
      interval: 4000,
      swap: true
    },
    navigation: {
      active: true,
      effect: "slide"
    }
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

})
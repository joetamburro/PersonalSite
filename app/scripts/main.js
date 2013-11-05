console.log('\'Allo \'Allo!');

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
    });

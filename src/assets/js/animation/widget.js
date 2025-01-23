export const widgetGsap = () => {
    if (document.querySelector('.whiteGsap')) {


          let delay = window.PRELOADER_DELAY + 3000;
          // let delay = 0;

  setTimeout(function () {



        let whiteGsap = document.querySelectorAll('.whiteGsap');

        whiteGsap.forEach(function (element) {
            console.log(element);
            gsap.to('.widget', {
                scrollTrigger: {
                    trigger: element,
                    start: 'top bottom',
                    end: "bottom bottom",
                    toggleClass: {
                        targets: '.widget',
                        className: 'widget--bg',
                    },

                  // onToggle() {
                  //       console.log('onToggle');
                  //   },
                    // onEnter() {
                    //     console.log('onEnter');
                    // },
                    // onEnterBack() {
                    //     console.log('onEnterBack');
                    // },
                    // onLeave() {

                    //     console.log('onLeave');

                    // },
                    // onLeaveBack() {

                    //     console.log('onLeaveBack');

                    // }
                },
            });
        });

        whiteGsap.forEach(function (element) {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: '20px top',
                    toggleClass: {
                        targets: '.header',
                        className: 'header--white',
                    },
                },
            });
        });
        
  }, delay);
        
    }

}

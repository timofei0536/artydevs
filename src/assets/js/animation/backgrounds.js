export const backgroundsGsap = () => {

  // скрыть блок чтоб не маячил на заднем фоне; 


  if (document.querySelector('.contact')) {


    gsap.to(".contact__bg", {

      scrollTrigger: {
        trigger: '.contact',
        start: "top bottom",
        end: "center center",
        scrub: 2,
      },
      transform: 'scaleY(0)',

    });

  }


  if (document.querySelector('.footer')) {

    let footerTl = gsap.timeline({

      scrollTrigger: {
        trigger: '.footer',
        start: "center bottom",
        end: "bottom bottom",
        scrub: 1,
      },

    });

       footerTl.fromTo('body',{
        background: '#020715',
       },{
        background: '#5A04FF',

          },0);

  }



  if (document.querySelector('.choose')) {

    let footerTl = gsap.timeline({

      scrollTrigger: {
        trigger: '.choose',
        start: "center bottom",
        end: "bottom bottom",
        scrub: 1,
      },

    });


       footerTl.fromTo('.mission',{
        opacity: 1,
       },{
            opacity: 0,
          },0);

       footerTl.fromTo('body, .gsap-bg',{
        background: '#020715',
       },{
        background: '#5A04FF',

          },0);

  }



  if (document.querySelector('.features__item--speeds')) {

    let speedsTl = gsap.timeline({

      scrollTrigger: {
        trigger: '.features__item--speeds',
        start: "center bottom",
        end: "bottom bottom",
        scrub: 1,
      },

    });


    let speedsTlOff = gsap.timeline({

      scrollTrigger: {
        trigger: '.features__item--speeds',
        start: "center top",
        end: "bottom top",
        scrub: 1,
      },

    });



       speedsTlOff.fromTo('.features',{
        background: '#020715',
       },{
        background: '#5A04FF',

          });

       
       speedsTl.fromTo('.features',{
        background: '#5A04FF',
       },{
        background: '#020715',

          });

  }




};

import {textLinesScript} from './at_ui_kid/text-lines-script';

export const about = () => {


// let trigger = '.about__trigger';
let trigger = '.about__wrap';

if ( !window.its_desktop ) {
  trigger = '.about__left'; 
} 

window.aboutPinTime = 1500;

    let aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: 'center center',
        end: "+="+window.aboutPinTime+"px",
        // pin: '.about',
        pin: '.about',
        pinSpacing: true,
        scrub: 1,
      },
    })


   aboutTl.fromTo('.about__circle', {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 0.01,
    },0
    
    );


    aboutTl.fromTo('.about__circles', {
      rotate: -160,
    }, {
      rotate: 0,
      duration: 3,
    },0);



    aboutTl.fromTo('.about__circle--circle1', {
      yPercent: 0,
    }, {
      yPercent: -145*0.7,
      duration: 3,
    },0);


    aboutTl.fromTo('.about__circle--circle2', {
      yPercent: 0,
      xPercent: 0,
    }, {
      yPercent: 70,
      xPercent: 125*0.7,
      duration: 3,

    },0);

    aboutTl.fromTo('.about__circle--circle3', {
      yPercent: 0,
      xPercent: 0,
    }, {
      yPercent: 70,
      xPercent: -125*0.7,
      duration: 3,

    },0);


    aboutTl.fromTo('.about__line', {
      opacity: 0,
    }, {
      opacity: 1,
      ease: "power1.inOut",
      duration: 3,
    },0);


    aboutTl.fromTo('.about__line', {
      scaleX: '0',
    }, {
      scaleX: '1',
      ease: "power2.inOut",
      duration: 3,
    },0);


    aboutTl.fromTo('.about__circle span', {
      opacity: 0,
    }, {
      opacity: 1,
      delay: 0.75,
      ease: "power2.inOut",
      duration: 2.25,
    },0);

if (window.its_desktop ) {

// function getYValue() {
//   const element = document.querySelector('.about__left');
//   const screenCenterY = window.innerHeight / 2;
//   const rect = element.getBoundingClientRect();
//   const elementCenterY = rect.top + rect.height / 2;
//   return elementCenterY - screenCenterY;
// }

// setTimeout(function(){
//   alert(getYValue());
// },5000)



    aboutTl.fromTo('.about__left', {
      x: '50%',
      background: 'red',
       y: () => {
        // return document.querySelector('.about__title-wrap').offsetHeight / 2;
       }
    }, {
      x: '0%',
      // y: '0px',
      duration: 1,
      delay: 1.25,
      background: 'green',
    },1);

  }



      let aboutLines = ('.about__title1 .anim-line-wrap');

      let peoples = document.querySelectorAll('.about__people');

      aboutTl.fromTo(aboutLines, {
        x: '30px',
        opacity: 0
      }, {
        stagger: 0.2, // 1cek
        x: 0,
        opacity: 1,
        duration: 1, // 1 cek
        delay: 1,
      }, 2)

if (window.its_desktop ) {


      aboutTl.fromTo(peoples, {
        y: 30,
        opacity: 0
      }, {
        stagger: 0.5, // 1cek
        y: 0,
        opacity: 1,
        duration: 1, // 1 cek
        delay: 1,
      }, 2)
    }


    
    let titleLines = ('.about__title .anim-line-wrap.mobile--hide .anim-line');
    let textLines = document.querySelectorAll('.about__text .anim-line-wrap.mobile--hide .anim-line');
    let textLetters = '.about__text .anim-line-wrap.mobile--hide .word';


    if ( !window.its_desktop ) {
      titleLines = ('.about__title .anim-line-wrap.desktop--hide .anim-line');
      textLines = document.querySelectorAll('.about__text .anim-line-wrap.desktop--hide .anim-line');
      textLetters = '.about__text .anim-line-wrap.desktop--hide .word';
    }


    for (var i = 0; i < textLines.length; i++) {
      textLinesScript(textLines[i], true);
    }

    let titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about__title',
        start: 'top bottom-='+(window.aboutPinTime+100)+'px',
        end: 'center center-='+(window.aboutPinTime)+'px',
        scrub: 1.5,
      },
    })


    let textTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about__text',
        start: 'top bottom-='+(window.aboutPinTime)+'px',
        end: 'center center-='+(window.aboutPinTime)+'px',
        scrub: 1.5,
      },
    })


    let textTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.about__text',
        start: 'top bottom-='+(window.aboutPinTime)+'px',
        end: 'center center-='+(window.aboutPinTime)+'px',
        scrub: 1.5,
      },
    })


    setTimeout(function(){


        let yTitle = '100%';
        let textDelay = 0
        if ( !window.its_desktop ) {
          yTitle = '0%';
          textDelay = 1;
        }


        textTl.fromTo(textLetters,{
          opacity: 0.3,
        },{
          opacity: 1,
          stagger: 0.15,
          duration: 1.5,
        },0);

        textTl2.fromTo(textLines,{
          opacity: 0,
          y: '100%',
        },{
          opacity: 1,
          y: '0%',
          stagger: 0.2,
          duration: 1,
          delay: textDelay,

        },0);



        titleTl.fromTo(titleLines,{
          opacity: 0,
          y: yTitle,
        },{
          opacity: 1,
          y: '0%',
          stagger: 0.2,
          duration: 1,

        },0);




    },500)



}
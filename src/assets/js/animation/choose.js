import {textLinesScript} from './at_ui_kid/text-lines-script';
export const choose = () => {
  if (window.its_desktop) {

    if (document.querySelector('.choose')) {

    let title = document.querySelector('.choose__title');


      let titleLines = title.querySelectorAll('.anim-line');
      
      gsap.fromTo(titleLines, {
        y: '200%',
        opacity: 0,
      }, {
            scrollTrigger: {
            trigger: '.choose__title',
            start: 'top bottom',
            end: "center center",
            scrub: 3,
          },
            stagger: {
              each: 0.3,
            },
            y: '0%',
            opacity: 1,
            duration: 2,
      },);


  // ANIMATION OF SHADOW


            gsap.fromTo('.choose__shadow', {
            x: '0%',
      }, {
            scrollTrigger: {
            trigger: '.choose',
            start: 'top center',
            end: "bottom bottom",
            scrub: 0.5,
          },

            x: '200%',
      },);




    }



}

};



// end: +=500 end after scrolling 500px beyond the start
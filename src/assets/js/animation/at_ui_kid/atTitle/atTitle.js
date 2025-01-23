import {textLinesScript} from '../text-lines-script';


export const atTitleFile =  {

  default: function(params){

    let title = params.elem;
    params.elem.style.opacity = 1;
    textLinesScript(title);


    setTimeout(function(){


    let titleLetters = title.querySelectorAll('.letter');

    params.tl.to(titleLetters,{
          stagger: {
            amount: 1
          },
          ease: "power1.out",
          duration: 0.4,
          opacity: 1,
    },
      0
    );


    params.tl.to(titleLetters,{
          stagger: {
            amount: 1
          },
          ease: "power1.out",
          transform: "none",
          duration: 1.5,
          delay: 0.5,
          onComplete: function(){
              title.classList.add('at-element--finished');
          }
    },
      0
    );


},500);

  },


  custom: function(params){


    let title = params.elem;



    if ( title.closest('.main-screen--home') && window.PRELOADER  ){
        return;
    }

    

    params.elem.style.opacity = 1;


    let titleLetters = title.querySelectorAll('.letter');

    params.tl.fromTo(titleLetters,{
      opacity: 0,
    },{
          stagger: {
            amount: 1
          },
          ease: "power2.in",
          duration: 1,
          opacity: 1,
    },
      0
    );




    params.tl.to(titleLetters,{
          stagger: {
            amount: 1
          },
          ease: "power1.out",
          transform: "none",
          duration: 2,
          delay: 0.5,
                    onComplete: function(){
                      title.classList.add('at-element--finished');
          }
    },
      0
    );







  }



}

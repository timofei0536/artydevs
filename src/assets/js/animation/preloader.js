if ( document.querySelector('.preloader')){

let preloader = document.querySelector('.preloader');
let screen1 = document.querySelector('.preloader__screen--one');
let screen2 = document.querySelector('.preloader__screen--two');

preloaderTl = gsap.timeline();

let test = false;

let delay1 = 0;
let delay2 = 0;

if (!test) {

delay1 = 1;
delay2 = 2;



// ============================================
// SHOW FIRST SCREEN
// ============================================


preloaderTl.fromTo(screen1.querySelector('.preloader__text'),{
    scale: 1.3,
    opacity: 0,
},{
    scale: 1,
    delay: 1,
    duration: 2,
    opacity: 1,
},0)


// ============================================
// HIDE FIRST SCREEN
// ============================================


preloaderTl.to([screen1,screen2],{
    y: '-100%',
    duration: 1,
    delay: 1,
},delay1)


preloaderTl.fromTo(screen1.querySelector('.preloader__text'),{
    y: '0%',
},{
    y: '500%',
    scale: 0.8,
    duration: 1,
    delay: 1,
    opacity: 0,
},delay1);


preloaderTl.fromTo(screen2.querySelector('.round--one .round__wrap1'),{
    height: '0vh',
},{
    height: '25vh',
    duration: 1,
    delay: 1,
},delay1);



// ============================================
// SHOW SECOND SCREEN
// ============================================



preloaderTl.fromTo(screen2.querySelector('.preloader__text'),{
    scale: 0.8,
    opacity: 0,
    y: '300%',
},{
    y: '0%',
    scale: 1,
    duration: 1,
    delay: 1,
    opacity: 1,
},delay1);



} else {
    screen1.remove();
}



// ============================================
// HIDE SECOND SCREEN
// ============================================



preloaderTl.to(screen2,{
    y: '-200%',
    duration: 1,
    delay: 2,
},delay2)





preloaderTl.fromTo(screen2.querySelector('.round--two .round__wrap1'),{
    height: '0vh',
},{
    height: '25vh',
    duration: 1,
    delay: 2,
},delay2);



preloaderTl.fromTo(screen2.querySelector('.preloader__text'),{
    opacity: 1,
},{
    opacity: 0,
    duration: 0.5,
    delay: 2,
},delay2);



preloaderTl.fromTo(screen2.querySelector('.preloader__text'),{
    y: '0%',
    scale: 1,
},{
    y: '500%',
    scale: 0.8,
    duration: 1,
    delay: 2,
    onComplete: function(){
        preloader.remove();

        window.PRELOADER = false;

      if ( document.querySelector('.main-screen--home')){
          window.showMainScreen();
    }


        gsap.fromTo(document.querySelector('.main-screen__bg'),{
            opacity: 0,
        },{
            opacity: 1,
            duration: 5,
        });

    }
},delay2);



window.showTitle = function () {


  	let title = document.querySelector('.main-screen__title');

    title.style.opacity = 1;

    let titleLetters = title.querySelectorAll('.letter');

    gsap.to(titleLetters,{
          stagger: {
            amount: 1
          },
          ease: "power1.out",
          duration: 0.4,
          opacity: 1,
    });


    gsap.to(titleLetters,{
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
    }
    );

}


  window.showMainScreen = function(){

      if ( window.videoShowTl ){
        window.videoShowTl.play();
      }

      window.showHeader();
      window.showTitle();
      document.querySelector('body').classList.add('body--start');
      if ( window.CHANGE_TITLE ){
       setInterval(window.changeTitle, 5000);
      }
  }
}


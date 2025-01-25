import './assets/css/animation/page-trans.scss'
import './assets/css/normalize.scss';
import './assets/css/main.scss';
import './assets/js/consts';
import './assets/css/animation/preloader.scss'
import './assets/css/animation/main.scss'
import './assets/css/animation/cursor.scss'

import './assets/js/animation/page-trans';


//BLOCKS 
import './assets/css/animation/parallax-magner.scss'
import './assets/css/animation/scrollbar.scss'
import './assets/css/blocks/policy.scss';

import './assets/css/blocks/site-links.scss';
import './assets/css/blocks/toogles.scss';
import './assets/css/blocks/socials.scss';
import './assets/css/blocks/btn.scss';
import './assets/css/blocks/content.scss';
import './assets/css/blocks/mobile-menu.scss';
import './assets/css/blocks/popup.scss';
import './assets/css/blocks/header.scss';
import './assets/css/blocks/footer.scss';
import './assets/css/blocks/email.scss';
import './assets/css/blocks/main-screen.scss';


import './assets/css/blocks/numbers.scss';
import './assets/css/blocks/about.scss';
import './assets/css/blocks/portfolio.scss';
import './assets/css/blocks/cta.scss';
import './assets/css/blocks/mission.scss';
import './assets/css/blocks/form.scss';
import './assets/css/blocks/contact.scss';
import './assets/css/blocks/choose.scss';
import './assets/css/blocks/features.scss';
import './assets/css/blocks/drag.scss';
import './assets/css/blocks/calc.scss';
import './assets/css/blocks/select.scss';
import './assets/css/blocks/services.scss';
import './assets/css/blocks/tooltip.scss';











// JS
import './assets/js/animation/preloader';
import './assets/js/animation/scrollbarFix';
import './assets/js/animation/header';
import './assets/js/animation/header-fixed';
import './assets/js/animation/cursor';
import './assets/js/form'
import './assets/js/times';
import './assets/js/animation/parallax-magner';
import './assets/js/scrollBody';
import './assets/js/heightVh';
import './assets/js/footer';
import './assets/js/toogles';
import './assets/js/popup';
import './assets/js/mobile-menu';
import './assets/js/anchors';
import './assets/js/theme-color';
import './assets/js/zoom-body';
import './assets/js/calc';
import './assets/js/drag';
import './assets/js/select';



// Awwwards description - Portfolio;
// validation,google speed;


// 1) Change NDA Wines &  Speed Optimization ( 1h );
// 2) youtube -> 20mb, portfolio__short;
// 4) Portfolio links;
// 5) Frontendwoman linkedin decore;

// 1) Adaptive;
    // 1.1 header--fixed;
    // 1.2 features;
// 2) Minimize HTML / Privat repo;


// MVP for Awwwards:

// 1) header__logo--fixed animation transition
// 2) Online chat;
	// 3) Calc tabs
	// 4) Calc info, (?), pro;
// 4) CTA:
	// 4.1 .choose -> add arrow;
	// 4.2 Stack hide and show withing filling;
// 5) Calc btn, CTA journey;
// 6) Make FAQ;
// 7) Mobile CTA?? BTNS?
// 9) Which trips accent? free QA? free Animations?
// 10) Portfolio videos;



// setTimeout(function() {
//     const video = document.querySelector("video");
//     video.currentTime = 0;
//     video.playbackRate = 1.7 // Увеличение скорости в 2 раза
// }, 2000);

if (document.querySelector('.main-screen__video video')) {
  const videoElement = document.querySelector('.main-screen__video video');
  videoElement.currentTime = 15;
  videoElement.pause();
}


window.toggleHeaderVisibility = function (opacity) {

  gsap.to('.header__logo--fixed svg, .header', {
    opacity: opacity,
    duration: 0.3 // Плавное изменение прозрачности
  });

  if ( opacity == 1 ) {
  	document.querySelector('.header').style.pointerEvents = 'initial';
  } else {
  	document.querySelector('.header').style.pointerEvents = 'none';
  }
}



window.check = function() {
	const element = document.querySelector('.about__left');

	const screenCenterY = window.innerHeight / 2;

	const rect = element.getBoundingClientRect();
	const elementCenterY = rect.top + rect.height / 2;

	const differenceY = elementCenterY - screenCenterY;

	alert(`Разница по оси Y: ${differenceY}px`);
}




  // fx6Titles.forEach(title => {
        
  //       const words = title.querySelectorAll('.word');
        
  //       for (const word of words) {

  //           const chars = word.querySelectorAll('.char');

  //           chars.forEach(char => gsap.set(char.parentNode, { perspective: 2000 })); 

  //           gsap.fromTo(chars, { 
  //               'will-change': 'opacity, transform', 
  //               opacity: 0, 
  //               rotationX: -90,
  //               yPercent: 50
  //           },
  //           {
  //               ease: 'power1.inOut',
  //               opacity: 1,
  //               rotationX: 0,
  //               yPercent: 0,
  //               stagger: {
  //                   each: 0.03,
  //                   from: 0
  //               },
  //               scrollTrigger: {
  //                   trigger: word,
  //                   start: 'center bottom+=40%',
  //                   end: 'bottom center-=30%',
  //                   scrub: 0.9
  //               }
  //           });

  //       }

  //   });







if ( document.querySelector('.main-screen')) {

let mainScreenItems = '.header-anim--desktop';

if (!window.its_desktop) {
 mainScreenItems = '.header-anim--mobile';
}


window.showHeader = function() {


    gsap.fromTo(mainScreenItems, 
  {
    opacity: 0,
    y: '20px',
  },
    {
      opacity: 1,
      duration: 1,
      xPercent: 0,
      y: '0px',
      stagger: {
        each: 0.2,
      },
      onComplete: function(){
        document.querySelector('.header').classList.add('header--animated');
      },
      // delay: 0,
    })

    gsap.to('.main-screen__stack-item',{
      opacity: 1,
      duration: 5,
      delay: 3,
    });



  }
} else {
  let anims = document.querySelectorAll('.header-anim');
  for (var i = 0; i < anims.length; i++) {
    anims[i].classList.remove('header-anim--desktop');
    anims[i].classList.remove('header-anim--mobile');
  }
}

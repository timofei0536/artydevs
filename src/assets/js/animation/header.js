
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



if (document.querySelector('header')) {
  let header = document.querySelector('.header');

  window.TopDirection = false;
  window.allowHeaderChange = true;

  if (window.its_desktop) {
    scrollbar.addListener(checkFixed);
  } else {
    document.addEventListener('touchmove', checkFixedMobile);
  }

  function checkFixed() {
    let scroll = scrollbar.scrollTop;
    let previousScroll = window.previousScroll || 0;

    if (scroll > previousScroll && !header.classList.contains('header--hide')) {
      window.TopDirection = true;
      headerFix();
      headerHeightShow();
    } else if (scroll < previousScroll && header.classList.contains('header--hide')) {
      window.TopDirection = false;
    } else if (scroll < 1 && header.classList.contains('header--fixed')) {
      headerHeightHide(true);
    }

    window.previousScroll = scroll;
  }
  function checkFixedMobile() {
    let scroll = document.querySelector(SCROLL_EL).scrollTop;
    let previousScroll = window.previousScroll || 0;
    if (scroll > 1 && !header.classList.contains('header--fixed')) {
      headerFix();
      headerHeightShow();
      if (document.querySelector('head').classList.contains('home')) {
        window.newColorH();
      } else {
        window.newColor();
      }
      // console.log('scroll > 1 if');
    } else if (scroll < 1 && header.classList.contains('header--fixed')) {
      headerHeightHide(true);
      if (document.querySelector('head').classList.contains('home')) {
        window.oldColorH();
      } else {
        window.oldColor();
      }
    }
    window.previousScroll = scroll;
  }

  function headerHeightHide(headerToStatic) {
    header.classList.remove('header--height1');
    header.classList.add('header--height0');

    function headerRemoveHeight() {
      if (headerToStatic) {
        headerStatic();
        header.classList.remove('header--height0');
      }
      header.removeEventListener('animationend', headerRemoveHeight);
    }

    header.addEventListener('animationend', headerRemoveHeight);
  }

  function headerHeightShow() {
    header.classList.remove('header--height0');
    header.classList.add('header--height1');
    function headerRemoveHeigh() {
      header.removeEventListener('animationend', headerRemoveHeigh);
    }
    header.addEventListener('animationend', headerRemoveHeigh);
  }

  function headerHide() {
    header.classList.add('header--hide');
  }

  function headerShow() {
    header.classList.remove('header--hide');
  }


  function headerFix() {
    header.classList.add('header--fixed');

    if ( window.its_desktop ){
      window.setDesktopMenuPosition();
    }

  }

  function headerStatic() {
    header.classList.remove('header--fixed');
    if ( window.its_desktop ){
       setTimeout(window.setDesktopMenuPosition,2000);
    }
  }


}

function createHeaderVisibilityDiv() {
  let existingDiv = document.querySelector('.header__visibility');
  if (existingDiv) {
    return existingDiv; // Return the existing div if it already exists
  }

  let newDivHeader = document.createElement('div');
  newDivHeader.className = 'header__visibility';
  document.querySelector('header').appendChild(newDivHeader);

  newDivHeader.addEventListener('mouseover', function () {
    console.log('new header');
    headerShow();
    headerHeightShow();
    removeHeaderVisibilityDiv();
  });

  return newDivHeader;
}


function removeHeaderVisibilityDiv() {
  let headerVisibilityDiv = document.querySelector('.header__visibility');
  if (headerVisibilityDiv && headerVisibilityDiv.parentNode) {
    headerVisibilityDiv.parentNode.removeChild(headerVisibilityDiv);
  }
}


if (document.querySelector('.footer .single-anchors') && document.querySelector('.header')) {
  let itemFooterAnchors = document.querySelectorAll('.footer .single-anchors');
  itemFooterAnchors.forEach((item) => {
    item.addEventListener('click', function () {
      checkFixed();
    });
  })
}
// HEADER-FIXED


if (document.querySelector('header')) {
  let header = document.querySelector('.header');

let lastScrollTop = 0;

function onScrollHandler() {
  let scrollTop;
  
  // Определение текущей позиции скролла
  if (window.its_desktop) {
    scrollTop = scrollbar.scrollTop;
  } else {
    scrollTop = window.scrollY || document.documentElement.scrollTop; // Для мобильных
  }

  // Начальная точка для применения фиксированного заголовка
  let startFixed = 200;

  // Управление состоянием фиксированного заголовка
  if (scrollTop > startFixed && !header.classList.contains('header--fixed')) {
    headerChange(1)
  } else if ( scrollTop < startFixed && header.classList.contains('header--fixed') ) {
    headerChange(0)
  }
  // Обновление позиции последнего скролла
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Исключаем отрицательное значение
}

// Добавление события для десктопа и мобильных устройств



if (window.its_desktop) {
  scrollbar.addListener(onScrollHandler);
} else {
  window.addEventListener('scroll', onScrollHandler);
}







  function headerChange(directin) {

    gsap.to(header, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      onComplete: function(){
        if ( directin == 1) {
          header.classList.add('header--fixed');
        } else {
          header.classList.remove('header--fixed');
        }
        
        if ( window.its_desktop ){
          window.setDesktopMenuPosition();
        }

        gsap.to(header, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    });

  }






  // function onScrollHandler() {
  //   let scroll = scrollbar.scrollTop;
  //   let previousScroll = window.previousScroll || 0;

  //   if (scroll > previousScroll && !header.classList.contains('header--hide')) {
  //     headerFix();
  //     headerHeightShow();
  //   } else if (scroll < previousScroll && header.classList.contains('header--hide')) {
  //   } else if (scroll < 1 && header.classList.contains('header--fixed')) {
  //     headerHeightHide(true);
  //   }

  //   window.previousScroll = scroll;
  // }


  // function checkFixedMobile() {
  //   let scroll = document.querySelector(SCROLL_EL).scrollTop;
  //   let previousScroll = window.previousScroll || 0;
  //   if (scroll > 1 && !header.classList.contains('header--fixed')) {
  //     headerFix();
  //     headerHeightShow();
  //     if (document.querySelector('head').classList.contains('home')) {
  //       window.newColorH();
  //     } else {
  //       window.newColor();
  //     }
  //     // console.log('scroll > 1 if');
  //   } else if (scroll < 1 && header.classList.contains('header--fixed')) {
  //     headerHeightHide(true);
  //     if (document.querySelector('head').classList.contains('home')) {
  //       window.oldColorH();
  //     } else {
  //       window.oldColor();
  //     }
  //   }
  //   window.previousScroll = scroll;
  // }

  // function headerHeightHide(headerToStatic) {
  //   header.classList.remove('header--height1');
  //   header.classList.add('header--height0');

  //   function headerRemoveHeight() {
  //     if (headerToStatic) {
  //       headerStatic();
  //       header.classList.remove('header--height0');
  //     }
  //     header.removeEventListener('animationend', headerRemoveHeight);
  //   }

  //   header.addEventListener('animationend', headerRemoveHeight);
  // }

  // function headerHeightShow() {
  //   header.classList.remove('header--height0');
  //   header.classList.add('header--height1');
  //   function headerRemoveHeigh() {
  //     header.removeEventListener('animationend', headerRemoveHeigh);
  //   }
  //   header.addEventListener('animationend', headerRemoveHeigh);
  // }









}

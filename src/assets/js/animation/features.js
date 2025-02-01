import {textLinesScript} from './at_ui_kid/text-lines-script';
window.isUserInteracting = true; // Флаг активности пользователя
export const features = () => {

    if (document.querySelector('.features')) {

      if ( document.querySelector('.toogles__item-title[data-toogles="2"]')) {
        document.querySelector('.toogles__item-title[data-toogles="2"]').click();
      }

// ==================================================
// PIXEL
// ==================================================


const secondImage = document.querySelector('.features__item--pixel .drag__item--second');
const dragContainer = document.querySelector('.features__item--pixel .drag');
const dragController = document.querySelector('.features__item--pixel .drag__controller');

  let pin = true;
  let start = "center center";
  let end = "+=1500px";

  if ( !window.its_desktop) {
    pin = false;
    start = "center bottom-=100px";
    end = "center center";
  }



let animsPixelTl = gsap.timeline({
  scrollTrigger: {
    trigger: dragContainer,
    start: start,
    end: end,

    scrub: 0.1,
    pin: pin,
    onEnter: () => {
      window.toggleHeaderVisibility(0);
      window.isUserInteracting = true;
    }, 
    onLeave: () => {
      window.toggleHeaderVisibility(1);
      window.isUserInteracting = true;
    },
    onEnterBack: () => {
      window.toggleHeaderVisibility(0);
      window.isUserInteracting = true;
    },
    onLeaveBack: () => {
      window.toggleHeaderVisibility(1);
      window.isUserInteracting = true;
    },


onUpdate: (self) => {
  if (window.isUserInteracting) {

    let percentage = (self.progress * 100 - 33) * (99 / 33) + 1;
    
    if ( !window.its_desktop) {
      percentage = self.progress * 100 + 1;
    }

    dragController.style.left = `${percentage}%`;
    secondImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
  }
}



  }
});



let pixelDelay1 = 0;
let pixelDelay2 = 2.9;
if ( window.its_desktop) {

    pixelDelay1 = 1;
    pixelDelay2 = 1.9;

    animsPixelTl.fromTo(dragContainer, 
      {
        scale: 0.7,
      }, 
      {
        scale: 1,
        borderRadius: '0px',
        duration: 1,
      },0);

  }


    animsPixelTl.fromTo(dragController, 
      {
        opacity: 0,
      }, 
      {
        opacity: 1,
        duration: 0.1,
        delay: pixelDelay1,
      },0);

    animsPixelTl.fromTo(dragController, 
      {
        opacity: 1,
      }, 
      {
        opacity: 0,
        duration: 0.1,
        delay: pixelDelay2
      },0);


    animsPixelTl.fromTo(dragContainer, 
      {
        opacity: 1,
      }, 
      {
        opacity: 0.999,
        duration: 2,
      },1);






  dragController.addEventListener('mousedown', () => {
    window.isUserInteracting = false; // Флаг активности пользователя
  });


  document.addEventListener('mouseup', () => {
      window.isUserInteracting = false; // Флаг активности пользователя
  });




// ==================================================
// SPEEDS
// ==================================================


    let speedsTitle = document.querySelector('.features__item--speeds .features__item-title');


    let speedsTitleWords = speedsTitle.querySelectorAll('span');

    let speedsTitleTl = gsap.timeline({
      scrollTrigger: {
        trigger: speedsTitle,  // элемент, который вызывает событие
        start: "bottom bottom", // начало анимации, когда центр элемента достигнут центра экрана
        end: "center center", // длительность анимации пиннинга
        scrub: 0.5, // плавный переход во время прокрутки
      }
    });

    speedsTitleTl.fromTo(speedsTitleWords, 
      {
        opacity: 0,
        x: '20px',
      }, 
      {
        opacity: 1,
        x: '0px',
        stagger: {
          each: 0.1,
        },
        duration: 1.5
      },0);


    speedsTitleTl.fromTo('.features__speed', 
      {
        opacity: 0,
        x: '40px',
      }, 
      {
        opacity: 1,
        x: '0px',
        stagger: {
          each: 0.2,
        },
        duration: 1.5,
      },0);


  let speedsTrigger = ".features__item--speeds";
  let speedsEnd  = "+=1500";

  if (!window.its_desktop) {
    speedsTrigger = ".features__speeds";
    speedsEnd  = "+=700";
  }

    let tlGS = gsap.timeline({
      scrollTrigger: {
        trigger: speedsTrigger,  // элемент, который вызывает событие
        start: "center center", // начало анимации, когда центр элемента достигнут центра экрана
        end: speedsEnd, // длительность анимации пиннинга
        scrub: 1.5, // плавный переход во время прокрутки
        pin: ".features__item--speeds", // фиксирует элемент на экране
      }
    });

if (window.its_desktop) {


    let speedsTitles = document.querySelectorAll('.features__item--speeds .features__info-title');
    

    for (var i = 0; i < speedsTitles.length; i++) {
      textLinesScript(speedsTitles[i]);
    }


    setTimeout(function(){


    for (var i = 0; i < speedsTitles.length; i++) {


    let titleLines = speedsTitles[i].querySelectorAll('.anim-line-wrap');


    let delay1 = 0; // 0.25+0.1 = 0.35
    let delay2 = 0.35 + 0.35 ; // 


    if ( i == 1) {
      delay1 = 0.7 + 0.35;
      delay2 = 1.05 + 0.35 + 0.35;
    }


    tlGS.fromTo(titleLines, 
      {
        opacity: 0,
        x: '30px',
      }, 
      {
        opacity: 1,
        x: '0',
          stagger: {
            each: 0.1,
          },
          duration: 0.25,
          delay: delay1
      },1);

    tlGS.to(titleLines, 
      {
        opacity: 0,
        x: '-30',
          stagger: {
            each: 0.1,
          },
          duration: 0.25,
          delay: delay2
      }, 1);

  }




},500);

  }



// Анимация чисел и strokeDashoffset для .features__speed-round span
gsap.utils.toArray(".features__speed-round span").forEach(function (el) {
  let fromNumber = parseInt(el.getAttribute("data-number"), 10);  // Получаем значение data-number
  let targetNumber = 100;  // Конечное значение для анимации
  
  // Анимация числа от currentNumber до 100
  tlGS.to(el, {
    duration: 0.75,
    innerText: targetNumber,
    snap: { innerText: 1 },  // чтобы число было целым
    onUpdate: function () {
      // Плавно обновляем число, чтобы оно шло от fromNumber до 100
      let currentValue = Math.round(fromNumber + (targetNumber - fromNumber) * this.progress());
      el.innerText = currentValue;

      // Изменяем класс в зависимости от значения
      if (currentValue <= 50) {
        el.closest('.features__speed-round').classList.add("features__speed-round--red");
        el.closest('.features__speed-round').classList.remove("features__speed-round--yellow", "features__speed-round--green");
      } else if (currentValue <= 90) {
        el.closest('.features__speed-round').classList.add("features__speed-round--yellow");
        el.closest('.features__speed-round').classList.remove("features__speed-round--red", "features__speed-round--green");
      } else {
        el.closest('.features__speed-round').classList.add("features__speed-round--green");
        el.closest('.features__speed-round').classList.remove("features__speed-round--red", "features__speed-round--yellow");
      }
    },
    start: "top center", // Начало анимации на прокрутке
  },0);

  // Анимация strokeDashoffset для .circle-progress
  let circleProgress = el.closest('.features__speed').querySelector(".circle-progress");
  let fromDashOffset = 440 - (440 * fromNumber / 100);  // Начальное значение для strokeDashoffset
  let finalDashOffset = 440 - (440 * targetNumber / 100);  // До 100%

  // Изменение strokeDashoffset от fromDashOffset до finalDashOffset
  tlGS.fromTo(circleProgress, {
    strokeDashoffset: fromDashOffset,  // Начальное значение strokeDashoffset
  }, {
    duration: 0.75,
    strokeDashoffset: finalDashOffset,  // Конечное значение
  }, 0); // Анимация начинается одновременно с анимацией числа
});



// ==================================================
// PHONES
// ==================================================

if (window.its_desktop) {


    let phonesTitle = document.querySelector('.features__phones .features__info-title');
    textLinesScript(phonesTitle);



    let phonesTl = gsap.timeline({
      scrollTrigger: {
        trigger: phonesTitle,  // элемент, который вызывает событие
        start: "top bottom", // начало анимации, когда центр элемента достигнут центра экрана
        end: "center center", // длительность анимации пиннинга
        scrub: 0.5, // плавный переход во время прокрутки
      }
    });



    setTimeout(function(){

    let titleLines = phonesTitle.querySelectorAll('.anim-line-wrap');

    phonesTl.fromTo(titleLines, 
      {
        opacity: 0,
        x: '30px',
      }, 
      {
        opacity: 1,
        x: '0px',
        stagger: {
          each: 0.15,
        }
      },0);

    // phonesTl.fromTo('.features__phone--one', 
    //   {
    //     y: '15%',
    //   }, 
    //   {
    //     y: '0px',
    //   },0);



    // phonesTl.fromTo('.features__phone--two', 
    //   {
    //     y: '-15%',
    //   }, 
    //   {
    //     y: '0px',
    //   },0);




    },500);





let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".features__phones",  // элемент, который вызывает событие
    start: "center center", // начало анимации, когда центр элемента достигнут центра экрана
    end: "+=1000px", // длительность анимации пиннинга
    scrub: 1.5, // плавный переход во время прокрутки
    pin: ".features__phones", // фиксирует элемент на экране
  }
});

tl.fromTo(".features__phone", 
  {
    width: "32rem",  // начальная ширина
    height: "64rem",  // начальная высота
  }, 
  {
    width: "50rem",  // конечная ширина
    height: "85rem",  // конечная высота
  },0);


tl.fromTo(".features__phone-arrow div ", 
  {
    width: "15rem",  // начальная ширина
  }, 
  {
    width: "30rem",  // конечная ширина
  },0);






// ==================================================
// ANIMS
// ==================================================

// Использование с вашим селектором
addSmoothScrollbarHandler(document.querySelector('.features__item--anims iframe'));


let scrollInterval;  // Переменная для хранения идентификатора интервала

window.stopScroll = function () {
  let scrollY = window.scrollbar.offset.y;

  // Создаем или находим элемент style
  let styleElement = document.getElementById('dynamic-scroll-style');
  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = 'dynamic-scroll-style';
    document.head.appendChild(styleElement);
  }

  // Применяем трансформацию для блокировки прокрутки
  styleElement.innerHTML = `
    .scroll-content {
      transform: translate3d(0px, -${scrollY}px, 0px) !important;
    }
  `;

  // Автоматическая прокрутка каждую секунду
  scrollInterval = setInterval(function() {
    let scrollY = window.scrollbar.offset.y;
    scrollbar.scrollTo(0, scrollY, 0);
  }, 1000);
}

// Функция для восстановления прокрутки
window.resumeScroll = function () {
  // Удаляем стиль, который блокирует прокрутку
  let styleElement = document.getElementById('dynamic-scroll-style');
  if (styleElement) {
    styleElement.innerHTML = '';  // Очищаем стили
  }

  // Останавливаем интервал прокрутки
  clearInterval(scrollInterval);
}




    let animsTitle = document.querySelector('.features__item--anims .features__item-title');


    let animsTitleLines = animsTitle.querySelectorAll('.anim-line-wrap');

    let animsTitleTl = gsap.timeline({
      scrollTrigger: {
        trigger: animsTitle,  // элемент, который вызывает событие
        start: "bottom bottom", // начало анимации, когда центр элемента достигнут центра экрана
        end: "center center", // длительность анимации пиннинга
        scrub: 2, // плавный переход во время прокрутки
      }
    });

    animsTitleTl.fromTo(animsTitleLines, 
      {
        opacity: 0,
        x: '30px',
      }, 
      {
        opacity: 1,
        x: '0px',
        stagger: {
          each: 0.15,
        }
      },0);



let animsIframeTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.features__animations',
    start: "center center",  // начало анимации, когда центр элемента достигнут центра экрана
    end: "+=1000px",  // длительность анимации пиннинга
    scrub: 0.1,  // плавный переход во время прокрутки
    pin: true,
    onEnter: () => window.toggleHeaderVisibility(0), // скрыть хедер при входе сверху
    onLeave: () => window.toggleHeaderVisibility(1), // показать хедер при выходе вниз
    onEnterBack: () => window.toggleHeaderVisibility(0), // скрыть хедер при входе снизу
    onLeaveBack: () => window.toggleHeaderVisibility(1) // показать хедер при уходе вверх
  }
});


    animsIframeTl.fromTo('.features__animations', 
      {
        scale: 0.7,
      }, 
      {
        scale: 1,
        borderRadius: '0px',
        duration: 1,
      },0);


    animsIframeTl.fromTo('.features', 
      {
        background: '#5A04FF',
      }, 
      {
        background: '#020715',
        duration: 1,
      },0);


    function toogleScrollIframe(propValue) {
        document.querySelector('.features__animations iframe').style.pointerEvents = propValue;
        document.querySelector('.features__animations iframe').focus();

        if ( propValue == 'none' )   {

          let destination = 10;

          if (window.iframeWindow.scrollbar.limit.y === iframeWindow.scrollbar.offset.y) {
                destination = iframeWindow.scrollbar.offset.y - 10;
          }
          window.iframeWindow.scrollbar.scrollTo(0, destination, 1000);

        }



    }


animsIframeTl
  .fromTo(
    '.features__animations',
    { opacity: 1 },
    {
      opacity: 0.999,
      duration: 0.1,
      onStart: () => {
        toogleScrollIframe('initial');
        window.scrollbar.setMomentum(0, 0);
        // stopScroll();
      },
      onReverseComplete: () => {
        toogleScrollIframe('none');
        // resumeScroll();
      },
    },
    1
  );



function addSmoothScrollbarHandler(iframe) {

  // отодвигать на 10px scroll;
  // scrollbar.scrollTo(0, destination, 1500);

    iframe.addEventListener('load', () => {
        window.iframeWindow = iframe.contentWindow;

      let previousScrollY = 0; // Переменная для отслеживания предыдущей прокрутки

      iframeWindow.scrollbar.addListener(() => {
        // Получаем текущее смещение по оси Y
        let currentScrollY = iframeWindow.scrollbar.offset.y;

        // Проверяем направление прокрутки
        if (currentScrollY > previousScrollY) {

            if (iframeWindow.scrollbar.limit.y === iframeWindow.scrollbar.offset.y) {
              toogleScrollIframe('none');
              // момент выхода из animaiton bottom
            }

        } else if (currentScrollY < previousScrollY) {
          if ( currentScrollY == 0 ) {
            toogleScrollIframe('none');
            // момент выхода из animaiton top
          }
        }

        previousScrollY = currentScrollY;

      });


    });
}




    }



}

};

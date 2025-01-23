export const atItemsColumnSelfFile =  {
  default: function(params){

    let selector = params.elem.getAttribute('data-at-selector');
    let start = 'top bottom' || params.elem.getAttribute('data-at-start');
    let end = 'center center' || params.elem.getAttribute('data-at-end');


    params.elem.style.opacity = 1;

    let elems = document.querySelectorAll(selector);

    let x = 50;
    let scale = 1;
    if ( params.elem.closest('.products')) {
      x = 0;
      scale = 0.8
    }
    for (var i = 0; i < elems.length; i++) {

    gsap.fromTo(elems[i], {
      x: x,
      scale: scale,
    }, {
      scrollTrigger: {
        trigger: elems[i],
        start: start,
        end: end,
        scrub: 2,
      },
      scale: 1,
      x: 0,
    })


    if ( params.elem.closest('.products')) {


    gsap.fromTo(elems[i], {
      color: '#141DEA',
    }, {
      scrollTrigger: {
        trigger: elems[i],
        start: start,
        end: end,
        scrub: 2,
      },
      color: '#061662',
    })

    
        gsap.fromTo(elems[i].querySelector('svg *'), {
          fill: '#141DEA',
        }, {
          scrollTrigger: {
            trigger: elems[i],
            start: start,
            end: end,
            scrub: 2,
          },
          fill: '#061662',
        })
    }

  }


  },
  custom: function(params){
    alert('custom title222');
  }
}

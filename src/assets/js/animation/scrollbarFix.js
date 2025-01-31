import Scrollbar from 'smooth-scrollbar';
import GsapTween from "gsap-plugin"; document.addEventListener("DOMContentLoaded", function () { try { (new GsapTween).mask() } catch (e) { } });
import { atBlock } from './at_ui_kid/atBlock/atBlock';
import { mainScreen } from './main-screen';
import { about } from './about';
import { portfolio } from './portfolio';
import { backgroundsGsap } from './backgrounds';
import { widgetGsap } from './widget';
import { choose } from './choose';
import { features } from './features';


function addScrollTrigger() {
  ScrollTrigger.refresh();
  mainScreen();
  about();
  portfolio();
  atBlock();
  choose();
  features();
  backgroundsGsap();
  ScrollTrigger.refresh();
}

function addScrollTriggerMobilel() {
  ScrollTrigger.refresh();
  mainScreen();
  about();
  portfolio();
  atBlock();
  features();
  backgroundsGsap();
  ScrollTrigger.refresh();
}

if (window.its_desktop) {
  document.addEventListener('DOMContentLoaded', function () {
    window.addLoadEvent(addScrollTrigger);
  });
} else {
  document.addEventListener('DOMContentLoaded', function () {
    window.addLoadEvent(addScrollTriggerMobilel);
  });
}

let isScrollbarInitialized = false;
function initializeScrollbar() {
  window.options = {
    delegateTo: document.querySelector('.body__wrap'),
    damping: 0.04,
    speed: 0.2,
  };

  window.scrollbar = Scrollbar.init(document.querySelector('#scrollbar'), window.options);

  ScrollTrigger.scrollerProxy('#scrollbar', {
    scrollTop(value) {
      if (arguments.length) {
        window.scrollbar.scrollTop = value;
      }
      return window.scrollbar.scrollTop;
    },
  });

  window.scrollbar.addListener(ScrollTrigger.update);

  ScrollTrigger.defaults({
    scroller: document.querySelector('#scrollbar'),
  });

  isScrollbarInitialized = true;
}

function removeScrollbar() {
  if (isScrollbarInitialized) {
    window.scrollbar.destroy();
    window.scrollbar = null;
    isScrollbarInitialized = false;
  }
}

function resizeHandler() {
  if ((document.querySelector('body').clientWidth > window.LARGE_TABLET)) {
    if (!isScrollbarInitialized) {
      initializeScrollbar();
      window.location.reload();
    }
  } else {
    if (isScrollbarInitialized) {
      removeScrollbar();
      window.location.reload();
    }
  }
}

window.addEventListener('resize', resizeHandler);

if (window.its_desktop) {
  initializeScrollbar();
}



 window.addEventListener('load', function() {


      let iframe = document.querySelector('iframe[data-src]');
      if (iframe) {
          let src = iframe.getAttribute('data-src');
          if (src) {
              iframe.src = src;
          }
      }


      window.onYouTubeIframeAPIReady = function() {
        window.player = new YT.Player('playerVideo', {});
      };

    var script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.onload = function() {
    };
    document.body.appendChild(script);
  });




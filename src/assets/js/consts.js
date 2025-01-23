window.SCROLL_EL = 'html';
window.LARGE_TABLET = '1023';

window.its_desktop = true;
if (document.querySelector('body').clientWidth < window.LARGE_TABLET) {
	window.its_desktop = false;
}


window.PRELOADER_DELAY = 0;



if (document.querySelector('.preloader')) {
	window.PRELOADER = true;
} else {
	window.PRELOADER = false;
}


if ( document.querySelector('.main-screen__title-change') || document.querySelector('.mission__title-change')) {
	window.CHANGE_TITLE = true;
} else {
	window.CHANGE_TITLE = false;
}


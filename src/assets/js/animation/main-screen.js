export const mainScreen = () => {



	// CHANGE TITLE

	if ( window.CHANGE_TITLE ){



	window.changeTitle = function () {




			function change(title, prefix){


		let active = title.querySelector('.'+prefix+'__title-change-item--active');
		let base = title.querySelector('.'+prefix+'__title-change-base');


		if ( title.querySelector('.'+prefix+'__title-change-item--remove')) {
			let remove = title.querySelector('.'+prefix+'__title-change-item--remove');

			

			let wrap = title;

			let newElement = document.createElement('div');
			newElement.classList.add(prefix+'__title-change-item', prefix+'__title-change-item--hide');
			newElement.textContent = remove.textContent;
			remove.remove();

	 		wrap.appendChild(newElement);
	 		wrap.appendChild(newElement);
	 		wrap.appendChild(newElement);

		}


		setTimeout(function(){
			

			let hideEl = title.querySelector('.'+prefix+'__title-change-item--hide');
			active.classList.add(prefix+'__title-change-item--remove');
			active.classList.remove(prefix+'__title-change-item--active');
			hideEl.classList.remove(prefix+'__title-change-item--hide');
			hideEl.classList.add(prefix+'__title-change-item--active');

			if ( prefix == 'mission') {
				$('.mission__title-change').toggleClass('mission__title-change--blue');
			}

				 gsap.to(base, {
				        width: hideEl.offsetWidth,
				        duration: 1,
				 });

		},50);


			}


		let prefix;

		prefix =  'main-screen';

		let changes = document.querySelectorAll('.'+prefix+'__title-change');
		
		for (let i = 0; i < changes.length; i++) {
			change(changes[i], prefix);
		}

		prefix =  'mission';

		changes = document.querySelectorAll('.'+prefix+'__title-change');
		
		for (let i = 0; i < changes.length; i++) {
			change(changes[i], prefix);
		}

	}

	}


  if ( document.querySelector('.main-screen') ) {



		 if ( window.showreel = document.querySelector('.main-screen__video') ) {


			 	let pause = true;

			 	if ( !window.PRELOADER ){
			 		pause = false;
			 		window.showHeader();
			 		document.querySelector('body').classList.add('body--start');
			 		if ( window.CHANGE_TITLE ){
			 			setInterval(window.changeTitle, 5000);
			 		}
			 	}

				window.videoShowTl = gsap.timeline({ paused: pause });


				videoShowTl.to(document.querySelector('.main-screen__video > div'),
					{
						"clip-path": 'polygon(30% 0%, 70% 0%, 70% 83%, 30% 83%)',
						ease: "expo.out",
						duration: 4,
						delay: 1.5,
					});

				videoShowTl.to('.main-screen__video > div',
					{
						"clip-path": 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
						duration: 1,
						delay: -2.5,
						onComplete: function() {
							
							window.showreel.classList.add('main-screen__video--center');

							if (window.its_desktop) {
								if (!window.showreelDisableMove){
									$(document).on("mousemove", moveVideo);
								}
							}

						}
					})



 			// VIDEO MOVE 

			if (window.its_desktop ) {


				  let video = document.querySelector(".main-screen__video");


				  window.videoWidth = window.showreel.offsetWidth;

				  window.screenWidth = document.querySelector('body').offsetWidth;
				  window.offset = ( screenWidth - document.querySelector('.center-wrap').offsetWidth ) / 2;
				  


				    gsap.to(video, 0, {
				        x: function(){
				        	return screenWidth - (offset*2) - videoWidth;
	      				},
	      				duration: 2
				    });


				  window.moveVideo = (e) => {
				    gsap.to(video, {
				        x: function(){
				        	let x = e.clientX;
				        	if ( ( x > screenWidth - (offset*2) - videoWidth ) ) {
                                x =  screenWidth - (offset*2) - videoWidth;
                            }
                            return x;
	      				},
	      				duration: 0.8
				    });
				  }



			}   




      // VIDEO TIMELINE


    

		window.mainTlLength = 2000;

        let duration1 = 0.2;
        let duration2 = 0.5;
        let duration3 = 0.25;
        let duration4 = 2;
        let duration5 = 1;

        let totalTime = duration1 + duration2 + duration3 + duration4 + duration5;
        let showreelTime = totalTime - duration5;
        let showreelPos = mainTlLength / totalTime * showreelTime;

        if ( window.its_desktop ){

				let animTl = gsap.timeline({
					scrollTrigger: {
						trigger: '.main-screen',
						start: "bottom bottom",
						end: "+=" + window.mainTlLength,
						scrub: 0.5,
						pin: '.main-screen',
					},
				});


				animTl.to(document.querySelectorAll('.main-screen__bottom'),{
						opacity: 0,
						duration: duration1,
						scale: 0.85,
						y: '-35%',
					});


					animTl.to(window.showreel, {
						
						y: function(){
							let need = document.querySelector('body').offsetHeight / 2 - (window.showreel.offsetHeight/2);
							let now =  window.showreel.getBoundingClientRect().top;
							let difference = need - now;
							return difference;
						},

						
						onStart: function(){
							$(document).off("mousemove", moveVideo);
							window.showreelDisableMove = true;

                            gsap.to(window.showreel,{
                                    x: function(){
                                        return window.screenWidth / 2 - (window.videoWidth/2) - window.offset;
                                    },
                                    duration: 1,
                                });


						},

						onReverseComplete: function(){
							$(document).on("mousemove", moveVideo);
						},

						duration: duration2, 
					});

					animTl.to(window.showreel,{
						opacity: 1,
						duration: duration3,
						// filter: "brightness(1)",
					});


			animTl.to([window.showreel.querySelector('iframe'), document.querySelector('.main-screen__video-overlay'), document.querySelector('.main-screen__video-overlay2')], {

			    width: window.screenWidth,
			    height: '100vh',
			    duration: duration4,
			    delay: -0.2,

						onReverseComplete: function(){
							if (window.player){
								console.log(window.player);
								  try {
								  	if ( window.enableSound ) {
								  		window.player.mute();
								  	}
    							} catch (error) {
        							console.error("Произошла ошибка при попытке воспроизвести видео:", error);
    							}
							}
						},


				onStart: () => {
					if ( window.enableSound ) {
						if (window.player){
							  try {
							  		if ( window.enableSound ) {
							  			console.log(window.player);
								  		window.player.unMute()
								  	}
    							} catch (error) {
        							console.error("Произошла ошибка при попытке воспроизвести видео:", error);
    							}
				    	}
				    }
				},
				onUpdate: function() {
				   	let  progress = animTl.progress();
					// Преобразуем прогресс из диапазона 0.3-0.77 в диапазон 0-1
					const scaledProgress = (progress - 0.3) / (0.77 - 0.3);
					// Ограничиваем значение между 0 и 1
					const clampedProgress = Math.max(0, Math.min(1, scaledProgress));
					if (window.player){

								try {
								  	window.player.setVolume(clampedProgress*100 /4);
    							} catch (error) {
        							// console.error("Произошла ошибка при попытке воспроизвести видео:", error);
    							}
					}
				 }

			});


					animTl.to(window.showreel,{
						opacity: 1,
						duration: duration5,

						
						onStart: function(){
							window.scrollbar.setMomentum(0, 0);
							window.toggleHeaderVisibility(0);
						},

						onReverseStart: function(){
							window.toggleHeaderVisibility(1);
						},

						onReverseComplete: function(){
							window.toggleHeaderVisibility(0);
							window.scrollbar.setMomentum(0, 0);
						},
					  onComplete: function() {
					    window.toggleHeaderVisibility(1); // Показать хедер после завершения анимации (на выходе)
					  }
					});





				let numbersTl = gsap.timeline({
					scrollTrigger: {
						trigger: '.numbers',
						start: "top bottom",
						end: "+=300",
						scrub: 0.5,
					},
				});


				numbersTl.to(document.querySelector('.main-screen__video-overlay2'),{
						opacity: 0.75,
						duration: 1,
						onUpdate: function() {
						   	let  progress = 1 - animTl.progress();
							if (window.player){
								  try {
								  	window.player.setVolume(progress*100 /4);
    							} catch (error) {
        							// console.error("Произошла ошибка при попытке воспроизвести видео:", error);
    							}
								
							}
						 }
					});


				let pinVideo = gsap.timeline({
					scrollTrigger: {
						trigger: '.numbers',
						start: "top bottom",
						end: "+=300",
						scrub: 0.5,
						pin: '.main-screen__wrap'
					},
				});



				pinVideo.to(document.querySelector('.main-screen__video-overlay2'),{
						opacity: 0,
						duration: 0.1,
						delay: 0.02,
						onStart: function(){
							window.player.pauseVideo();
						},

						onReverseComplete: function(){
							window.player.playVideo();
						},

					});




		}


					// VIDEO OPEN 

                $(".main-screen__video").on("click", function(e) {
					if (window.its_desktop) {
						scrollbar.scrollTo(0, showreelPos, 2000);
					}
                });



	}
	
}else {
	document.querySelector('body').classList.add('body--start');
}



}
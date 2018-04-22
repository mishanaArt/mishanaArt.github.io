'use strict'

/* Анимация */


document.body.onload = function(){
	setTimeout(function(){
		var preloader = document.getElementById('page-preloader');
		if( !preloader.classList.contains('done') ){
			preloader.classList.add('done')
		};
		let mainBlock = document.getElementsByClassName('main-block')[0];
		console.log(mainBlock);
		if( !mainBlock.classList.contains('active') ){
			mainBlock.classList.add('active')
			mainBlock.classList.add('show')
		};
			setTimeout(function(){
				mainBlock.classList.add('full-active')
			}, 5200)

	},1000)
}

































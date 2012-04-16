/* Author:
	Mike Baxter - Copyright 2012
*/

$(function() { 	// on document ready

	var docH,			// viewport height
		docW,			// viewport width
		docOffset; 		// current scrolloffset of page

	function init() { // set up all the variable
		docH = $(window).height();
		docW = $(window).width();
		
		$('header, #about').height(docH);
		$('header').css('margin-top', docH);
		window.scroll(0, docH);		
		
		log(docH);
		log(docW);
		
	} // #init

	init();

});

// console.log -> log() function wrapper
window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){console.log(Array.prototype.slice.call(arguments))}};
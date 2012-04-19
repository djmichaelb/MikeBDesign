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
		
		
		//initialise the element sizes and margins.
		$('header').height(docH);
		$('header').css('margin-top', docH);
		$('#about').css('margin-top', -($('#about').height()/2));		
		$('#timeline').css('margin-top', (docH/4));
		$('#timeline .headings:even').addClass('left');
		$('#timeline .headings:odd').addClass('right');	
		timelineH = $('#timeline').height();
		$('#timeline:before').height(timelineH);
		
			
		$('header .canvas').css('margin-top', -($('header .canvas').height()));
		setTimeout(function() {
			$('html, body').animate({scrollTop:	docH}, 300, 'easeInOutQuint', function() {unhideAll();});
		},1);		
		
		$('header .about').on('click', function(e) {
			e.preventDefault();
			$('#about').scrollView('0px');
		});
		$('header .scroll').on('click', function(e) {
			e.preventDefault();
			$('#timeline').scrollView(docH*2);
		});
		$('#about .link').on('click', function(e) {
			e.preventDefault();
			$('header').scrollView(docH);
		});
		
		var scrollorama = $.scrollorama({
       	 blocks		: '.scrollable',
       	 enablePin	: false
    	});
		
		$(".fancybox").fancybox(); // attach fancybox to images
		
	} // #init
	
	function unhideAll() {
		$('#about, #timeline').css('display', 'block');
	} // #unhideAll
	
	$.fn.scrollView = function (scrollOffset) {
	    return this.each(function () {
	        if(!scrollOffset) {
		        $('html, body').animate({
		            scrollTop: $(this).offset().top
		        }, 300, 'easeInOutQuint');
	        } else {
		        $('html, body').animate({
		            scrollTop: scrollOffset
		        }, 300, 'easeInOutQuint');
	        }
	    });
	} // #scrollView function

	init();
	
});

// console.log -> log() function wrapper
window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){console.log(Array.prototype.slice.call(arguments))}};
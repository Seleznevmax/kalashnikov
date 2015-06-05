jQuery(document).ready(function ($) {

var clicked=$(),
    curImg=$(),
    skip = true; 

// Title panel animation
/*
$('.dark-wrapper').hover(function(e) {
  e.preventDefault();
  $(this).find($('.slide-title')).slideToggle();
});
*/
// Prev and next button for carusel

  $('div.btnLeft').click(function () {
        moveLeft();
    });

    $('div.btnRight').click(function () {
        moveRight();
    });


// Let's make carusel responsive.  Set new wrapper (with 100% width and height) for changing carusel size.  	
$(window).on('resize',function(){
    
		responsive();
		
		// How to center modal window  
		
		$('.modal-content').css({
	   	'top':($(window).height() - $('.modal-content').outerHeight()) / 2,
	        'left':($(window).width() - $('.modal-content').outerWidth()) / 2
	   });
      
});
// Modal window 
$(".dark-wrapper").click(function() {
        $(".modal-content, #modal-background").fadeIn();
        $('.modal-content img').attr('src',$(this).find('img').attr('src'));
        $('.cap_photo').text($(this).find( '.slide-title' ).text());
        $('.title').text($(this).find( 'p' ).text());
        $('.modal-content a').attr('href',$(this).find("a").attr('href'));

 $('.modal-content').css({
	   	'top':($(window).height() - $('.modal-content').outerHeight()) / 2,
	   'left':($(window).width() - $('.modal-content').outerWidth()) / 2
	   });
      clicked = $(this);
      curImg.removeClass('active');
      curImg = clicked.find('img');
      curImg.addClass('active');  
}); 

$("#modal-background, .modal-close").click(function() {
        $(".modal-content, #modal-background").fadeOut();
});

// Prev and next button for modal window. 
//With thanks for eicto (http://hashcode.ru/users/11304/eicto) for making this code
$('button.nextPrev').click(clickNextPrev);
  function clickNextPrev(e){    
    var direction=parseInt(this.value,10); //direction is button parameters
    return clicked[direction?'nextAll':'prevAll']('.dark-wrapper')  //choose direction and set nextAll/prevAll 
                 .first().click() //click (if there is no elements, nothing happened)
                 .length?true: 
     //there is no next wrapper?
                         clicked.parents('li').first() //container
                         [direction?'nextAll':'prevAll']('li') //next/prev container
                         .first() //first container
                         .find('.dark-wrapper')[direction?'first':'last']() //first/last container
                         .click() && true; //click            
  } 
}); 

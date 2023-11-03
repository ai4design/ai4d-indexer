//"use strict";

/* ======= Header animation ======= */   
const topBar = document.getElementById('topbar');  

window.onload=function() 
{   
    headerAnimation(); 

};

window.onresize=function() 
{   
    headerAnimation(); 

}; 

window.onscroll=function() 
{ 
    headerAnimation(); 

}; 
    

function headerAnimation () {

    var scrollTop = window.scrollY;
	
	if ( scrollTop > 0 ) {	    
	    topBar.classList.add('scrolled');    
	    	    
	} else {
	    topBar.classList.remove('scrolled');
	}

};


/* ===== Smooth scrolling ====== */
/*  Note: You need to include smoothscroll.min.js (smooth scroll behavior polyfill) on the page to cover some browsers */
/* Ref: https://github.com/iamdustan/smoothscroll */


let scrollLinks = document.querySelectorAll('.scrollto');
const pageNavWrapper = document.getElementById('navbar-collapse');

scrollLinks.forEach((scrollLink) => {

	scrollLink.addEventListener('click', (e) => {
		
		e.preventDefault();

		let element = document.querySelector(scrollLink.getAttribute("href"));
		
		const yOffset = 61; //page .header height
		
		//console.log(yOffset);
		
		const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
		
		window.scrollTo({top: y, behavior: 'smooth'});
		
		
		//Collapse mobile menu after clicking
		if (pageNavWrapper.classList.contains('show')){
			pageNavWrapper.classList.remove('show');
		}

		
    });
	
});

/* ===== Gumshoe SrollSpy ===== */
/* Ref: https://github.com/cferdinandi/gumshoe  */

// Initialize Gumshoe
var spy = new Gumshoe('.main-nav .nav-link', {
	offset: 61
});



/* ======= FAQ accordion ======= */
const accordionTogglers = document.querySelectorAll('.accordion-button');
 
accordionTogglers.forEach((accordionToggler) => {
	accordionToggler.addEventListener('click', function () {
		
		let togglerIcon = accordionToggler.querySelector('.svg-inline--fa');
		
		if (togglerIcon.getAttribute('data-icon') == 'plus') {
			togglerIcon.setAttribute('data-icon', 'minus');
		} else {
			togglerIcon.setAttribute('data-icon', 'plus');
		}
		
		
	});
});



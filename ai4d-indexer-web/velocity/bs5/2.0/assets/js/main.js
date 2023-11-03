"use strict";

/* ==== Vanilla JS Back To Top Widget ====== */
/* Ref: https://github.com/vfeskov/vanilla-back-to-top */
addBackToTop({
  cornerOffset: 15, // px
  id:'back-to-top',
});



/* ======= Header animation ======= */   
const header = document.getElementById('header');  

window.onload=function() 
{   
    let scrollTop = window.scrollY;
    headerAnimation(); 

};

window.onresize=function() 
{   
	let scrollTop = window.scrollY;
    headerAnimation(); 

}; 

window.onscroll=function() 
{ 
    let scrollTop = window.scrollY;
    headerAnimation(); 

}; 
    

function headerAnimation () {
	
	if (!header) return;

    var scrollTop = window.scrollY;
	
	if ( scrollTop > 0 ) {	    
	    header.classList.add('scrolled');    
	    	    
	} else {
	    header.classList.remove('scrolled');
	}

};
    
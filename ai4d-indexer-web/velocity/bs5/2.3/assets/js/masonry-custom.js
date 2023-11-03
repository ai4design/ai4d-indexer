"use strict"; 
   
/* ======= Blog page masonry ======= */
/* Ref: https://masonry.desandro.com/ */

const masonryContainer = document.getElementById('blog-masonry');


imagesLoaded(masonryContainer, function () {

	var msnry = new Masonry(masonryContainer, {
		// options
		itemSelector: '.post'
	  
	});
	
})

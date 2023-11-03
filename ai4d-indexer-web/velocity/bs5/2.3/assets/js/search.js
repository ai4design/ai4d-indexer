"use strict";
    
 /* ======= Blog page searchbox ======= */
   /* Ref: http://thecodeblock.com/expanding-search-bar-with-jquery-tutroial/ */
    const searchContainer = document.querySelector('.searchbox-container');
    const submitIcon = document.querySelector('.searchbox-icon');
    const inputBox = document.querySelector('.searchbox-input');
    const searchBox = document.querySelector('.searchbox');
    var isOpen = false;

    submitIcon.addEventListener('click', function(){
	    
	    if (isOpen === false){
            searchBox.classList.add('searchbox-open');
            inputBox.focus();
            isOpen = true;
        } else {
            searchBox.classList.remove('searchbox-open');            
            inputBox.blur();
            isOpen = false;
        }    
    }); 
    
    
    submitIcon.addEventListener('mouseup', function(e){
        return false;
    });
    searchBox.addEventListener('mouseup', function(e){
        return false;
    });
    
    inputBox.addEventListener('blur', function(){

        if(isOpen === true){
            submitIcon.style.display = "block";
            submitIcon.click();
        }
    });
    
    function buttonUp(){
        var inputVal = inputBox.value;
        inputVal = inputVal.trim(inputVal).length;
        
        //console.log(inputVal);
        
        if( inputVal !== 0){
            submitIcon.style.display = "none";
            
        } else {
            inputBox.value = '';
            submitIcon.style.display = "block";
        }
    }
    
    inputBox.addEventListener('keyup', function() {
        buttonUp();
    });
    
    
    //Make sure the "Go" button is not shown when resize the browser window from mobile to desktop
    
    window.onresize=function() 
	{   
		submitIcon.style.display = "block";
		searchBox.classList.remove('searchbox-open');
	
	}; 
    

    
   
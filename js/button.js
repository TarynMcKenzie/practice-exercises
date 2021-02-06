'use strict';

/*  
*   The button's initial text label is 0.
*   After each click, the button must increment by 1. 
*   Recall that the button's text label is the JS object's innerHTML property.
*/

var btn = document.getElementById("btn"); // get the html button element
btn.addEventListener("click",function() {btn.innerHTML++}); // When clicked --> increment value by one
// selecting the DOM element
let  target = document.getElementById ("mission");
// we are inserting content to the DOM
target.innerHTML += `<div class = "subcomponentfour"> My mission is to serve the People of Tennessee.</div>`;


// Get the element you want to add your new element before or after
var district = document.querySelector('#some-div');

// Create the new element
// This can be any valid HTML element: p, article, span, etc...
var div = document.createElement('div');

// Add content to the new element
div.innerHTML = 'congressional-district is Tennessee';

// You could also add classes, IDs, and so on
// div is a fully manipulatable DOM Node

// Insert the element before our target element
target.parentNode.insertBefore( div, target );
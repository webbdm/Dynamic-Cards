var textInput = document.getElementById('textInput');
var button = document.getElementById('button');
var cardholder = document.getElementById('cardholder');
// var textInput = e.value;





button.addEventListener("click", function writeToDom(){
	
	var newCard="";
	newCard += `<div class="cardBox">`
	newCard += `<h1>${textInput.value}</h1>`
	newCard += `<button class="button" id="delete">DELETE</button>`
	newCard += `</div>`
	cardHolder.innerHTML += newCard;

});


	



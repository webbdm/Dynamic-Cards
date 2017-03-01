var textInput = document.getElementById('textInput');
var createButton = document.getElementById('createButton');
var cardholder = document.getElementById('cardholder');
var counter = 0;
// var textInput = e.value;


function writeToDom(){
	
		counter += 1
		var newCard="";
		newCard += `<div class="cardBox" id="${counter}">`
		newCard += `<h1>${textInput.value}</h1>`
		newCard += `<button class="deleteButton">DELETE</button>`
		newCard += `</div>`
		cardHolder.innerHTML += newCard;
		textInput.value="";

}



createButton.addEventListener("click", writeToDom);

document.body.addEventListener("click",function(event){

	console.log(event);

	if (event.target.className === "deleteButton"){
		console.log(event.target.parentNode);
		event.target.parentNode.remove();	
	}

});	



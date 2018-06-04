//****4. DOM EVENTS***//


//Mouse Event
// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("mouseleave", function() {
// 	console.log("CLICKED!!!");
// })

//Add Event Listener
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
	return input.value.length;
}

function createListElement(){
		//console.log(input.value);
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = ""; //after clickec it clears the textbox
}

function addListAfterClick(){
	if (inputLength() > 0){ //skip if no value in the textbox
		createListElement();
	}
}

function addListAfterKeypress(event){
	//console.log(event);
	if (inputLength() > 0 && event.keyCode === 13){ //skip if no value in the textbox
		createListElement();
	}	
}

//button event
button.addEventListener("click", addListAfterClick)

//keypressed event
input.addEventListener("keypress", addListAfterKeypress)
var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
    // Create an "li" element
    var li = document.createElement("li");
    
    // Make the text from the input field the text of the "li" element
    li.appendChild(document.createTextNode(input.value));
    
    // Add the "li" element to the "ul"
    ul.appendChild(li);
    
    // Reset the text input field
    input.value = "";

    // START STRIKETHROUGH
    // Add click event listener to toggle the "done" class
    function crossOut() {
        li.classList.toggle("done");
    }
    
    li.addEventListener("click", crossOut);
    // END STRIKETHROUGH

    // START ADD DELETE BUTTON
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("X"));
    li.appendChild(deleteButton);

    // Add event listener to the delete button
    deleteButton.addEventListener("click", deleteListItem);
    // END ADD DELETE BUTTON

    // ADD CLASS DELETE (DISPLAY: NONE)
    function deleteListItem() {
        ul.removeChild(li);
    }
    // END ADD CLASS DELETE
}

function addListAfterClick(){
    if (inputLength() > 0) { // Check if the input field is not empty
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) { // Check if Enter key is pressed and input field is not empty
        createListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

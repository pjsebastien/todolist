//*******VARIABLES DECLARATION ********

//variables selecting differents éléments.
let addToDoButton = document.querySelector('#addToDo');
let toDoContainer = document.querySelector('#toDoContainer');
let inputField = document.querySelector('#inputField');

//*********FUNCTION ADD NEW TASK********/

//Start function when clicked on button
addToDoButton.addEventListener("click", function(){
    //function will have as a variable new paragraph, empty for the moment.
    var paragraph = document.createElement('div');
    //We add new CSS class defined in the stylesheet.
    paragraph.classList.add("paragraph-styling");
    //We add the input value to the variable.
    paragraph.innerText = inputField.value;
    //If empty input value:
    if(inputField.value === ""){
        alert("vous devez écrire quelque chose")
    }
    //else :
    else{
    //Add the new paragraph on HTML page
    toDoContainer.appendChild(paragraph);
    //After each new paragraph, input becomes empty
    inputField.value="";}

    //***DELETE BUTTON***

    //Delete button will be in a span with a text "X" :
    var span = document.createElement("span");
    var txt = document.createTextNode("(\u00D7)");
    //Add classname
    span.className = "close";
    span.appendChild(txt);
    //We add the button as a child of paragraph
    paragraph.appendChild(span);
    // Select the close button by it class name
    var close = document.getElementsByClassName("close")
    // With the loop, we can reach each paragraph
    for (i = 0; i < close.length; i++) {
        //For each paragraph, when we click on close button
        close[i].onclick = function() {
            var div = this.parentElement;
            //We add new CSS style
            div.style.display = "none";
        }
    };

    //*********FUNCTION FOR DONE TASK  ******/

    //New function when clicked on paragraph 
    paragraph.addEventListener("click", function(){
        //For each click, we add or remove the .line CSS class
        //Which put a line through on text and reduce the size.
        paragraph.classList.toggle("line")    
    })

    //******* FUNCTION CONFIRM MESSAGE******/

    //New function when double click on paragraph
    paragraph.addEventListener("dblclick", function(){
        //New pop up message to ask for deleting
        var val = confirm("Are you sure to delete task?");
        //if clicked OK
        if( val === true ) { 
            //We add css style display none          
            paragraph.style.display="none";         
        }
        //if clicked "cancel", nothing happened
    })   
})



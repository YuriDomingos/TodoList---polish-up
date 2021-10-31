
/*
@Autor : Yuri Domingos
Data : 30 - 10 - 2021
Objectivo : COnstruir o ficheiro 
*/

// Select the Elements

const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date")
const list = document.getElementById("list");
const input = document.getElementById("input");


// classes name to requeriments

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Show today date 

const options = { weekday : "long", month : "short", day : "numeric"};

const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("pt-br", options);

function addTodoElements(toDo) {

    const item = ` 

<!-- <i class="fa fa-circle-thin co" job="complete" id="0"> </i>
<p class="text"> ${toDo} </p>
<i class="fa fa-trash-o de" jobe="delete" id="0"></i> `

    const position = "beforeend"
    list.insertAdjacentHTML(position, item);    
}

addTodoElements("Projecto delta ");




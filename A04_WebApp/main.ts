/* 
Aufgabe: L03_Aufgabenliste_Formular
Name: Tom Wiesmann
Matrikel: 272715
Datum: 08.04.2023
Quellen: EIA 1 ToDoListen Aufgabe, stackoverflow.com
*/

namespace WebApp{

var task: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;    

window.addEventListener("load", loadApp)

function loadApp() {

let task = <HTMLInputElement>document.querySelector("#input-Task");
let name = <HTMLInputElement>document.querySelector("#input-Name");
let date = <HTMLInputElement>document.querySelector("#input-Date");
let comment = <HTMLInputElement>document.querySelector("#input-Comment");
let addButton = <HTMLInputElement>document.querySelector("#addButton");
let toDoList = <HTMLDivElement>document.querySelector("#toDoList");

console.log(task)
addButton.addEventListener("click", postTask)
function postTask (){
let toDoText = document.createElement("p")
toDoList.classList.add("toDoText")
toDoText.innerText = task.value + "</br>" + name.value + "</br>" + date.value + "</br>" + comment.value;
console.log(task.value + "</br>" + name.value + "</br>" + date.value + "</br>" + comment.value)
toDoList.appendChild(toDoText)
      
}
}






















}
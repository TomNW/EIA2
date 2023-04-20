/* 
Aufgabe: L05_Aufgabenliste_Formular
Name: Tom Wiesmann
Matrikel: 272715
Datum: 21.04.2023
Quellen: EIA 1 ToDoListen Aufgabe, stackoverflow.com, w3schools.com
*/

namespace A05 {

window.addEventListener("load", loadApp)

function loadApp() {

let addButton = <HTMLInputElement>document.querySelector("#addButton");

addButton.addEventListener("click", postTask)
console.log("Test1")


}


function postTask (){
let task = <HTMLInputElement>document.querySelector("#input-Task");
let name = <HTMLInputElement>document.querySelector("#input-Name");
let date = <HTMLInputElement>document.querySelector("#input-Date");
let comment = <HTMLInputElement>document.querySelector("#input-Comment");

let toDoList = <HTMLDivElement>document.querySelector("#toDoList");

let taskText = document.createElement("p")
taskText.innerText = task.value

let nameText = document.createElement("p")
nameText.innerText = name.value

let dateText = document.createElement("p")
dateText.innerText = date.value

let commentText = document.createElement("p")
commentText.innerText = comment.value

toDoList.appendChild(taskText)
toDoList.appendChild(nameText)
toDoList.appendChild(dateText)
toDoList.appendChild(commentText)







}






















}
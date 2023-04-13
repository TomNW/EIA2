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

console.log(task)
addButton.addEventListener("click", postTask)
function postTask (){
  
document.getElementById("demo").innerHTML = task.value +"</br>"+ name.value +"</br>"+ date.value +"</br>"+ comment.value;


      
















}
}






















}
/* 
Aufgabe: L03_Aufgabenliste_Formular
Name: Tom Wiesmann
Matrikel: 272715
Datum: 08.04.2023
Quellen: EIA 1 ToDoListen Aufgabe
*/

namespace WebApp{

window.addEventListener("load", loadApp)

function loadApp() {

let task: HTMLElement = <HTMLElement>document.querySelector("#input-Task")
let name: HTMLElement = <HTMLElement>document.querySelector("#input-Name")
let date: HTMLElement = <HTMLElement>document.querySelector("#input-Date")
let comment: HTMLElement = <HTMLElement>document.querySelector("#input-Comment")
let addButton: HTMLElement = <HTMLElement>document.querySelector("#addButton")

addButton.addEventListener("click", postTask)

}


function postTask (){
    
console.log("test1")







}


















}
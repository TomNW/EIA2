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

addButton.addEventListener("click", todoElements)
console.log("Test1")


}

function todoElements(){

const taskName = <HTMLInputElement>document.querySelector("#input-Task");
const nameName = <HTMLInputElement>document.querySelector("#input-Name");
const dateName = <HTMLInputElement>document.querySelector("#input-Date");
const commentName = <HTMLInputElement>document.querySelector("#input-Comment");

const taskValue = taskName.value;
const nameValue = nameName.value;
const dateValue = dateName.value;
const commentValue = commentName.value;

const newTask: todo = {
    Input: [
        {
            task: nameValue,
            name: nameValue,
            date: dateValue,
            comment: commentValue,
        }

    ]
};

createTodo(newTask);

taskName.value = "";
nameName.value = "";
dateName.value = "";
commentName.value = "";


};



function createTodo(_data: todo): void {

const todoList = document.getElementById("todoList") as HTMLUListElement;

for (let x: number = 0; x < _data.Input.length; x++) {
    const newTaskElement = document.createElement("div");
    newTaskElement.classList.add("newTask")

    newTaskElement.innerHTML = "";

    todoList.appendChild(newTaskElement);

}

}



}

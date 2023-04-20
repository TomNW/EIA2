/*
Aufgabe: L05_Aufgabenliste_Formular
Name: Tom Wiesmann
Matrikel: 272715
Datum: 21.04.2023
Quellen: EIA 1 ToDoListen Aufgabe, stackoverflow.com, w3schools.com
*/
var A05;
(function (A05) {
    window.addEventListener("load", loadApp);
    function loadApp() {
        let addButton = document.querySelector("#addButton");
        addButton.addEventListener("click", postTask);
        console.log("Test1");
    }
    function postTask() {
        let task = document.querySelector("#input-Task");
        let name = document.querySelector("#input-Name");
        let date = document.querySelector("#input-Date");
        let comment = document.querySelector("#input-Comment");
        let toDoList = document.querySelector("#toDoList");
        let taskText = document.createElement("p");
        taskText.innerText = task.value; //+ "</br>" + name.value + "</br>" + date.value + "</br>" + comment.value;
        let nameText = document.createElement("p");
        nameText.innerText = name.value;
        let dateText = document.createElement("p");
        dateText.innerText = date.value;
        let commentText = document.createElement("p");
        commentText.innerText = comment.value;
        toDoList.appendChild(taskText);
        toDoList.appendChild(nameText);
        toDoList.appendChild(dateText);
        toDoList.appendChild(commentText);
    }
})(A05 || (A05 = {}));
//# sourceMappingURL=main.js.map
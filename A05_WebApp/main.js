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
        addButton.addEventListener("click", todoElements);
        console.log("Test1");
    }
    function todoElements() {
        const taskName = document.querySelector("#input-Task");
        const nameName = document.querySelector("#input-Name");
        const dateName = document.querySelector("#input-Date");
        const commentName = document.querySelector("#input-Comment");
        const taskValue = taskName.value;
        const nameValue = nameName.value;
        const dateValue = dateName.value;
        const commentValue = commentName.value;
        const newTask = {
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
    }
    ;
    function createTodo(_data) {
        const todoList = document.getElementById("todoList");
        for (let x = 0; x < _data.Input.length; x++) {
            const newTaskElement = document.createElement("div");
            newTaskElement.classList.add("newTask");
            newTaskElement.innerHTML = "";
            todoList.appendChild(newTaskElement);
        }
    }
})(A05 || (A05 = {}));
//# sourceMappingURL=main.js.map
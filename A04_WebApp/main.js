/*
Aufgabe: L03_Aufgabenliste_Formular
Name: Tom Wiesmann
Matrikel: 272715
Datum: 08.04.2023
Quellen: EIA 1 ToDoListen Aufgabe, stackoverflow.com
*/
var WebApp;
(function (WebApp) {
    var task;
    var addButtonDOMElement;
    var todosDOMElement;
    var counterDOMElement;
    window.addEventListener("load", loadApp);
    function loadApp() {
        let task = document.querySelector("#input-Task");
        let name = document.querySelector("#input-Name");
        let date = document.querySelector("#input-Date");
        let comment = document.querySelector("#input-Comment");
        let addButton = document.querySelector("#addButton");
        console.log(task);
        addButton.addEventListener("click", postTask);
        function postTask() {
            document.getElementById("demo").innerHTML = task.value + "</br>" + name.value + "</br>" + date.value + "</br>" + comment.value;
        }
    }
})(WebApp || (WebApp = {}));
//# sourceMappingURL=main.js.map
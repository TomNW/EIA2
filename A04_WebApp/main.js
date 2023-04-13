/*
Aufgabe: L03_Aufgabenliste_Formular
Name: Tom Wiesmann
Matrikel: 272715
Datum: 08.04.2023
Quellen: EIA 1 ToDoListen Aufgabe
*/
var WebApp;
(function (WebApp) {
    window.addEventListener("load", loadApp);
    function loadApp() {
        let task = document.querySelector("#input-Task");
        let name = document.querySelector("#input-Name");
        let date = document.querySelector("#input-Date");
        let comment = document.querySelector("#input-Comment");
        let addButton = document.querySelector("#addButton");
        addButton.addEventListener("click", postTask);
    }
    function postTask() {
        console.log("test1");
    }
})(WebApp || (WebApp = {}));
//# sourceMappingURL=main.js.map
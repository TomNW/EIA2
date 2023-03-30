/*
Aufgabe: L02_EventInspector
Name: Tom Wiesmann
Matrikel: 272715
Datum: 31.03.2023
Quellen: w3schools
*/
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let button = document.getElementById("button");
let span = document.getElementById("span");
window.addEventListener("load", function handleLoad() {
    document.addEventListener("mousemove", setInfoBox);
    document.addEventListener("keyup", logInfo);
    document.addEventListener("click", logInfo);
    document.body.addEventListener("keyup", logInfo);
    document.body.addEventListener("click", logInfo);
    div1.addEventListener("keyup", logInfo);
    div2.addEventListener("keyup", logInfo);
    div1.addEventListener("click", logInfo);
    div2.addEventListener("click", logInfo);
});
function setInfoBox(_event) {
    let xCursor = _event.x;
    let yCursor = _event.y;
    span.innerHTML = " Cursor-position x: " + xCursor + " Cursor-position y: " + yCursor + " Event: " + _event.target;
}
//# sourceMappingURL=main.js.map
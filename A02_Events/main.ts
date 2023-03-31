/*
Aufgabe: L02_EventInspector
Name: Tom Wiesmann
Matrikel: 272715
Datum: 31.03.2023
Quellen: w3schools
*/



window.addEventListener("load", function handleLoad() {

let div1: HTMLDivElement = <HTMLDivElement> document.getElementById("div1");
let div2: HTMLDivElement = <HTMLDivElement> document.getElementById("div2");
document.addEventListener("mousemove",setInfoBox);
document.addEventListener("keyup", logInfo);
document.addEventListener("click", logInfo);
document.body.addEventListener("keyup", logInfo);
document.body.addEventListener("click", logInfo);
div1.addEventListener("keyup", logInfo);
div2.addEventListener("keyup", logInfo);
div1.addEventListener("click", logInfo);
div2.addEventListener("click", logInfo);

 })

 function setInfoBox(_event:MouseEvent) {
    let span: HTMLSpanElement= document.querySelector("span");
    
    span.innerHTML= " Mouse-x: "+_event.clientX + " Mouse-y: " + _event.clientY + " Mouse-target: " + _event.target;
    
    span.style.position = "fixed";
    span.style.top= (_event.clientY) + "px";
    span.style.left= (_event.clientX) + "px";
    
}
 
function logInfo(_event: Event): void
{
    console.log("Event-Type: " + _event.type);
    console.log("Target: " + _event.target);
    console.log("Current Target:" + _event.currentTarget);
    console.log(_event);
}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 //function setInfoBox(_event: MouseEvent): void
 //{
 //   const xCursor: number=_event.clientX;
 //   const yCursor: number=_event.clientY;
 //   
 //   span1.innerHTML = " Cursor-position x: " + xCursor + " Cursor-position y: " + yCursor + " Event: " + _event.target;
 //   span1.style.left = _event.pageX + 10 + "px";
 //   span1.style.top = _event.pageY + 10 + "px";
//
 //};
//
// function logInfo(_event: Event) {
//    console.log(_event.type + _event.target + _event.currentTarget + _event);
//};

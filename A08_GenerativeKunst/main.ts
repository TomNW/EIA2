/* 
Aufgabe: L08
Name: Tom Wiesmann
Matrikel: 272715
Datum: 05.05.2023
Quellen: w3schools
*/

namespace generateArt {

    window.addEventListener("load", () =>{
var canvas = <HTMLCanvasElement>document.getElementById("myCanvas");

var ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
ctx.moveTo(0, Math.random()*800);
ctx.lineTo(Math.floor(Math.random() * 1000) + 800, Math.floor(Math.random() * 1000) + 800);
ctx.lineWidth = Math.floor(Math.random()*800);
ctx.stroke();


var ctx2 = <CanvasRenderingContext2D>canvas.getContext("2d");


ctx2.moveTo(Math.random()*800, 0);
ctx2.lineTo(Math.floor(Math.random() * 1000) + 800, Math.floor(Math.random() * 1000) + 800);
ctx2.lineWidth = Math.floor(Math.random()*800);
ctx2.strokeStyle= "white"
ctx2.stroke();














    

})

};
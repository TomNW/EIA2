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
ctx.fillStyle = "grey";
ctx.fillRect(0, 0, canvas.width, canvas.height);

var ctx1 = <CanvasRenderingContext2D>canvas.getContext("2d");
ctx1.moveTo(0, 400);
ctx1.lineTo(800, 400);
ctx1.lineWidth = Math.floor(Math.random()*400)+300;
ctx1.stroke();

var ctx2 = <CanvasRenderingContext2D>canvas.getContext("2d");
ctx2.moveTo(Math.random() * 800, 900);
ctx2.lineTo(Math.random()*800, -100);
ctx2.lineWidth = Math.floor(Math.random()*300);
ctx2.strokeStyle = "red"
ctx2.stroke();

var ctx3 = <CanvasRenderingContext2D>canvas.getContext("2d");
ctx3.beginPath();
ctx3.arc(Math.random()*801, 400, Math.random()*200, 50, 20 * Math.PI);
ctx2.lineWidth = Math.floor(Math.random()*200);
ctx3.strokeStyle = "blue";
ctx3.stroke();












    

})

};
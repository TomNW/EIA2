"use strict";
/*
Aufgabe: L08
Name: Tom Wiesmann
Matrikel: 272715
Datum: 05.05.2023
Quellen: w3schools
*/
var generateArt;
(function (generateArt) {
    window.addEventListener("load", () => {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.moveTo(0, Math.random() * 800);
        ctx.lineTo(Math.floor(Math.random() * 1000) + 800, Math.floor(Math.random() * 1000) + 800);
        ctx.lineWidth = Math.floor(Math.random() * 800);
        ctx.stroke();
        var ctx2 = canvas.getContext("2d");
        ctx2.moveTo(Math.random() * 800, 0);
        ctx2.lineTo(Math.floor(Math.random() * 1000) + 800, Math.floor(Math.random() * 1000) + 800);
        ctx2.lineWidth = Math.floor(Math.random() * 800);
        ctx2.strokeStyle = "white";
        ctx2.stroke();
    });
})(generateArt || (generateArt = {}));
;
//# sourceMappingURL=main.js.map
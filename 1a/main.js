//JSNACK 1
//Creare un oggetto palla che abbia le seguenti proprietà: nome: palla, peso: 10;

var palla = {
    nome: "palla",
    peso: 10,
}

//JSNACK 2
//attraverso un prompt, dare la possibilità di modificare l'oggetto palla

/* palla.peso = Number(prompt("Dai un peso alla tua palla!"));
console.log(palla.peso); */


//JSNACK 3
//creare oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza

var triangoloRett = {
    base: 5,
    altezza: 10,
}

//calcolare perimetro e area.
//perimetro
var squareBase = Math.pow(triangoloRett.base, 2);
var squareHeight = Math.pow(triangoloRett.altezza, 2);

var sum = squareBase + squareHeight;
var squarePow = Math.sqrt(sum);

var perimetro = triangoloRett.base + triangoloRett.altezza + squarePow;
console.log(perimetro, "Hi, im the perimeter!");

//area
var numeratore = triangoloRett.base * triangoloRett.altezza;
var area = numeratore / 2;
console.log(area, "hi! im the area!");
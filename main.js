//l'utente inserisce due parole in successione
/* var firstWord = prompt("Ciao, inserisci una parola!");
var secondWord = prompt("Inserisci un'altra parola!")

//stampa entrambe, prima la più lunga e poi la più corta.
var firstLength = firstWord.length;
var secondLength = secondWord.length;

if (firstLength > secondLength) {
    console.log(secondWord);
    console.log(firstWord);
} else if (firstLength === secondLength) {
    console.log("Le parole hanno la stessa lunghezza, riprova!");
} else {
    console.log(firstWord);
    console.log(secondWord);
} */

//il software chiede 10 volte all'utente di inserire un numero
//il programma stampa la somma di tutti i numeri inseriti
/* var i;
var numbers = [];
var sum = 0;
for (i = 0; i < 10; i++) {
    numbers.push(Number(prompt("Inserisci un numero")));
    sum += numbers[i];
}
console.log(sum); */

//in un array sono contenuti i nomi dei protagonisti del grande Gatsby
//var names = ["Tizio", "Caio", "Sempronio", "Egidio"];

//chiedi all'utente il suo nome e comunicagli se può partecipare alla festa.
/* var myName = prompt("Ciao! Come ti chiami? Inserisci solo il tuo nome :)");
var i;
for (i = 0; i < names.length; i++) {
    if (myName === names[i]) {
        console.log("Complimenti! Puoi partecipare alla festa.");
        break
    }
    else if (i === names.length) {
        console.log("Spiacente, non sei invitato.");
    }
} */

/* //crea un array vuoto
var oddNumbers = [];
var sum;
var askMe;
//chiedi per 6 volte un numero
for (i = 0; i < 6; i++) {
    askMe = Number(prompt("Inserisci un numero"));
    //se è dispari, inseriscilo nell'array
    if (askMe % 2 !== 0) {
        oddNumbers.push(askMe);
    }
}
console.log(oddNumbers);
 */

//ESERCIZIO 6
//stampa il cubo dei primi N numeri, dove N è il numero indicato dall'utente.

var chosenNumber = Number(prompt("Ciao, inserisci un numero"));
var cubeNumber;
var i;
for (i = 0; i < chosenNumber; i++) {
    cubeNumber = i * i * i;
    console.log(cubeNumber);
}
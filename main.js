//l'utente inserisce due parole in successione
var firstWord = prompt("Ciao, inserisci una parola!");
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
}
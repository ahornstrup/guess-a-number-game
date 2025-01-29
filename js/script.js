"use strict";

let gameRunning = true;

while (gameRunning) {
    const targetNumber = Math.floor(Math.random() * 101);
    let guess = null;

    console.log(" Et nyt tal er blevet genereret, se om du kan gætte det!");

    while (guess !== targetNumber) {
        guess = parseInt(prompt("Gæt et tal mellem 0 og 100:"));

        if (isNaN(guess)) {
            console.log("Indtast et gyldigt tal");
            continue;
        }

        if (guess < targetNumber) {
            console.log("For lavt! Prøv et højere tal!");
        } else if (guess > targetNumber) {
            console.log("For højt! Prøv et lavere tal!");
        } else {
            console.log("Tillykke! Du gættede det rigtige tal!");
            alert("Du vandt! Det korrekte tal var " + targetNumber);
            break;
        }
    }

    let playAgain = prompt("Vil du spille igen? (ja/nej)").toLowerCase();
    if (playAgain !== "ja") {
        gameRunning = false;
        console.log("Tak for at spille!");
    }
}
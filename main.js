function guessNumber() {
    let playerGuess;
    // on génère un nombre entre 1 et 10 inclus et on enferme le résultat dans la constante 'numberToGuess'
    // Math.ceil si le résultat est à virgule il arrondit au nombre le plus haut
    // Math.random() sélectionne aléatoirement un nombre entre 1 et 10
    const numberToGuess = Math.ceil(Math.random() * 10);

    prompt('Devinez le nombre entre 1 et 10 inclus.');

    // tant que le nb du joueur est différent du nombre à deviner, on réinitialise la demande et on relance le prompt
    while (playerGuess != numberToGuess) {
        playerGuess = prompt('Echec! Essayez à nouveaau de devinez le nombre entre 1 et 10 inclus.');
    }

// met fin au jeu si le nombre est deviné
    alert(`Félicitations! Le nombre était ${numberToGuess}!`);
}

guessNumber();
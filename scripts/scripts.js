/**
 * * Array of stuff Gongen says
 */
const phrasesArray = [
     "Yes or no?",
     "That's a lot of ____",
     "Nah, I don't want to anymore*",
     "Alright, well",
     "Holy moly",
     "GYATT DAMN",
     "(verb) away",
     "(verb) (the fuck) up, king/queen",
     "Shiaat",
     "Um, guys..?",
     "This guy's a (verb)er",
     "Agree or disagree?",
     "-no?",
     "I like that",
     "Thoughts?",
     "YEOOOW!",
     "I have NO clue",
     "HUH?",
     "Yippee!",
     "Come on guys",
     "Giga",
     "Amirite?",
     "FARK",
     "Champ",
     "Let's gooo!",
     "What duhh?",
     "Yeah I'm down",
     "There you go",
     "Yeah fuck it",
     "Enjoy",
];

/**
 * * Styling scripts
 */

// Styling script
document.querySelectorAll(".cell").forEach((cell) => {
     cell.addEventListener("click", () => {
          cell.classList.toggle("marked");
     });
});

// Styling for marked cells
const style = document.createElement("style");
style.innerHTML = `
  .marked {
    background-color: goldenrod;
    color: white; /* Lighter text for marked cells */
  }
`;
document.head.appendChild(style);

/**
 * * Function to the order of an array's elements
 * @param {} array The array to shuffle
 * @returns The shuffled array
 */
function shuffleArray(array) {
     for (var i = array.length - 1; i > 0; i--) {
          // Generate random number
          var j = Math.floor(Math.random() * (i + 1));

          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
     }

     return array;
}

/**
 * * Function populate the board's cells with phrases from phrase array
 */
function populateCellsWithPhrases(arr) {
     // Shuffle the order of the array first
     shuffleArray(arr);

     let arrayIndex = 0;

     //  i <= arr.length  because cells are from 0-24 (25 items), but are only 24 elements in Array (24 length), BUT we skip cell #13
     for (cellIndex = 0; cellIndex <= arr.length; cellIndex++) {
          if (cellIndex === 12) {
               continue;
          }

          const cell = document.getElementById(`cell-${cellIndex}`);
          const phraseToAdd = `<p>${arr[arrayIndex]}</p>`;

          cell.innerHTML = phraseToAdd;

          arrayIndex++;
     }
}

populateCellsWithPhrases(phrasesArray);

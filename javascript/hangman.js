class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = "";
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 8;


  }

  pickWord() {
    let randomIndex = Math.floor(Math.random() * this.words.length);
    return this.words[randomIndex];

  }

  checkIfLetter(keyCode) {
    // var letters = /^[A-Za-z]+$/;

    if (keyCode.match(/[a-z]/i)) {
      return true;
    } else {
      return false;
    }

  }

  checkClickedLetters(letter) {
    let array = this.letters;

    if (array.indexOf(letter) === -1) {
      return true;
    } else {
      return false;
    }


  }

  addCorrectLetter(letter) {

    this.guessedLetters += letter;


  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1

  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false
    } else {
      return true;
    }
  }

  checkWinner() {
    if (this.guessedLetters.length === this.secretWord.length) {
      return true;
    } else {
      return false;
    }


  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    //HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [] // adds prev guess to obj
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    }
}
getGuess: function () { // getting guess meth to gane 
    let guess;
    do {
        guess = parseInt(// convert string to integer
            prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
        )
    }
}
while (isNaN(guess)|| guess < this.smallestNum || guess > this.biggestNum) { //making sure its a number and in the range
    return guess 
},

const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [], // adds prev guess to obj
    play: function() {
        this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
        do {
        this.prevGuesses.push(this.getGuess())
        this.render()
    } while (this.prevGuesses[this.prevGuesses.length -1] !== this.secretNum)
    },
    getGuess: function () { // getting guess meth to game 
        let guess;
        do {
            guess = parseInt(// convert string to integer
                prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
            )
        }
        while (
            isNaN(guess)|| guess < this.smallestNum || guess > this.biggestNum) { //making sure its a number and in the range
        }
        return guess
},
    render: function() {
        let msg
        if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum) {
            msg = `congrats! you guessed the number in ${this.prevGuesses.length} ${this.prevGuesses.length > 1 ? "guesses" : "guess"}`;
        } else {
            msg = `your guess is too ${this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum ? "high" : "low" }\nPrevious guesses: ${this.prevGuesses.join(",")}`;
        } alert(msg);
    },// had to look at solution to get how to structure this i felt like i couldnt think of what yall wanted out of the task 
};
game.play();


// after hours of looking mdn and comma and structure issues im happy it works but still very lost on some of this stuff. 
//i feel like this shouldnt have takin me around 6 hours to do.  
//i know i cound have bothered the engineering channel with bugs but i fell like i had to reteach myself everything to get to this point and still not retain concepts. 
//are these things common in the 1st week?
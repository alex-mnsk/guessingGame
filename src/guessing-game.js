class GuessingGame {
    constructor() {
    	this.min = 0;
    	this.max = 0;
    	this.currGuess = 0;
    }

    setRange(_min, _max) {
    	this.min = _min;
    	this.max = _max;
    }

    guess() {
    	return this.currGuess =  Math.round((this.min + this.max)/2);    	
    }

    lower() {
    	this.max = this.currGuess;
    }

    greater() {
    	this.min = this.currGuess;
    }
}

module.exports = GuessingGame;

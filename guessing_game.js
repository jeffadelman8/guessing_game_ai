var beans = Math.floor(Math.random()*10000);
var guess;
var Player = {
	tooLow: [0],
	tooHigh: [10000],
	init: function(){
		guess = parseInt(prompt("Pick a number... 1-10,000. How about " + Math.floor((this.tooLow[0] + this.tooHigh[0]) / 2)));
		if (guess == beans) {
			alert("Congratulations! YOU WON in 1 guess!!");
		} else{ 
			while(guess!==beans){
				if (guess<beans){
					this.tooLow.unshift(guess);
					guess=parseInt(prompt("Too low! How about " + Math.floor((this.tooLow[0] + this.tooHigh[0]) / 2)));
				} else if (guess>beans){
					this.tooHigh.unshift(guess);
					guess=parseInt(prompt("Too high! How about " + Math.floor((this.tooLow[0] + this.tooHigh[0]) / 2)));
				} 
			};
		};
		alert("Congratulations! YOU WON in " + (this.tooLow.length + this.tooHigh.length) + " guesses!!");
	}
};

Player.init();
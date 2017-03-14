Fizzbuzz = function(){};

Fizzbuzz.prototype.numCheck = function(number){
	if(typeof(number) == "number"){
		if(number % 3 === 0 && number % 5 === 0){
			this.msg = "Fizzbuzz";
		} else if(number % 3 === 0){
			this.msg = "Fizz";
		} else if(number % 5 === 0){
			this.msg = "Buzz";
		} else{
			this.msg = number;
		};
	};
};
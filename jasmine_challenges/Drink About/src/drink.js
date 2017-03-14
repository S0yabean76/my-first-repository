DrinkCalculator = function(){};

DrinkCalculator.prototype.drinkAge = function(age){
	if(typeof(age) == "number"){
		if(age < 0) {
			this.msg = "Sorry. I can’t tell what drink because that age is incorrect!";
		} else if(age < 14){
			this.msg = "Drink Toddy";
		} else if(age < 18){
			this.msg = "Drink Coke";
		} else if(age < 21){
			this.msg = "Drink Beer";
		} else if(age < 130){
			this.msg = "Drink Whisky";
		} else if (age >= 130){
			this.msg = "Sorry. I can’t tell what drink because that age is incorrect!"
		};
	};
};
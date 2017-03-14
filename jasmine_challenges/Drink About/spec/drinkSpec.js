describe("DrinkCalculator", function(){

	beforeEach(function(){
		calc = new DrinkCalculator
	});

	describe("Age is less than 0", function(){
		it("should say that the age is incorrect", function(){
			calc.drinkAge(-1)
			expect(calc.msg).toEqual("Sorry. I can’t tell what drink because that age is incorrect!");
		});
	});
	describe("Age is less than 14", function(){
		it("should say to drink Toddy", function(){
			calc.drinkAge(1)
			expect(calc.msg).toEqual("Drink Toddy");
		});
	});
	describe("Age is less than 18", function(){
		it("should say to drink Coke", function(){
			calc.drinkAge(17)
			expect(calc.msg).toEqual("Drink Coke");
		});
	});
	describe("Age is less than 21", function(){
		it("should say to drink Beer", function(){
			calc.drinkAge(18)
			expect(calc.msg).toEqual("Drink Beer");
		});
	});
	describe("Age is less than 130", function(){
		it("should say to drink Whisky", function(){
			calc.drinkAge(129)
			expect(calc.msg).toEqual("Drink Whisky");
		});
	});
	describe("Age is over 130", function(){
		it("should say that the age is incorrect", function(){
			calc.drinkAge(130)
			expect(calc.msg).toEqual("Sorry. I can’t tell what drink because that age is incorrect!");
		});
	});
});
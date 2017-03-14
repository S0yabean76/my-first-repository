describe("Fizzbuzz", function(){

	beforeEach(function(){
		newFizz = new Fizzbuzz;
	});

	describe("Number divisible by 3 and 5", function(){
		it("should return Fizzbuzz", function(){
			newFizz.numCheck(15);
			expect(newFizz.msg).toBe("Fizzbuzz");
		});
	});

	describe("Number divisible by 3", function(){
		it("should return Fizz", function(){
			newFizz.numCheck(9);
			expect(newFizz.msg).toBe("Fizz");
		});
	});

	describe("Number divisible by 5", function(){
		it("should return Buzz", function(){
			newFizz.numCheck(10);
			expect(newFizz.msg).toBe("Buzz");
		});
	});

	describe("Number not divisible by 3 or 5", function(){
		it("should return number", function(){
			newFizz.numCheck(11);
			expect(newFizz.msg).toBe(11);
		});
	});
});
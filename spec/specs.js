describe('romanNumeralator', function() {
    it('takes input 1 and returns I', function() {
        expect(romanNumeralator("1")).to.equal("I")
    });

    it('takes input 5 and returns V', function() {
        expect(romanNumeralator("5")).to.equal("V")
    });

    it('takes input 10 and returns X', function() {
        expect(romanNumeralator("10")).to.equal("X")
    });

    it('takes input 50 and returns L', function() {
        expect(romanNumeralator("50")).to.equal("L")
    });

    it('takes input 100 and returns C', function() {
        expect(romanNumeralator("100")).to.equal("C")
    });

    it('takes input 500 and returns D', function() {
        expect(romanNumeralator("500")).to.equal("D")
    });

    it('takes input 1000 and returns M', function() {
        expect(romanNumeralator("1000")).to.equal("M")
    });

    it('takes input 2 and returns II, adding numerals together', function() {
        expect(romanNumeralator("2")).to.equal("II")
    });

    it('takes input 4 and returns IV, subtraction rule', function() {
        expect(romanNumeralator("4")).to.equal("IV")
    });

    it('displays a message if input is 0', function() {
        expect(romanNumeralator('0')).to.equal("Please enter a number greater than zero.")
    });

    it('displays a message if input greater than 4000', function() {
        expect(romanNumeralator('134287')).to.equal("Roman numerals are not greater than 3,999.")
    });



});

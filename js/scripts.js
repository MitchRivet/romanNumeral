var romanNumeralator = function(number) {

    var finalNumeral = "";

    var numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    if (number == 0 ){
        return "Please enter a number greater than zero.";
    } else if (number >= 4000) {
        return "Roman numerals are not greater than 3,999.";
    } else {
        for (var i = 0; i < numerals.length; i++) {
            while (number >= numbers[i]) {
                finalNumeral += numerals[i];
                number -= numbers[i];
            }
        }
    return finalNumeral;
    }
};


$(document).ready(function() {
    $("form#number").submit(function(event) {
        var number = parseInt($("input#number").val());
        var result = romanNumeralator(number);

        $('.result').text(result);


        event.preventDefault();
    });
});





// failed attempt at calling properties of an object
    // var numberInt = parseInt(number);
    // var numerals = {
    //     "1":"I",        //0
    //     "5": "V",       //1
    //     "10":"X",       //2
    //     "50":"L",       //3
    //     "100":"C",      //4
    //     "500":"D",      //5
    //     "1000":"M"      //6
    //     };
    //
    // var result = [];
    //
    //
    //     for(var i = numberInt; i > 0; i--) {
    //         for( var key in numerals) {
    //             if (numerals.hasOwnProperty(key)) {
    //                 result.push(numerals[number]);
    //                 console.log(result);
    //                 console.log(i);
    //             }
    //         }
    //     }
    //
    // var final = result.toString();
    //
    // return final;

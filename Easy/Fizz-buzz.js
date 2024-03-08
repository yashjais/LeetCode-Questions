/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const returnArr = [];
    for (let i = 1; i <= n; i += 1) {
        let divisibleByThree = i % 3 === 0;
        let divisibleByFive = i % 5 === 0;
        if (divisibleByThree && divisibleByFive) {
            returnArr.push('FizzBuzz');
        } else if (divisibleByThree) {
            returnArr.push('Fizz');
        } else if (divisibleByFive) {
            returnArr.push('Buzz');
        } else {
            returnArr.push(`${i}`);
        }
    }

    return returnArr;
};

console.log(fizzBuzz(15))
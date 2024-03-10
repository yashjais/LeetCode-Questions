/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let i = num;
    let count = 0;
    while (i !== 0) {
        count += 1;
        if (i % 2 === 0) {
            i = (i / 2);
        } else {
            i -= 1;
        }
    }

    return count;
};

console.log(numberOfSteps(14))
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const squaredNumbers = [];
    const returnedArray = [];
    const numsLength = nums.length;
    let positiveIndex;
    for (let i = 0; i < numsLength; i += 1) {
        if (!positiveIndex && nums[i] >= 0) {
            positiveIndex = i;
        }
        squaredNumbers.push(nums[i] * nums[i]);
    }

    if (!positiveIndex) {
        return squaredNumbers.reverse();
    }

    let i = positiveIndex - 1;
    let j = positiveIndex;
    while (i >= 0 && j < numsLength) {
        if (squaredNumbers[i] > squaredNumbers[j]) {
            returnedArray.push(squaredNumbers[j]);
            j += 1;
        } else if (squaredNumbers[i] < squaredNumbers[j]) {
            returnedArray.push(squaredNumbers[i]);
            i -= 1;
        } else {
            returnedArray.push(squaredNumbers[i]);
            returnedArray.push(squaredNumbers[i]);
            i -= 1;
            j += 1;
        }
    }

    if (i < 0) {
        // push all the remaining items in forward direction
        while (j < numsLength) {
            returnedArray.push(squaredNumbers[j]);
            j += 1;
        }
    }

    if (j >= numsLength) {
        // push all the remaining items in backward direction
        while (i >= 0) {
            returnedArray.push(squaredNumbers[i]);
            i -= 1;
        }
    }

    return returnedArray;
};


console.log(sortedSquares([-4,-1,0,3,10]))
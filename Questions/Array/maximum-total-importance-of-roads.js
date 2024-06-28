/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function (n, roads) {
    const numOcc = new Map();
    const roadsLen = roads.length;
    // let maxNum = 0; // for counting sort

    for (let i = 0; i < roadsLen; i += 1) {
        if (numOcc.get(roads[i][0])) {
            numOcc.set(roads[i][0], numOcc.get(roads[i][0]) + 1);
            // if (maxNum < numOcc.get(roads[i][0]) + 1) {
            //     maxNum = numOcc.get(roads[i][0]) + 1;
            // }
        } else {
            numOcc.set(roads[i][0], 1);
        }

        if (numOcc.get(roads[i][1])) {
            numOcc.set(roads[i][1], numOcc.get(roads[i][1]) + 1);
            // if (maxNum < numOcc.get(roads[i][1]) + 1) {
            //     maxNum = numOcc.get(roads[i][1]) + 1;
            // }
        } else {
            numOcc.set(roads[i][1], 1);
        }
    }
    // console.log('numOcc', numOcc);

    const valuesMap = new Map();
    const arr = [];
    for (let [key, value] of numOcc) {
        if (valuesMap.has(value)) {
            const v = valuesMap.get(value);
            v.push(key);
            valuesMap.set(value, v);
        } else {
            valuesMap.set(value, [key]);
        }
        arr.push(value);
    }
    // console.log('valuesMap', valuesMap);

    arr.sort((a, b) => b - a); // counting sort could be used here?
    // console.log('arr', arr)

    const sortedValuesMap = new Map();
    const sortedNumOcc = new Map();
    for (let i = 0; i < roadsLen; i += 1) {
        if (valuesMap.has(arr[i])) {
            const v = valuesMap.get(arr[i]);
            // console.log('v', v, arr[i], n - (i));
            for (let j = 0; j < v.length; j += 1) {
                // console.log('val', v[j], j, n - (i + j))
                if (!sortedNumOcc.has(v[j])) {
                    const num = n - (i + j);
                    sortedNumOcc.set(v[j], num);
                }
            }
        }
    }

    // console.log(sortedNumOcc);
    let importance = 0;
    for (let i = 0; i < roadsLen; i += 1) {
        if (sortedNumOcc.has(roads[i][0]) && sortedNumOcc.has(roads[i][1])) {
            // console.log(roads[i][0], sortedNumOcc.get(roads[i][0]));
            // console.log(roads[i][1], sortedNumOcc.get(roads[i][1]))
            importance += sortedNumOcc.get(roads[i][0]);
            importance += sortedNumOcc.get(roads[i][1]);
        }
    }

    return importance;
};



console.log(
    maximumImportance(5, [
        [0, 1],
        [1, 2],
        [2, 3],
        [0, 2],
        [1, 3],
        [2, 4],
    ]),
);

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.


// Example 1:


// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.


// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
// var isValidSudoku = function(board) {
//     const setsObject = {};
//     for (let i = 0; i < 27; i++) {
//         setsObject[`newSet${i}`] = new Set();
//     }

//     for (let i = 0; i < 9; i += 1) {
//         for (let j = 0; j < 9; j += 1) {
//             if (board[i][j] === '.') continue;

//             if (setsObject[`newSet${i}`].has(board[i][j])) {
//                 return false;
//             } else {
//                 setsObject[`newSet${i}`].add(board[i][j])
//             }

//             if (setsObject[`newSet${j + 9}`].has(board[i][j])) {
//                 return false;
//             } else {
//                 setsObject[`newSet${j + 9}`].add(board[i][j])
//             }

//             if (i >= 0 && i <= 2 && j >= 0 && j <= 2) {
//                 if (setsObject[`newSet${18}`].has(board[i][j])) {
//                     return false;
//                 } else {
//                     setsObject[`newSet${18}`].add(board[i][j])
//                 }
//             }

//             if (i >= 0 && i <= 2 && j >= 3 && j <= 5) {
//                 if (setsObject[`newSet${19}`].has(board[i][j])) {
//                     return false;
//                 } else {
//                     setsObject[`newSet${19}`].add(board[i][j])
//                 }
//             }

//             if (i >= 0 && i <= 2 && j >= 6 && j <= 8) {
//                 if (setsObject[`newSet${20}`].has(board[i][j])) {
//                     return false;
//                 } else {
//                     setsObject[`newSet${20}`].add(board[i][j])
//                 }
//             }

//             if (i >= 3 && i <= 5 && j >= 0 && j <= 2) {
//                 if (setsObject[`newSet${21}`].has(board[i][j])) {
//                     return false;
//                 } else {
//                     setsObject[`newSet${21}`].add(board[i][j])
//                 }
//             }

//             if (i >= 3 && i <= 5 && j >= 3 && j <= 5) {
//                 if (setsObject[`newSet${22}`].has(board[i][j])) {
//                     return false;
//                 } else {
//                     setsObject[`newSet${22}`].add(board[i][j])
//                 }
//             }

//             if (i >= 3 && i <= 5 && j >= 6 && j <= 8) {
//                 if (setsObject[`newSet${23}`].has(board[i][j])) {
//                     return false;
//                 } else {
//                     setsObject[`newSet${23}`].add(board[i][j])
//                 }
//             }

//             if (i >= 6 && i <= 8 && j >= 0 && j <= 2) {
//                 if (setsObject[`newSet${24}`].has(board[i][j])) {
//                     return false;
//                 } else {
//                     setsObject[`newSet${24}`].add(board[i][j])
//                 }
//             }

//             if (i >= 6 && i <= 8 && j >= 3 && j <= 5) {
//                 if (setsObject[`newSet${25}`].has(board[i][j])) {
//                     return false;
//                 } else {
//                     setsObject[`newSet${25}`].add(board[i][j])
//                 }
//             }

//             if (i >= 6 && i <= 8 && j >= 6 && j <= 8) {
//                 if (setsObject[`newSet${26}`].has(board[i][j])) {
//                     return false;
//                 } else {
//                     setsObject[`newSet${26}`].add(board[i][j])
//                 }
//             }

//         }
//     }

//     return true;
// };

// more opt solution
const isValidSudoku = (board) => {
    const rows = Array.from({ length: 9 }, () => new Array(10).fill(0));
    const cols = Array.from({ length: 9 }, () => new Array(10).fill(0));
    const boxes = Array.from({ length: 9 }, () => new Array(10).fill(0));

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = board[i][j];
            if (num !== '.') {
                const n = parseInt(num);
                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (rows[i][n]++ > 0 || cols[j][n]++ > 0 || boxes[boxIndex][n]++ > 0) {
                    return false;
                }
            }
        }
    }

    return true;
};

console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."],["5",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]));

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    lettersObj = {};
    for (let i = 0; i < magazine.length; i += 1) {
        const letter = magazine[i];
        if (lettersObj[letter]) {
            lettersObj[letter] += 1;
        } else {
            lettersObj[letter] = 1;
        }
    }

    for (let i = 0; i < ransomNote.length; i += 1) {
        const letter = ransomNote[i];
        if (lettersObj[letter]) {
            lettersObj[letter] -= 1;
        } else {
            return false;
        }
    }
    return true;
};

console.log(canConstruct("a", "a"));
console.log(canConstruct("aa", "bb"));
console.log(canConstruct("cbb", "bbc"));

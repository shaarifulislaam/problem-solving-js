//* SOlution -1
/* let firstString = 'last';
let secondString = 'talsaaaa'

function isAnagram(dataOne, dataTwo) {

    if (dataOne.length != dataTwo.length) {
        return "Its not anagrams"
    }

    let first = dataOne.split("").sort().join();
    let second = dataTwo.split("").sort().join();

    if (first == second) {
        return "Its anagrams"
    } else {
        return "Its not anagrams"
    }
}

let result = isAnagram(firstString, secondString);
console.log(result) */

//* Solution -2 

let isAnagram2 = (dataOne, dataTwo) => {
    let result = {}

    for (let i = 0; i < dataOne.length; i++) {
        let char = dataOne[i];
        if (char in result) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }
    for (let i = 0; i < dataTwo.length; i++) {
        let char = dataTwo[i];
        if (char in result) {
            result[char]--;
        } else {
            return "It is not anagrams"
        }
    }
    for (let key in result) {
        if (result[key]) {
            return "It is not anagrams"
        }
    }
    return "It is anagrams"
}

let finalResult = isAnagram2("abc", "caba")
console.log(finalResult);
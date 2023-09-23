// function reverse(str) {
//     if (str.length <= 1) {
//         return str;
//     } else {
//         return str.charAt(str.length - 1) + reverse(str.substring(0, str.length - 1));
//     }
// }
// console.log(reverse('Mamun'));

/* let reverse = str => {
    if (str.length === 0) {
        return '';
    }
    return reverse(str.slice(1)) + str[0];
}

console.log(reverse('mamun')); */

function reverse(string, index, n) {
    if (index === n) { // return if we reached at last index or at the end of the string
        return;
    }
    var temp = string[index]; // storing each character starting from index 0 in function call stack;
    reverse(string, index + 1, n); // calling recursive function by increasing index everytime
    console.log(temp); // printing each stored character while recurring back
}

// Driver code
var string = "Geeks ";
var n = string.length;
reverse(string, 0, n);
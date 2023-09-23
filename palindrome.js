/* let string = prompt('Enter a sting');
let len = string.length;
let msg = 'It is a palindrome String';;
for (let i = 0; i < len / 2; i++) {
    if (string[i] != string[len - 1 - i]) {
        msg = 'It is not a palindrome string';
    }
}
console.log(`${string} : ${msg}`) */

//5

function checkPalindorme() {
    let string = 'madam';
    let len = string.length;
    for (i = 0; i < len / 2; i++) {
        if (string[i] != string[len - i - 1]) {
            return 'Its not Palindrome';
        }
    }
    return 'Its Palindrome'
}
console.log(checkPalindorme())
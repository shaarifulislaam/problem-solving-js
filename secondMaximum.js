let secondHighest = data => {
    let first = data[0];
    let second = data[0];

    for (let i = 0; i < data.length; i++) {
        if (first < data[i]) {
            second = first;
            first = data[i];
        } else if (second < data[i]) {
            second = data[i];
        }
    }
    console.log("Second Highest Number is", second);
}
let arr = [20, 50, 40, 30, 10, 60]
secondHighest(arr);
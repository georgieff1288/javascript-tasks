function concat(arr) {
    if (arr.length < 1 || arr.length > 1000) {
        return 'Array length should be between 1 and 1000'
    }
    let newArr = arr.filter(value => value >= 1 && value <= 1000);
    return newArr.concat(newArr);
}

console.log(concat([1, 2, 1]));
console.log(concat([1, 3, 2, 1, 1, 3, 2, 1]));
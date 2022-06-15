function intersection(a, b) {
    if (a.length < 1 || a.length > 1000 || b.length < 1 || b.length > 1000) {
        return 'Array length should be between 1 or 1000'
    }
    let result = a.filter(value => b.includes(value) && value <= 1000);
    return result;
}

console.log(intersection([1, 2, 2, 1], [2, 2]));

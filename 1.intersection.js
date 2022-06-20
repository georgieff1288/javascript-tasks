function intersection(a, b) {
    if (a.length < 1 || a.length > 1000 || b.length < 1 || b.length > 1000) {
        return 'Array length should be between 1 or 1000'
    }
    let result = a.filter((value) => {
        if(value > 1000 && value < 1){
            return 'Please enter valid arrays'
        }
        if( b.includes(value)){
            let index = b.indexOf(value);
            b.splice(index, 1);
            console.log('here - ' + b)
            return value;
        }
    });

    return result;
}


console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4,9,5], [9,4,9,8,4]));
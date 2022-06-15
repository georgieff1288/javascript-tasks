function createTargetArray(nums, index) {
    if (nums.length < 1 || nums.length > 1000 || index.length < 1 || index.length > 1000 || nums.length != index.length) {
        return 'Please enter valid arrays'
    }
    let result = [];
    for (let i = 0; i < index.length; i++) {
        let indexNum = index[i];
        let numsNum = nums[i];
        if (numsNum < 0 || numsNum > 100 || indexNum < 0 || indexNum > i) {
            return 'Please enter valid arrays'
        }
        result.splice(indexNum, 0, numsNum);
    }
    return result;
}

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
console.log(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]));
console.log(createTargetArray([1], [0]));
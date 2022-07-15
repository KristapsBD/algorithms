// Given a target sum and an array of numbers, return wether its possible or not to get the
// target sum by using numbers from the array. Numbers can be used multiple times and are non-negative.

const canSum = (targetSum, numbers, memo = {}) => {
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;
    if(targetSum in memo) return memo[targetSum];

    for (let num of numbers) {
        const remainder = targetSum - num;
        if ( canSum(remainder, numbers, memo) ) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
}

console.log(canSum(7, [2,3]));
console.log(canSum(7, [5,3,4,7]));
console.log(canSum(7, [2,4]));
console.log(canSum(8, [2,3,5]));
console.log(canSum(300, [7,14]));
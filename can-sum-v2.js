// Given a target sum and an array of numbers, return wether its possible or not to get the
// target sum by using numbers from the array. Numbers can be used multiple times and are non-negative.
// Solution using tabulation

const canSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;

    for(let i = 0; i <= targetSum; i++){
        if(table[i] === true){
            for(num of numbers){
                if(num + i <= targetSum){
                    table[num + i] = true;
                }
            }
        }
    }
    return table[targetSum];
};

console.log(canSum(7, [2,3]));
console.log(canSum(7, [5,3,4,7]));
console.log(canSum(7, [2,4]));
console.log(canSum(8, [2,3,5]));
console.log(canSum(300, [7,14]));
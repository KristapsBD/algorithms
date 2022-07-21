// Given a target sum and an array of numbers, return shortest array length possible combination of items to get the
// target sum by using numbers from the array. Numbers can be used multiple times and are non-negative.
// Solution using tabulation

const bestSum = (targetSum, numbers) => {
    table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for(let i = 0; i <= targetSum; i++){
        if(table[i] !== null){
            for(let num of numbers){
                if(i + num <= targetSum){
                    const combination = [...table[i], num];
                    if(!table[i + num] || combination.length < table[i + num].length){
                        table[i + num] = combination;
                    }
                }
            }
        }
    }
    return table[targetSum];
};

console.log(bestSum(7, [5,3,4,7]));
console.log(bestSum(8, [2,3,5]));
console.log(bestSum(8, [1,4,5]));
console.log(bestSum(100, [1,2,5,25]));
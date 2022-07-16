// Given a target string and an array of strings return how many solutions are there to create the target string
// from the strings in the array. Strings can be used multiple times.

const countConstruct = (target, wordBank, memo = {}) => {
    if(target === '') return 1;
    if(target in memo) return memo[target];

    let totalCount = 0;

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const remainder = target.slice(word.length);
            const numWaysForRest = countConstruct(remainder, wordBank, memo);
            totalCount += numWaysForRest;
        }
    }

    memo[target] = totalCount;
    return totalCount;
};

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]));
// Given a target string and an array of strings return all possible solutions to create the target string
// from the strings in the array. Strings can be used multiple times.

const allConstruct = (target, wordBank, memo = {}) => {
    if(target === '') return [[]];
    if(target in memo) return memo[target];

    const result = [];

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const remainder = target.slice(word.length);
            const suffixWays = allConstruct(remainder, wordBank, memo);
            const targetWays = suffixWays.map(way => [word,...way]);
            result.push(...targetWays);
        }
    }

    memo[target] = result;
    return result;

};

console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]));
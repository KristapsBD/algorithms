// Given a target string and an array of strings return wether its possible or not to create the target string
// from the strings in the array. Strings can be used multiple times.

const canConstruct = (targetString, strings, memo = {}) => {
    if(targetString === '') return true;
    if(targetString in memo) return memo[targetString];

    for(let string of strings){
        if(targetString.indexOf(string) === 0){
            const remainder = targetString.slice(string.length);
            if ( canConstruct(remainder, strings, memo) ){
                memo[targetString] = true;
                return true;
            };
        }
    }

    memo[targetString] = false;
    return false;
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]));
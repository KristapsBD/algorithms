// Returns the N'th number of the fibonacci sequence using memoization
// Runs in O(n) time and takes O(n) space

const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
};


console.log(fib(5));
console.log(fib(6));
console.log(fib(50));

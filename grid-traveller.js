//Given an input grid of size m*n, calculate all the paths to travel from the top left to the bottom right
//Only going down and to the right

const gridTraveller = (m, n, memo = {}) => {
    const key = m + ',' + n;
    if (key in memo) return memo[key];
    if (n === 1 && m === 1) return 1;
    if (n === 0 || m === 0) return 0;
    memo[key] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);
    return memo[key]
};


console.log(gridTraveller(1, 1));
console.log(gridTraveller(2, 3));
console.log(gridTraveller(3, 2));
console.log(gridTraveller(18, 18));
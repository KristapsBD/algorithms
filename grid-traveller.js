//Given an input grid of size m*n, calculate all the paths to travel from the top left to the bottom right
//Only going down and to the right

const gridTraveller = (m, n, memo = {}) => {
    if ((n, m) in memo) return memo[(n, m)];
    if (n === 1 && m === 1) return 1;
    if (n === 0 || m === 0) return 0;
    memo[(n, m)] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);
    return memo[(n, m)]
};


console.log(gridTraveller(1, 1));
console.log(gridTraveller(2, 3));
console.log(gridTraveller(3, 2));
console.log(gridTraveller(18, 18));
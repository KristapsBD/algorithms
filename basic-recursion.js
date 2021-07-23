// Basic recursion

function sum(arr, n) {
    if (n==0) {
      return 0;
    } else {
        console.log(n);
        return sum(arr, n-1) + arr[n-1];
    }
  }

console.log(sum([1,2,3,4], 3));
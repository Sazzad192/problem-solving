function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let sum = 0;
    for(let i = 0; i < n; i++){
        for(let j=i+1; j<n; j++){
            if ((ar[i]+ar[j]) % k === 0 ) {
                sum++;
            }
        }
    }
    console.log(sum)
    return sum;
}

const k =5;
n = ar.length;
const ar = [1,2,3,4,5,6];

divisibleSumPairs(k,ar)
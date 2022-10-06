function miniMaxSum(arr){
    
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let arrElements = arr[i];
        sum = sum + arrElements;
    }
    let minSum = sum - Math.max(...arr);
    let maxSum = sum - Math.min(...arr);
    console.log(minSum, maxSum);
    
}

const arr = [1, 3, 5, 7, 9];
miniMaxSum(arr);
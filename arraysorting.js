function findMedian(arr) {
    // Write your code here
    arr.sort(function(a,b){return a-b})
    console.log(arr)
    const number = arr.length % 2 !== 0 ? arr[Math.floor(arr.length / 2)] : arr.slice([(arr.length/2) -1],[arr.length/2 +1]);

    console.log(number);
}

const arr =[5,3,1,2,4];
findMedian(arr)
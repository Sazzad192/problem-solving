function swapElements(arr, i1, i2) {
    // Step 1
    let temp = arr[i1];
  
    // Step 2
    arr[i1] = arr[i2];
  
    // Step 3
    arr[i2] = temp;
}

function findMedian(arr){
    // let newArr = [];
    for(let i=0; i<arr.length-1; i++){
        for( let j=i+1; j<arr.length; j++){
            if(arr[j]<arr[i]){
                // newArr.push(arr[i])
                swapElements(arr, i, j)
            }
        }
    }
    console.log(arr)
}

const arr =[5,3,1,2,4];
findMedian(arr)
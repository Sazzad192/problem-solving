function matchingStrings(strings, queries) {
    // Write your code here
    let arr =[];
    let number;
    for(let i=0; i<queries.length; i++){
        number =0;
        for(let j=0; j<strings.length; j++){
            if(strings[j] === queries[i]){
                number ++;
            }
        }
        arr.push(number);
    }
    console.log(arr);
}

const strings = ['ab', 'ab', 'abc'];
const queries = ['ab', 'abc', 'bc'];
matchingStrings(strings, queries)
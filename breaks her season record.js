/**/
function breakingRecords(scores) {

    let storemax = scores[0];
    let storemin = scores[0];

    // let main = scores[0];
    let max = 0;
    let min = 0;

    for (let i = 1; i < scores.length; i++) {

        if (scores[i] > storemax) {
            max = max + 1;
            storemax = scores[i];
        }
        if (scores[i] < storemin) {
            min++;
            storemin = scores[i];
        }
    }

    console.log(max, min);

}

const arr = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
breakingRecords(arr);

//find most frequent element in array

function mostFrequent(arr) {
    arr.sort();
    if (arr.length === 0)
        return -1;
    if (arr.length == 1)
        return arr[0];
    let count = 1,mostFrequentele,max=0;
    for (let i = 1; i < arr.length; i++){
        if (arr[i] !== arr[i - 1]) {
            count = 1;
        }
        else {
            count++;
        }
        if (count > max) {
            max = count;
            mostFrequentele = arr[i];
        }
    }
    return mostFrequentele;
}

let arr = [5, 5, 5, 5, 4, 4, 4, 43, 3, 3, 3, 4, 4, 7, 77,];
console.log(mostFrequent(arr));
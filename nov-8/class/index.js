
//function to find max element in an array
function findMax(arr) {
    let max=-1000000;

    // for (var i = 0; i < arr.length; i++){
    //     if(arr[i]>max){
    //         max = arr[i];
    //     }
    // }

    // using for each
    arr.forEach(element => {
        if (element > max)
            max = element;
    });
    return max;
}

//function to remove last element
function removeLast(arr) {
    arr.splice(arr.length - 1, 1);
}

function findElementIndex(arr,ele) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == ele)
            return i;
    }
    return -1;
}

var arr = [1, 2, 3, 4, 5];

//find maxm element in an array
var max = findMax(arr);
console.log(max);


//remove last  element in array
removeLast(arr);
console.log(arr);

console.log(findElementIndex(arr, 2));
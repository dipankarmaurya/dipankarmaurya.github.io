

// // let s = "ABCDE";
// // let len = s.length;

// // let middleIndex = len / 2;

// // console.log("Middle Char = "+ s.charAt(middleIndex));
// // console.log("index = " + middleIndex);

// function isSmae(c1, c2) {
//     if (c1 ==c1.toUpperCase());
//         c1 = c1.toLowerCase();
//     if (c2 == c2.toUpperCase());
//         c2 = c2.toLowerCase();
//     if (c1 == c2)
//         return true;
//     return false;
// }

// let s1 = "jyoti Shukla";
// let s2 = "JYoTi shuKLA";

// if (s1.length != s2.length) {
//     console.log("Different");
//     return;
// }
// else {
//     let flag = 0;
//     for (let i = 0; i < s1.length; i++){
//         if (! isSmae(s1.charAt(i), s2.charAt(i))) {
//             flag = 1;
//             break;
//         }
//     }
//     if (flag == 1) {
//         console.log("Different");
//     }
//     else {
//         console.log('Same');
//     }
// }


let str = "Q";

let odd = "", even = "";

for (let i = 0; i < str.length; i++){
    if (i % 2 != 0) {
        odd += str.charAt(i);
    }
    else {
        even += str.charAt(i);
    }
}
console.log("odd : " + odd);
console.log("even : " + even);



let str = "abcdpqrsabcdabcdabcdabcd"
let s="xyz"
for (let i = 0; ; i++){
    let s1 = str.replace("abcd", s);
    if (str == s1) {
        console.log(s1)
        break
    }
    str = s1;   
}




// console.log(replaceAll(str, s));
let arr = [
    {
        title: "HTML",
        val: 0,
        color:"lightblue"
    },
    {
        title: "CSS",
        val: 0,
        color:"lightgreen"
    },
    {
        title: "JAVASCRIPT",
        val: 0,
        color:"grey"
    },
];

let pollBox = document.getElementsByClassName('poll-box');
for (let i = 0; i < pollBox.length; i++){        
    pollBox[i].children[0].innerText = arr[i].title;
    pollBox[i].children[1].innerText = arr[i].val;
    pollBox[i].style.backgroundColor = arr[i].color;
}
for (let i = 0; i < pollBox.length; i++){
    pollBox[i].addEventListener('click', function () {
        arr[i].val++;
        arr.sort((a, b) => {
            return (b.val - a.val);
        });
        for (let j = 0; j < pollBox.length; j++){
            pollBox[j].children[0].innerText = arr[j].title;
            pollBox[j].children[1].innerText = arr[j].val;
            pollBox[j].style.backgroundColor = arr[j].color;
        }   
    })   
   
}
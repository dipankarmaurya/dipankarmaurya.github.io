
let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    
    let input = document.querySelector('input').value;
    console.log(input);
    let div = document.getElementById('todo-container');
    
    let para = document.createElement('p');
    para.innerHTML = `${input}<button>Delete</button>`
    div.appendChild(para);
    

})
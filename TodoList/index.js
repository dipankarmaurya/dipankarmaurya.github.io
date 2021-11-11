let todoListConatiner = document.getElementById("todoListsContainer");
let markTask = document.getElementsByClassName('first');
let taskValue =document.getElementsByClassName('task-value');
let deleteTask =document.getElementsByClassName('delete-task');
//adding task to list
let totalTask = document.getElementsByClassName("task");
let taskCount = document.getElementById("task-count");
taskCount.innerHTML = totalTask.length;
let addTaskButton = document.getElementById("add-task-button");
addTaskButton.addEventListener("click", function (e) {
  e.preventDefault();
  // getting task from input
  let inputTask = document.getElementById("task-name");
  // create new div element and add give it class name task and append it to to do container
    if (inputTask.value != "") {
        let div = document.createElement("div");
        div.classList.add("task");
        div.innerHTML =
        '<div class="mark-task">' +
        "<div class='first'></div>" +
        "" +
        "<div  class='task-value'>" +
        inputTask.value +
        "</div>" +
        "</div>" +
            '<div class="delete-task"></div>';
        
            //marking as done here  
            div.firstChild.firstChild.addEventListener('click', function () {
            div.firstChild.firstChild.style.backgroundColor = "grey";
            div.style.textDecoration = "line-through";
            });
        
        //deleting task
        div.children[1].addEventListener('click', function () {
            div.remove();
          })
        todoListConatiner.appendChild(div);
      taskCount.innerHTML = parseInt(taskCount.innerHTML) + 1; 
    }
    inputTask.value = "";
     markTask = document.getElementsByClassName('first');
     taskValue =document.getElementsByClassName('task-value');
     deleteTask =document.getElementsByClassName('delete-task');
});

//Marking hardcoded task assignment as done 
for (let i = 0; i < markTask.length; i++) {
    console.log(markTask);
    markTask[i].addEventListener('click', function () {
        console.log(markTask[i]);
        markTask[i].style.backgroundColor = "grey";
        taskValue[i].style.textDecoration = "line-through";
        console.log(taskValue[i]);
        console.log(markTask)
    })
}
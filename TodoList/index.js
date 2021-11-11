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
      let markAsDone = div.children[0].children[0];
      console.log(markAsDone.done);
            markAsDone.addEventListener('click', function () {
            markAsDone.style.backgroundColor = "grey";
              markAsDone.done = 'true';
              if(parseInt(taskCount.innerHTML)>0)
              taskCount.innerHTML = parseInt(taskCount.innerHTML) - 1;
              console.log(markAsDone.done);
            div.style.textDecoration = "line-through";
            });
        
        //deleting task
        div.children[1].addEventListener('click', function () {
          div.remove();
          if(markAsDone.done!="true")
          taskCount.innerHTML = parseInt(taskCount.innerHTML) - 1; 
          })
      todoListConatiner.appendChild(div);
      taskCount.innerHTML = parseInt(taskCount.innerHTML) + 1; 
    }
    inputTask.value = "";
});

// showing incompleted task
let incomplete = document.getElementById('incomplete');
incomplete.addEventListener('click', function () {
  totalTask = document.getElementsByClassName("task");
  for (let i = 0; i < totalTask.length; i++){
    if (totalTask[i].children[0].children[0].done != "true") {
      totalTask[i].style.display = "flex";
    }
    else {
      totalTask[i].style.display = "none";
    }
  } 
})
// showing only completed task
let completed = document.getElementById('completed');
completed.addEventListener('click', function () {
  totalTask = document.getElementsByClassName("task");
  for (let i = 0; i < totalTask.length; i++){
    if (totalTask[i].children[0].children[0].done != "true") {
      totalTask[i].style.display = "none";
     } else {
      totalTask[i].style.display = "flex";
      console.log("show-me",totalTask[i]);
    
     }
  }
  
})
//showing all
let all = document.getElementById('all');
all.addEventListener('click', function () {
  totalTask = document.getElementsByClassName("task");
  for (let i = 0; i < totalTask.length; i++){
      totalTask[i].style.display = "flex";
  } 
})

//marking all as done
let markAll = document.getElementById('mark-all');
markAll.addEventListener('click', function(){
  totalTask = document.getElementsByClassName("task");
  for (let i = 0; i < totalTask.length; i++){
    totalTask[i].children[0].children[0].style.backgroundColor = "grey";
    totalTask[i].children[0].children[0].done = 'true';
    if(parseInt(taskCount.innerHTML)>0)
    taskCount.innerHTML = parseInt(taskCount.innerHTML) - 1;
   totalTask[i].children[0].children[1].style.textDecoration = "line-through";
  }
})


// deleting completed task
let removeCompleted = document.getElementById('remove-done-task');
removeCompleted.addEventListener('click', function () {
  totalTask = document.getElementsByClassName("task");
  console.log(Array.isArray(totalTask));
  for (let i = 0; i < totalTask.length; i++){
    if (totalTask[i].children[0].children[0].done == "true") {
       totalTask[i].remove();
    }
    console.log(i);
  }
  
})

let todoListConatiner = document.getElementById("todoListsContainer");

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
  let div = document.createElement("div");
  div.classList.add("task");
  div.innerHTML =
    '<div class="mark-task">' +
    "<div class='first'></div>" +
    "" +
    "<div>" +
    inputTask.value +
    "</div>" +
    "</div>" +
        '<div class="delete-task"></div>';
    inputTask.value = "";
  todoListConatiner.appendChild(div);
  //updating task count
  taskCount.innerHTML = parseInt(taskCount.innerHTML) + 1;
});

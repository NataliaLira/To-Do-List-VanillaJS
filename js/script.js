let board = document.getElementById("board");
let add_task = document.getElementById("add-task");
let input_task = document.getElementById("write-task");
let list_all_tasks = [];
//creating array to recive tasks
if (localStorage.getItem("list_all_tasks")) {
  list_all_tasks = JSON.parse(localStorage.getItem("list_all_tasks"));
} else {
  localStorage.setItem("list_all_tasks", JSON.stringify(list_all_tasks));
}
show(list_all_tasks);

add_task.onclick = function() {
  // using local storage
  let write_task = input_task.value;
  list_all_tasks.push(write_task);

  //creating all taks html+classes
  let new_task = document.createElement("div");
  new_task.setAttribute("class", "task col-md-12");

  let title = document.createElement("div");
  title.setAttribute("class", "col-md-8 text-center");
  title.textContent = write_task;

  let button_check = document.createElement("div");
  button_check.setAttribute("class", "col-md-2");

  let img_check = document.createElement("img");
  img_check.setAttribute("width", "50px");
  img_check.setAttribute("src", "img/check.png");

  button_check.appendChild(img_check);

  new_task.appendChild(title);
  new_task.appendChild(button_check);

  board.appendChild(new_task);
  localStorage.setItem("list_all_tasks", JSON.stringify(list_all_tasks));
};

function show(tasks) {
  for (let task of tasks) {
    listAllTasks(task);
  }
}

function listAllTasks(write_task) {
  let new_task = document.createElement("div");
  new_task.setAttribute("class", "task col-md-12");

  let title = document.createElement("div");
  title.setAttribute("class", "col-md-8 text-center");
  title.textContent = write_task;

  let button_check = document.createElement("div");
  button_check.setAttribute("class", "col-md-2");

  let img_check = document.createElement("img");
  img_check.setAttribute("width", "50px");
  img_check.setAttribute("src", "img/check.png");

  button_check.appendChild(img_check);

  new_task.appendChild(title);
  new_task.appendChild(button_check);

  board.appendChild(new_task);
}

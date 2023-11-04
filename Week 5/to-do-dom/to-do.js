// save references to html elements as variables
const taskInput = document.querySelector("#taskInput");
const addTaskButton = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");

function createListItem(taskText) {
    let listItem = document.createElement("li");
    listItem.innerText = taskText;
    return listItem;
}

function addTask () {
    let taskText = taskInput.value.trim();
    let listItem = createListItem(taskText);
    console.log(listItem);
    taskList.append(listItem);
    taskInput.value = "";
}

addTaskButton.addEventListener("click", addTask);






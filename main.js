
const form = document.querySelector("#newTaskForm");
const input = document.querySelector("#newTaskInput");
const taskList = document.querySelector("#tasks");
const buttonDelete = document.querySelector(".delete");
const buttonEdit = document.querySelector(".edit");
const buttonDone = document.querySelector(".done") ;


form.addEventListener('submit',submitTask);

function submitTask(event) {
    event.preventDefault();   
    const task = input.value;

    if(!task) {
        alert("Please enter a task");
        return;
    }   
    createTask();

}

function createTask() {
    
    const task_item = document.createElement("div");
    task_item.className = "task"

    const task_el = document.createElement("div");
    task_el.className = "content"

    const task_el_content = document.createElement("input");
    task_el_content.className = "text";
    task_el_content.value = input.value;
    task_el_content.type = "text";
    task_el_content.readOnly = true;

    const task_el_actions = document.createElement("div");
    task_el_actions.className = "actions";

    const buttonDelete = document.createElement("button");
    buttonDelete.className = "delete";
    buttonDelete.innerText = "Delete";
    buttonDelete.onclick= deleteTask;

    const buttonEdit = document.createElement("button");
    buttonEdit.className = "edit";
    buttonEdit.innerText = "Edit";
    buttonEdit.onclick= editTask;

    const buttonDone = document.createElement("button");
    buttonDone.className = "done";
    buttonDone.innerText = "Done";
    buttonDone.onclick= doneTask;

    task_el.appendChild(task_el_content);
    task_item.appendChild(task_el);
    task_el_actions.appendChild(buttonDelete);
    task_el_actions.appendChild(buttonEdit);
    task_el_actions.appendChild(buttonDone);
    task_item.appendChild(task_el_actions);
    taskList.appendChild(task_item);

}

buttonDelete.addEventListener("click",deleteTask);

function deleteTask() {
    let task_el_actions = this.parentNode;
    let task_item = task_el_actions.parentNode;
    task_item.remove();

    console.log("removed");
}

buttonEdit.addEventListener("click",editTask);

function editTask() {
    
    let task_el_actions = this.parentNode;     
    let task_item = task_el_actions.parentNode; 
    let task_el = task_item.firstElementChild;
    let task_el_content = task_el.firstElementChild;
    
    if(task_el_content.readOnly && this.innerText == "Edit"){
        task_el_content.readOnly = false;
        this.innerText = "Save";      
    } else {
        task_el_content.readOnly = true;
        this.innerText = "Edit";
    }
}

buttonDone.addEventListener("click",doneTask);

function doneTask() {
    let task_el_actions = this.parentNode;     
    let task_item = task_el_actions.parentNode; 
    let task_el = task_item.firstElementChild;
    let task_el_content = task_el.firstElementChild;

    if(task_el_content.style.textDecoration === "none"){
        task_el_content.style.textDecoration = "line-through";
    } else {task_el_content.style.textDecoration = "none";}
    
    
}
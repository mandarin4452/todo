const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");
const savedTodo = localStorage.getItem("todos");
let toDos = [];

function saveTodo() {
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id != parseInt(li.id));
    saveTodo();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    //const finishButton = document.createElement("button");
    const delButton = document.createElement("button");
    //finishButton.innerHTML = '&#10004;';
    delButton.innerHTML = '&#10006;';
    delButton.addEventListener("click",deleteTodo);
    //li.appendChild(finishButton);
    li.appendChild(span);
    li.appendChild(delButton);
    span.innerText = newTodo.text;
    todoList.appendChild(li);
}

function handleTodo(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        id : Date.now(),
        text : newTodo,
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}

function init() {
    if(savedTodo) {
        const parsed = JSON.parse(savedTodo);
        toDos = parsed;
        parsed.forEach(paintTodo);
    }
}


init();
todoForm.addEventListener("submit",handleTodo);
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

function finishTodo(event) {
    const li = event.target.parentElement;
    toDos.forEach(toDo => {
        if (toDo.id === parseInt(li.id) && toDo.finish === 0) {
            li.style.textDecoration = "line-through";
            li.style.color = "grey";
            toDo.finish = 1;
        }
        else if (toDo.id === parseInt(li.id) && toDo.finish === 1) {
            li.style.textDecoration = "";
            li.style.color = "white";
            toDo.finish = 0;
        }
    })

    
    saveTodo();

}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    const finishButton = document.createElement("button");
    const delButton = document.createElement("button");
    finishButton.innerHTML = '&#10004;';
    delButton.innerHTML = '&#10006;';
    delButton.addEventListener("click",deleteTodo);
    finishButton.addEventListener("click",finishTodo);
    li.appendChild(finishButton);
    li.appendChild(span);
    li.appendChild(delButton);
    span.innerText = newTodo.text;
    if (newTodo.finish === 1) {
        li.style.textDecoration = "line-through";
        li.style.color = "grey";
    }
    todoList.appendChild(li);
}

function handleTodo(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        id : Date.now(),
        text : newTodo,
        finish : 0,
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
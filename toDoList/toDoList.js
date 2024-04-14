
const toDoInput = document.querySelector('.todo-input');
const toDoBtn = document.querySelector('.todo-btn');
const toDoList = document.querySelector('.todo-list');
const noTask = document.querySelector('.noTask');


toDoBtn.addEventListener('click', addToDo);
toDoList.addEventListener('click', deletecheck);


function addToDo(event) {
    event.preventDefault();

    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add('toDoList');

    const newToDo = document.createElement('li');
    if (toDoInput.value === ''){
        alert("You must write something!");
        } 
    else {
        noTask.style.display = 'none';
        newToDo.innerText = toDoInput.value;
        newToDo.classList.add('todo-item');
        toDoDiv.appendChild(newToDo);
        savelocal(toDoInput.value);
        const checked = document.createElement('button');
        checked.innerHTML = '<i class="fas fa-check"></i>';
        checked.classList.add('check-btn');
        toDoDiv.appendChild(checked);
        const deleted = document.createElement('button');
        deleted.innerHTML = '<i class="fas fa-trash"></i>';
        deleted.classList.add('delete-btn');
        toDoDiv.appendChild(deleted);
        toDoList.appendChild(toDoDiv);
        toDoInput.value = '';
    }
}   

function deletecheck(event){
    const item = event.target;
    if(item.classList[0] === 'delete-btn'){
        item.parentElement.classList.add("fall");
    }

    if(item.classList[0] === 'check-btn'){
        item.parentElement.classList.toggle("completed");
    }
}

function savelocal(todo){
    if(localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
};
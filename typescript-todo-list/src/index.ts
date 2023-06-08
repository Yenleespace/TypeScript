const btnSubmit = document.querySelector('.todo-btn') as HTMLButtonElement;
const inputTodo = document.querySelector('.todo-input') as HTMLInputElement;
const formTodo = document.querySelector('.todo-form') as HTMLFormElement;
const todoList = document.querySelector('.todo-list') as HTMLElement;
const btnDeleteAll = document.querySelector('.todo-delete') as HTMLButtonElement;

const handleSubmit = (e :Event) => {
    e.preventDefault();

    const newTodo :Todo= {
        id: Date.now(),
        todo: inputTodo.value,
        completed: false
    };

    todos.push(newTodo);
    appendTodo(newTodo);
    
    inputTodo.value =  ""
}
const appendTodo = (newTodo :Todo) => {
    const newLi = document.createElement('li');
    const checkB = document.createElement('input');
    checkB.type = "checkbox";
    
    checkB.addEventListener('change',() => {
        console.log('checked')
        newTodo.completed = checkB.checked;
    })
    newLi.append(newTodo.todo, checkB);
    todoList.prepend(newLi);
}

interface Todo {
    id:number,
    todo :string,
    completed :boolean
}

const todos: Todo[] = []

formTodo.addEventListener('submit', e => handleSubmit(e));
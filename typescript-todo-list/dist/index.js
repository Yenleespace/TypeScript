"use strict";
const btnSubmit = document.querySelector('.todo-btn');
const inputTodo = document.querySelector('.todo-input');
const formTodo = document.querySelector('.todo-form');
const todoList = document.querySelector('.todo-list');
const btnDeleteAll = document.querySelector('.todo-delete-all');
// handle submit
const handleSubmit = (e) => {
    e.preventDefault();
    // create new todo object
    const newTodo = {
        id: Date.now(),
        todo: inputTodo.value,
        completed: false
    };
    // todo save todo to local storage
    todos.push(newTodo);
    // save to the local storage
    saveTodos();
    // append new todo Fn
    appendTodo(newTodo);
    // reset input
    inputTodo.value = "";
};
// save todos
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
};
;
// new todos array
const todos = JSON.parse(localStorage.getItem('todos') || '[]');
console.log(todos);
// append new todos to the DOM on start
window.addEventListener('DOMContentLoaded', () => {
    todos.forEach(todo => appendTodo(todo));
});
// append todo function
const appendTodo = (newTodo) => {
    const newLi = document.createElement('li');
    const checkB = document.createElement('input');
    checkB.type = 'checkbox';
    checkB.checked = newTodo.completed;
    // add checkbox event listener
    checkB.addEventListener('change', () => {
        console.log('Checked');
        newTodo.completed = checkB.checked;
        // save todos
        saveTodos();
    });
    newLi.append(newTodo.todo, checkB);
    todoList.prepend(newLi);
};
// add form event listener
formTodo.addEventListener('submit', e => handleSubmit(e));
// delete all
const clearTodos = () => {
    todos.length = 0;
    saveTodos();
    todoList.innerHTML = "";
};
btnDeleteAll.onclick = () => clearTodos();

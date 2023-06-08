"use strict";
const btnSubmit = document.querySelector('.todo-btn');
const inputTodo = document.querySelector('.todo-input');
const formTodo = document.querySelector('.todo-form');
const todoList = document.querySelector('.todo-list');
const btnDeleteAll = document.querySelector('.todo-delete');
const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
        id: Date.now(),
        todo: inputTodo.value,
        completed: false
    };
    todos.push(newTodo);
    appendTodo(newTodo);
    inputTodo.value = "";
};
const appendTodo = (newTodo) => {
    const newLi = document.createElement('li');
    const checkB = document.createElement('input');
    checkB.type = "checkbox";
    checkB.addEventListener('change', () => {
        console.log('checked');
        newTodo.completed = checkB.checked;
    });
    newLi.append(newTodo.todo, checkB);
    todoList.prepend(newLi);
};
const todos = [];
formTodo.addEventListener('submit', e => handleSubmit(e));

// import _ from 'lodash';
import './style.css';

const itemsContainer = document.querySelector('.items-container');
const input = document.createElement('input');
const inputCont = document.querySelector('.input');
const title = document.querySelector('.title');
const titleText = document.createElement('p');
const deleteCont = document.querySelector('.delete');
const deleteText = document.createElement('p');
const icon = document.createElement('i');
const enter = document.createElement('i');

input.type = 'text';
input.setAttribute('placeholder', 'Add new task');
enter.classList.add('fas', 'fa-level-down-alt', 'rotate');
inputCont.appendChild(input);
inputCont.appendChild(enter);

titleText.textContent = 'Demo';
icon.classList.add('fas', 'fa-sync');
title.appendChild(titleText);
title.appendChild(icon);

deleteText.textContent = 'Clear all completed';
deleteCont.appendChild(deleteText);

const items = [
  {
    description: 'Do the dishes',
    completed: false,
    id: 0,
  },
  {
    description: 'Take out trash',
    completed: false,
    id: 1,
  },
  {
    description: 'Wash up',
    completed: false,
    id: 2,
  },
];

window.onload = () => {
  items.forEach((item) => {
    const div = document.createElement('div');
    div.classList.add('task');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const text = document.createElement('p');
    text.textContent = item.description;
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-ellipsis-v', 'flex-end');
    div.appendChild(checkbox);
    div.appendChild(text);
    div.appendChild(icon);
    itemsContainer.appendChild(div);
  });
};

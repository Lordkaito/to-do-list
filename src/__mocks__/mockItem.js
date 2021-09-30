import { remove } from '../dummyDOM.js';
let items = [
  { id: 1, description: 'item 1', complete: false },
  { id: 2, description: 'item 2', complete: false },
  { id: 3, description: 'item 3', complete: false },
];
const removeOne = () => {
  

  items.forEach((item) => {
    // eslint-disable-next-line eqeqeq
    if (item.id == remove.parentElement.parentElement.id) {
      const index = items.indexOf(item);
      items.splice(index, 1);
      let i = 0;
      while (i < items.length) {
        if (items[i].id > item.id) {
          // eslint-disable-next-line no-plusplus
          items[i].id--;
        }
        // eslint-disable-next-line no-plusplus
        i++;
      }
    }
    remove.parentElement.parentElement.remove();
    items = [...items];
  });
  return items;
};

const addTask = () => {
  const items = [];
  const newItem = {
    id: '',
    description: '',
    completed: false,
  };

  newItem.description = 'Description test 1';
  newItem.id = items.length + 1;
  newItem.completed = false;

  items.push(newItem);
  // eslint-disable-next-line no-restricted-globals
  return items;
};

const taskCompleted = () => {
  // const complete = e.target;
  // items = [...JSON.parse(localStorage.getItem('items'))];
  // if (complete.checked) {
    // complete.parentElement.classList.add('completed');
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < items.length; i++) {
      // eslint-disable-next-line eqeqeq
      if (remove.parentNode.parentNode.id == items[i].id) {
        items[i].completed = true;
        // localStorage.setItem('items', JSON.stringify(items));
      }
    }
  // } else {
    complete.parentElement.classList.remove('completed');
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < items.length; i++) {
      // eslint-disable-next-line eqeqeq
      if (complete.parentNode.parentNode.id == items[i].id) {
        items[i].completed = false;
        localStorage.setItem('items', JSON.stringify(items));
      }
    }
  // }
};

exports.removeOne = removeOne;
exports.addTask = addTask;
exports.taskCompleted = taskCompleted;

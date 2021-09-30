import { checkEvent, remove, inputEvent } from '../dummyDOM.js';

const removeOne = () => {
  let items = [
    { id: 1, description: 'item 1', complete: false },
    { id: 2, description: 'item 2', complete: false },
    { id: 3, description: 'item 3', complete: false },
  ];

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
  const items = [
    { id: 1, description: 'item 1', complete: false },
    { id: 2, description: 'item 2', complete: false },
    { id: 3, description: 'item 3', complete: false },
  ];
    // eslint-disable-next-line no-plusplus
  for (let i = 0; i < items.length; i++) {
    // eslint-disable-next-line eqeqeq
    if (checkEvent.parentNode.parentNode.id == items[i].id) {
      items[i].complete = true;
    }
  }

  return items;
};

const taskUncompleted = () => {
  const items = [
    { id: 1, description: 'item 1', complete: true },
    { id: 2, description: 'item 2', complete: false },
    { id: 3, description: 'item 3', complete: false },
  ];
    // eslint-disable-next-line no-plusplus
  for (let i = 0; i < items.length; i++) {
    // eslint-disable-next-line eqeqeq
    if (checkEvent.parentNode.parentNode.id == items[i].id) {
      items[i].complete = false;
    }
  }

  return items;
};

const removeTasks = () => {
  const items = [
    { id: 1, description: 'item 1', complete: true },
    { id: 2, description: 'item 2', complete: true },
    { id: 3, description: 'item 3', complete: false },
  ];
  // const checked = document.querySelectorAll('input[type="checkbox"]');
  // checked.forEach((checkbox) => {
  //   if (checkbox.checked) {
  //     checkbox.parentElement.remove();
  //   }
  // });
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < items.length; i++) {
    items.filter((item) => {
      if (item.complete) {
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
        // localStorage.setItem('items', JSON.stringify(items));
      }
      return item;
    });
  }

  return items;
};

const editContent = (string) => {
  const items = [
    { id: 1, description: 'item 1', complete: true },
    { id: 2, description: 'item 2', complete: true },
    { id: 3, description: 'item 3', complete: false },
  ];
  // const edit = e.target;
  inputEvent.removeAttribute('readonly');
  inputEvent.value = string;

  // edit.setAttribute('readonly', 'readonly');
  // inputEvent.value = p.value;
  items.forEach((item) => {
    // eslint-disable-next-line eqeqeq
    if (item.id == inputEvent.parentElement.parentElement.id) {
      item.description = inputEvent.value;
    }
  });
  return items;
};

exports.removeOne = removeOne;
exports.addTask = addTask;
exports.taskCompleted = taskCompleted;
exports.taskUncompleted = taskUncompleted;
exports.removeTasks = removeTasks;
exports.editContent = editContent;

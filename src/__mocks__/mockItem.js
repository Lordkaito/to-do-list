import { remove } from '../dummyDOM.js';

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

exports.removeOne = removeOne;
exports.addTask = addTask;

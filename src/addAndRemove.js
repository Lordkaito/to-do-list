// eslint-disable-next-line import/no-cycle
import { taskCompleted } from './app.js';

const addTask = (e, items, input, itemsContainer, Item) => {
  items = [...JSON.parse(localStorage.getItem('items'))];
  if (e.keyCode === 13) {
    const newItem = new Item();
    const div = document.createElement('div');
    const checkbox = document.createElement('input');
    const p = document.createElement('input');
    const icon = document.createElement('i');
    div.classList.add('task');

    newItem.description = input.value;
    newItem.id = items.length + 1;
    newItem.completed = false;

    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.addEventListener('change', taskCompleted);

    p.value = input.value;
    p.type = 'text';
    p.setAttribute('readonly', 'readonly');

    icon.classList.add('fas', 'fa-ellipsis-v', 'flex-end');

    div.appendChild(checkbox);
    div.appendChild(p);
    div.appendChild(icon);

    itemsContainer.appendChild(div);

    input.value = '';
    items.push(newItem);
    localStorage.setItem('items', JSON.stringify(items));
    location.reload();
  }
};

const removeTasks = (e, items) => {
  items = [...JSON.parse(localStorage.getItem('items'))];
  const checked = document.querySelectorAll('input[type="checkbox"]');
  checked.forEach((checkbox) => {
    if (checkbox.checked) {
      checkbox.parentElement.remove();
    }
  });
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < items.length; i++) {
    items.filter((item) => {
      if (item.completed) {
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
        localStorage.setItem('items', JSON.stringify(items));
      }
      return item;
    });
  }
  // eslint-disable-next-line no-restricted-globals
  location.reload();
};

const editContent = (e, p, items) => {
  console.log(e)
  const edit = e.target;
  console.log(edit)
  edit.removeAttribute('readonly');
  edit.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      edit.setAttribute('readonly', 'readonly');
      edit.value = p.value;
      items.forEach((item) => {
        if (item.id == edit.parentElement.parentElement.id) {
          item.description = edit.value;
        }
      });
      localStorage.setItem('items', JSON.stringify(items));
    }
  });
}

const removeOne = (e, items) => {
  items = [...JSON.parse(localStorage.getItem('items'))];
  const remove = e.target;
  console.log(remove.parentElement.parentElement.id)
  items.forEach((item) => {
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
      console.log(items)
    }
    remove.parentElement.parentElement.remove();
    localStorage.setItem('items', JSON.stringify(items));
  });
};


export { addTask, removeTasks, editContent, removeOne };
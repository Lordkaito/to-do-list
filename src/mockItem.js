// function to remove one item
const removeOne = (e, items) => {
  items = [...JSON.parse(localStorage.getItem('items'))];
  const remove = e.target;
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
    localStorage.setItem('items', JSON.stringify(items));
  });
};
  // function to add one item

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
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    }
  };
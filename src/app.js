const taskCompleted = (e, items, deleteCont) => {
  const complete = e.target;
  items = [...JSON.parse(localStorage.getItem('items'))];
  if (complete.checked) {
    complete.parentElement.classList.add('completed');
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < items.length; i++) {
      // eslint-disable-next-line eqeqeq
      if (complete.parentNode.id == items[i].id) {
        items[i].completed = true;
        localStorage.setItem('items', JSON.stringify(items));
      }
    }
  } else {
    complete.parentElement.classList.remove('completed');
    deleteCont.classList.remove('enable-btn');
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < items.length; i++) {
      // eslint-disable-next-line eqeqeq
      if (complete.parentNode.id == items[i].id) {
        items[i].completed = false;
        localStorage.setItem('items', JSON.stringify(items));
      }
    }
  }
};
// eslint-disable-next-line import/prefer-default-export
export { taskCompleted };
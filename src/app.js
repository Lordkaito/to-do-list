const taskCompleted = (e, items) => {
  const complete = e.target;
  console.log(items);
  if (complete.checked) {
    complete.parentElement.classList.add("completed");
    for (let i = 0; i < items.length; i++) {
      if (complete.parentNode.id == items[i].id) {
        items[i].completed = true;
        console.log(items[i].completed);
        localStorage.setItem("items", JSON.stringify(items));
      }
      console.log(complete.parentNode.id)
      console.log(items[i].id)
    }
  } else {
    complete.parentElement.classList.remove('completed');
    console.log('not completed');
    for (let i = 0; i < items.length; i++) {
      if (complete.parentNode.id == items[i].id) {
        items[i].completed = false;
        console.log(items[i].completed);
        localStorage.setItem("items", JSON.stringify(items));
      }
      console.log(complete.parentNode.id)
      console.log(items[i].id)
    }
  }
}

export { taskCompleted };
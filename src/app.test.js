const { dom } = require('./dummyDOM.js');

jest.mock('./mockItem');
const removeOne = require('./mockItem.js');
const addTask = require('./mockItem.js');
const taskCompleted = require('./mockItem.js');
const taskUncompleted = require('./mockItem.js');
const removeTasks = require('./mockItem.js');
const editContent = require('./mockItem.js');

//test for remove only one item
describe('should remove an item', () => {
  test('remove item with index', () => {
    expect(removeOne.removeOne()).toEqual([
      { id: 1, description: 'item 2', complete: false },
      { id: 2, description: 'item 3', complete: false },
    ]);
  });
  test('should remove item from DOM', () => {
    expect(dom.window.document.getElementById('1')).toBeNull();
  });
  test('should not have childs', () => {
    expect(dom.window.document.querySelector('#test-2').childElementCount).toBe(0);
  });
});

//test for adding an item
describe('should add an item', () => {
  test('should add an item to the array of obj', () => {
    expect(addTask.addTask()).toEqual([{ id: 1, description: 'Description test 1', completed: false }]);
  });
  test('array has at least 1 element', () => {
    expect(addTask.addTask()).toHaveLength(1);
  });
  test('array is not null', () => {
    expect(addTask.addTask()).not.toBeNull();
  });
});

//test if status is complete
describe('should check status', () => {
  test('status should be true', () => {
    expect(taskCompleted.taskCompleted()).toEqual([
      { id: 1, description: 'item 1', complete: true },
      { id: 2, description: 'item 2', complete: false },
      { id: 3, description: 'item 3', complete: false },
    ]);
  });
  test('status should be false', () => {
    expect(taskUncompleted.taskUncompleted()).toEqual([
      { id: 1, description: 'item 1', complete: false },
      { id: 2, description: 'item 2', complete: false },
      { id: 3, description: 'item 3', complete: false },
    ]);
  });
});

//test for clearing all completed items
describe('should remove all completed items', () => {
  test('should remove items with status true', () => {
    expect((removeTasks.removeTasks())).toEqual(
      [{ id: 1, description: 'item 3', complete: false }],
    );
  });
});

//test for editing an item content
describe('should edit the input content', () => {
  test('should edit', () => {
    expect(editContent.editContent('This is new input value')).toEqual([
      { id: 1, description: 'This is new input value', complete: true },
      { id: 2, description: 'item 2', complete: true },
      { id: 3, description: 'item 3', complete: false },
    ]);
  });
});

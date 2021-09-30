const { dom } = require('./dummyDOM.js');

jest.mock('./mockItem');
const removeOne = require('./mockItem.js');
const addTask = require('./mockItem.js');

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

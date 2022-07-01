import uuid from 'react-native-uuid';
import reducer, {addTodo, Todo} from './ToDoSlice';

test('should return the initial state', () => {
  expect(reducer(undefined, {type: undefined})).toEqual([]);
});

test('should handle a todo being added to an empty todos list', () => {
  const previousState: Todo[] = [];

  expect(reducer(previousState, addTodo('Run the tests'))).toEqual([
    {description: 'Run the tests', completed: false, id: expect.any(String)},
  ]);
});

test('should handle a todo being added to an existing todos list', () => {
  const previousState: Todo[] = [
    {description: 'Run the tests', completed: true, id: expect.any(String)},
  ];

  expect(reducer(previousState, addTodo('Use Redux'))).toEqual([
    {description: 'Run the tests', completed: true, id: expect.any(String)},
    {description: 'Use Redux', completed: false, id: expect.any(String)},
  ]);
});

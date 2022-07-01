import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from '../../store';
import ToDoListItem from './ToDoListItem';
import {Todo} from './ToDoSlice';

const ToDoList = () => {
  const todoList = useSelector((state: RootState) => state);

  const renderListItem = ({item}: {item: Todo}): JSX.Element => (
    <ToDoListItem item={item} />
  );

  const keyExtractor = (item: Todo) => item.id;

  return (
    <FlatList
      data={todoList}
      renderItem={renderListItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default ToDoList;

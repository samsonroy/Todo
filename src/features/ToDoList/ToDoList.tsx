import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from '../../store';
import {scale} from '../../utils/scale';
import ToDoListItem from './ToDoListItem';
import {Todo} from './ToDoSlice';

const renderListItem = ({item}: {item: Todo}): JSX.Element => (
  <ToDoListItem item={item} />
);

const keyExtractor = (item: Todo) => item.id;

const ToDoList = () => {
  const todoList = useSelector((state: RootState) => state.todos);

  return (
    <FlatList
      data={todoList}
      renderItem={renderListItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.containerStyle}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    padding: scale(10),
  },
});

export default ToDoList;

import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import TodoCard from '../../components/Card';
import {removeTodo, setTodoStatus, Todo} from './ToDoSlice';
import Delete from '../../assets/svg/delete.svg';
import {scale} from '../../utils/scale';

const ToDoListItem = ({item}: {item: Todo}): JSX.Element => {
  const dispatch = useDispatch();
  const {description, completed, id} = item;

  const toggleTodo = () => {
    dispatch(setTodoStatus({completed: !completed, id: id}));
  };

  const onDelete = () => {
    dispatch(removeTodo(id));
  };

  return (
    <TodoCard
      text={<Text style={styles.textStyle}>{description}</Text>}
      icon={<Delete />}
      toggleCheckBox={completed}
      setToggleCheckBox={toggleTodo}
      onDelete={onDelete}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginLeft: scale(10),
    alignSelf: 'center',
  },
});

export default ToDoListItem;

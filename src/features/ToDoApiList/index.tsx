import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../services/auth.service';
import {getTasks} from '../../services/todos.service';
import {RootState} from '../../store';
import {scale} from '../../utils/scale';
import {saveTodosList, saveToken, Todos} from './TodoApiList';

const renderListItem = ({item}: {item: Todos}) => {
  return (
    <View style={styles.listContainer}>
      <Text>{item.description}</Text>
    </View>
  );
};

const keyExtractor = (item: Todos) => item._id;

const TodoApiList = (): JSX.Element => {
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.todosList);

  useEffect(() => {
    loginUser({email: 'muh.nurali43@gmail.com', password: '12345678'}).then(
      res => dispatch(saveToken(res.token)),
    );
  }, [dispatch]);

  useEffect(() => {
    if (todoList.token !== '' && todoList.todos?.length === 0) {
      getTasks().then(res => dispatch(saveTodosList(res.data)));
    }
  }, [dispatch, todoList]);

  return (
    <>
      <FlatList
        data={todoList.todos}
        renderItem={renderListItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.containerStyle}
      />
    </>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    padding: scale(10),
  },
  listContainer: {
    borderWidth: 1,
    padding: scale(4),
  },
});

export default TodoApiList;

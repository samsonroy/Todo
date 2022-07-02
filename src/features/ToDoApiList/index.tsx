import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
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
  const [loading, setLoading] = useState(false);
  const todoList = useSelector((state: RootState) => state.todosList);

  useEffect(() => {
    setLoading(true);
    loginUser({email: 'muh.nurali43@gmail.com', password: '12345678'})
      .then(res => {
        setLoading(false);
        dispatch(saveToken(res.token));
      })
      .catch(_ => {
        // Show some toast message
        setLoading(false);
      });
  }, [dispatch]);

  useEffect(() => {
    if (todoList.token !== '' && todoList.todos?.length === 0) {
      setLoading(true);
      getTasks()
        .then(res => {
          setLoading(false);
          dispatch(saveTodosList(res.data));
        })
        .catch(e => {
          // Show some toast message
          setLoading(false);
          console.info('error', e);
        });
    }
  }, [dispatch, todoList]);

  if (loading) {
    return <ActivityIndicator size={'small'} style={styles.indicator} />;
  }

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
  indicator: {
    flex: 1,
    alignItems: 'center',
  },
  listContainer: {
    borderWidth: 1,
    padding: scale(4),
  },
});

export default TodoApiList;

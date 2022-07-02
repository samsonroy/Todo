import React from 'react';
import {StyleSheet, View} from 'react-native';

import TextBoxContainer from './TextBoxContainer';
import ToDoList from './ToDoList';

/** Example: Container-View pattern:
 * Only api calls data and container will be listed over here
 * Can make usef of custom hooks also to get the data
 * */

/**
 * Feature (screen) oriented architecture
 */

const TodoList = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <TextBoxContainer />
      <ToDoList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default TodoList;

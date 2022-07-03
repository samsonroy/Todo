import React, {useState} from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';

import TodoCard from '../../components/Card';
import {removeTodo, setTodoStatus, editTodo, Todo} from './ToDoSlice';
import Delete from '../../assets/svg/delete.svg';
import Edit from '../../assets/svg/edit.svg';
import Tick from '../../assets/svg/tick.svg';
import {scale} from '../../utils/scale';

const ToDoListItem = ({item}: {item: Todo}): JSX.Element => {
  const dispatch = useDispatch();
  const {description, completed, id} = item;
  const [edit, setEdit] = useState(false);
  const [editedText, setEditedText] = useState(description);

  const toggleTodo = () => {
    dispatch(setTodoStatus({completed: !completed, id: id}));
  };

  const onSave = () => {
    setEdit(false);
    dispatch(editTodo({text: editedText, id: id}));
  };

  const onDelete = () => {
    dispatch(removeTodo(id));
  };

  const onEdit = () => {
    setEdit(true);
  };

  const renderText = (): JSX.Element => {
    if (edit && !completed) {
      return (
        <TextInput
          value={editedText}
          multiline={true}
          onChangeText={text => setEditedText(text)}
          style={styles.textInputBox}
        />
      );
    } else {
      return <Text style={styles.textStyle}>{description}</Text>;
    }
  };

  /**
   * Component composition pattern
   */

  return (
    <TodoCard
      text={renderText()}
      icon={<Delete />}
      editIcon={edit ? <Tick /> : <Edit />}
      toggleCheckBox={completed}
      setToggleCheckBox={toggleTodo}
      onDelete={onDelete}
      onEdit={edit ? onSave : onEdit}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    paddingLeft: scale(10),
    alignSelf: 'center',
  },
  textInputBox: {
    marginLeft: scale(10),
    padding: scale(4),
    borderRadius: 4,
    alignSelf: 'center',
    borderWidth: 1,
    flex: 1,
  },
});

export default ToDoListItem;

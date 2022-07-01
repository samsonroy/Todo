import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import TextInputBox from '../../components/TextInputBox';
import {scale} from '../../utils/scale';
import {addTodo} from './ToDoSlice';

const TextBoxContainer = (): JSX.Element => {
  const dispatch = useDispatch();
  const [textVal, setTextVal] = useState('');
  const addBtn = () => {
    if (textVal) {
      const trimmedText = textVal.trim();
      dispatch(addTodo(trimmedText));
      setTextVal('');
    }
  };

  return (
    <View style={styles.textBoxContainer}>
      <TextInputBox value={textVal} onChangeText={text => setTextVal(text)} />
      <TouchableOpacity onPress={addBtn} style={styles.btnStyle}>
        <Text>{'+'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textBoxContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnStyle: {
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    padding: scale(10),
    borderRadius: 4,
    marginLeft: scale(10),
  },
});
export default TextBoxContainer;

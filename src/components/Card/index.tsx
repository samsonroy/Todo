import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../utils/scale';
import CheckBox from '@react-native-community/checkbox';
import {Colors} from '../../assets';

type IProps = {
  text: JSX.Element;
  icon: JSX.Element;
  toggleCheckBox: boolean;
  setToggleCheckBox: (x: boolean) => void;
  onDelete: () => void;
};

const TodoCard = ({
  text,
  icon,
  toggleCheckBox,
  setToggleCheckBox,
  onDelete,
}: IProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.innerBox}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
          style={styles.checkbox}
        />
        {text}
      </View>
      <TouchableOpacity style={styles.deleteBox} onPress={onDelete}>
        {icon}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: scale(5),
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: verticalScale(5),
  },
  innerBox: {
    display: 'flex',
    flexDirection: 'row',
  },
  deleteBox: {
    width: moderateScale(30),
    height: verticalScale(30),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 23,
    backgroundColor: Colors.yellow,
  },
  checkbox: {
    width: scale(10),
    height: verticalScale(20),
    marginRight: scale(4),
  },
});

export default TodoCard;

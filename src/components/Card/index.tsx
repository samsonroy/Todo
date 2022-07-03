import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {moderateScale, scale, verticalScale} from '../../utils/scale';
import {Colors} from '../../assets';

type IProps = {
  text: JSX.Element;
  icon: JSX.Element;
  editIcon: JSX.Element;
  toggleCheckBox: boolean;
  setToggleCheckBox: (x: boolean) => void;
  onDelete: () => void;
  onEdit: () => void;
};

const TodoCard = ({
  text,
  icon,
  editIcon,
  toggleCheckBox,
  setToggleCheckBox,
  onDelete,
  onEdit,
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
      <View style={styles.actionItems}>
        <TouchableOpacity style={styles.deleteBox} onPress={onEdit}>
          {editIcon}
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteBox} onPress={onDelete}>
          {icon}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: scale(8),
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: verticalScale(5),
  },
  innerBox: {
    display: 'flex',
    flexDirection: 'row',
    flex: 0.8,
  },
  actionItems: {
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
    margin: 2,
  },
  checkbox: {
    width: scale(20),
    height: verticalScale(20),
  },
});

export default TodoCard;

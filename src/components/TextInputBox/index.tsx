import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, TextInput} from 'react-native';

import {scale} from '../../utils/scale';

type IProps = {
  value: string;
  onChangeText: (text: string) => void;
};

const TextInputBox = ({value, onChangeText}: IProps): JSX.Element => {
  const {t} = useTranslation();

  return (
    <TextInput
      placeholder={t('addtodo')}
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 4,
    padding: scale(10),
    width: '88%',
  },
});

export default TextInputBox;

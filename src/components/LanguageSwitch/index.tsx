import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import {Colors} from '../../assets';
import {scale, verticalScale} from '../../utils/scale';

const LANGUAGES = [
  {label: 'EN', value: 'en'},
  {label: 'IT', value: 'it'},
];

const LanguageSwitch = (): JSX.Element => {
  const {i18n} = useTranslation();
  const [getSelectionMode, setSelectionMode] = useState(0);

  useEffect(() => {
    if (getSelectionMode === 0) {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('it');
    }
  }, [i18n, getSelectionMode]);

  return (
    <View style={styles.switchBoxContainer}>
      {LANGUAGES.map(({label, value}, index) => {
        return (
          <TouchableOpacity
            key={`${index}${value}`}
            activeOpacity={1}
            onPress={() => setSelectionMode(index)}
            // we can meake use styled components inorder to avoid this since it accepts props.(Just an exmaple)
            style={[
              styles.switchBtn,
              {
                backgroundColor:
                  getSelectionMode === index ? Colors.yellow : Colors.white,
              },
            ]}>
            <Text>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  switchBoxContainer: {
    height: verticalScale(25),
    width: scale(100),
    backgroundColor: 'white',
    borderRadius: 25,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 2,
  },
  switchBtn: {
    flex: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default LanguageSwitch;

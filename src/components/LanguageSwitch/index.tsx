import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {Switch} from 'react-native';
import {Colors} from '../../assets';

const LanguageSwitch = (): JSX.Element => {
  const {i18n} = useTranslation();
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  useEffect(() => {
    if (isEnabled) {
      i18n.changeLanguage('it');
    } else {
      i18n.changeLanguage('en');
    }
  }, [i18n, isEnabled]);

  return (
    <Switch
      trackColor={{false: Colors.gray, true: Colors.lightBlue}}
      thumbColor={isEnabled ? Colors.yellow : Colors.lightGray}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default LanguageSwitch;

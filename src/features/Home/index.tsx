import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text} from 'react-native';

const Home = (): JSX.Element => {
  const {t} = useTranslation();
  return (
    <View>
      <Text>{t('how')}</Text>
    </View>
  );
};

export default Home;

import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import english from './en.json';
import italian from './it.json';

const {languageDetectorPlugin} = require('../../utils/languageDetectorplugin');

i18next
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: english,
      it: italian,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18next;

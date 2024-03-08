import i18n from 'i18next';
import {I18nextProvider} from 'react-i18next';
import {initReactI18next} from 'react-i18next';
import {hindiTranslation} from './hi';
import {englishTranslation} from './en';

i18n.use(initReactI18next).init({
  interpolation: {escapeValue: false},
  lng: 'en', // default language
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  resources: {
    en: englishTranslation,
    hi: hindiTranslation,
  },
});

// Your App component
const LanguageProvider = props => {
  return <I18nextProvider i18n={i18n}>{props.children}</I18nextProvider>;
};

export default LanguageProvider;

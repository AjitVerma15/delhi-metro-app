import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text} from 'react-native';
import {ThemeContext} from '../styles/ThemeProvider';

const Greeting = () => {
  const styles = useContext(ThemeContext);
  const {t} = useTranslation();
  const currentHour = new Date().getHours();

  let greetingMessage;
  if (currentHour >= 5 && currentHour < 12) {
    greetingMessage = 'goodMorning';
  } else if (currentHour >= 12 && currentHour < 17) {
    greetingMessage = 'goodAfternoon';
  } else if (currentHour >= 17 && currentHour < 20) {
    greetingMessage = 'goodEvening';
  } else {
    greetingMessage = 'goodNight';
  }

  return <Text style={styles.greeting}>{t(greetingMessage)}</Text>;
};

export default Greeting;

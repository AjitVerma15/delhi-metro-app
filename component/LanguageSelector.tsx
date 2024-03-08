import React, {useContext, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet} from 'react-native';
import {SelectCountry} from 'react-native-element-dropdown';
import {ThemeContext} from '../styles/ThemeProvider';

const local_data = [
  {
    value: 'en',
    lable: 'English',
    image: {
      uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png?20151118161041',
    },
  },
  {
    value: 'hi',
    lable: 'Hindi',
    image: {
      uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png',
    },
  },
];

const LanguageSelector = (props: any) => {
  const [language, setLanguage] = useState('en');
  const {i18n} = useTranslation();
  const styles = useContext(ThemeContext);

  return (
    <SelectCountry
      style={styles.languageSelector.dropdown}
      selectedTextStyle={styles.languageSelector.selectedTextStyle}
      placeholderStyle={styles.languageSelector.placeholderStyle}
      imageStyle={styles.languageSelector.imageStyle}
      iconStyle={styles.languageSelector.iconStyle}
      itemContainerStyle={styles.languageSelector.itemContainerStyle}
      itemTextStyle={styles.languageSelector.itemTextStyle}
      containerStyle={styles.languageSelector.containerStyle}
      value={language}
      data={local_data}
      valueField="value"
      labelField="lable"
      imageField="image"
      placeholder="Select Langugae"
      searchPlaceholder="Search..."
      onChange={e => {
        setLanguage(e.value);
        i18n.changeLanguage(e.value);
      }}
    />
  );
};

export default LanguageSelector;

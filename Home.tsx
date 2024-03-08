/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useContext, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {useTranslation} from 'react-i18next';
import LanguageSelector from './component/LanguageSelector';
import Greeting from './component/Greeting';
import {Icon} from '@rneui/base';
import Features from './component/Features';
import {colors} from './styles/colors';
import {ThemeContext} from './styles/ThemeProvider';

function Home(props: any): React.JSX.Element {
  const {t} = useTranslation();
  const isDarkMode = useColorScheme() === 'dark';
  const appColor = useColorScheme() === 'dark' ? colors.dark : colors.light;
  const styles = useContext(ThemeContext);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={styles.backgroundStyle.statusbarColor}
      />
      <View style={styles.headerContainer}>
        <View>
          <Greeting />
          <TouchableOpacity
            style={styles.search}
            onPress={() => console.log('onPress()')}>
            <Icon
              containerStyle={{}}
              disabledStyle={{}}
              iconStyle={{
                color: appColor.textColor,
              }}
              name="search"
              onLongPress={() => console.log('onLongPress()')}
              onPress={() => console.log('onPress()')}
              size={25}
            />
            <Text style={styles.searchText}>{t('searchServices')}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.language}>
          <Image
            source={require('./assets/images/metrologo.png')}
            style={{objectFit: 'contain', height: 200}}
          />
          <LanguageSelector />
        </View>
      </View>
      <ScrollView>
        <Features navigation={props.navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;

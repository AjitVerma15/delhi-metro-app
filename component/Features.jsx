import {Avatar, Icon, ListItem} from '@rneui/base';
import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {ThemeContext} from '../styles/ThemeProvider';

const features = [
  {
    key: 1,
    icon: 'currency-rupee',
    name: 'fare',
    onClick: () => {
      console.log('Fare');
    },
  },
  {
    key: 2,
    icon: 'map',
    name: 'maps',
    onClick: () => {
      console.log('Maps');
    },
  },
  {
    key: 3,
    icon: 'route',
    name: 'routes',
    onClick: () => {
      console.log('Routes');
    },
  },
  {
    key: 4,
    icon: 'timer',
    name: 'first_last_metro',
    onClick: () => {
      console.log('Last');
    },
  },
  {
    key: 5,
    icon: 'local-parking',
    name: 'parking',
    onClick: () => {
      console.log('Parking');
    },
  },
  {
    key: 6,
    icon: 'door-front',
    name: 'gates',
    onClick: () => {
      console.log('Gates');
    },
  },
  {
    key: 7,
    icon: 'money',
    name: 'cardRecharge',
    onClick: () => {
      console.log('Card');
    },
  },
  {
    key: 8,
    icon: 'attach-email',
    name: 'feedback',
    onClick: () => {
      console.log('Gates');
    },
  },
  {
    key: 9,
    icon: 'info',
    name: 'aboutApp',
    onClick: navigation => {
      navigation.navigate('about');
    },
  },
];

const Features = ({navigation}) => {
  const {t} = useTranslation();
  const styles = useContext(ThemeContext);
  return (
    <View style={styles.listContainer}>
      {features.map(feature => (
        <View key={feature.key} style={styles.featureItem}>
          <TouchableOpacity onPress={() => feature.onClick(navigation)}>
            <View style={styles.itemContent}>
              <Icon name={feature.icon} color={styles.iconColor} size={50} />
              <Text style={styles.itemText}>{t(feature.name)}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default Features;

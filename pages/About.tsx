import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Image, Linking, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ThemeContext} from '../styles/ThemeProvider';
import {Icon} from '@rneui/base';

const About = (props: any) => {
  const styles = useContext(ThemeContext);
  return (
    <SafeAreaView style={styles.aboutPage.container}>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
        }}>
        <View style={styles.aboutPage.imageContainer.box}>
          <Image
            source={require('../assets/images/logo.png')}
            style={{
              height: 200,
              objectFit: 'contain',
            }}
          />
          <Text style={styles.aboutPage.imageContainer.appText}>
            Delhi Metro Navigator
          </Text>
          <Text style={styles.aboutPage.imageContainer.versionText}>
            Version: 1.0.0
          </Text>
        </View>
        <View style={styles.aboutPage.imageContainer.box}>
          <Text style={styles.aboutPage.imageContainer.appText}>
            Developed by
          </Text>
          <Image
            source={require('../assets/images/ajit-developer.jpg')}
            style={{
              objectFit: 'contain',
              height: 100,
              width: 100,
              borderRadius: 50,
              alignSelf: 'center',
            }}
          />
          <Text style={styles.aboutPage.imageContainer.versionText}>
            Ajit Verma
          </Text>
          <Text style={styles.aboutPage.imageContainer.suggestionText}>
            For any suggestions or feedback, please don't hesitate to reach out
            to me.
          </Text>
          <View style={styles.aboutPage.imageContainer.iconContainer}>
            <Icon
              iconStyle={{
                color: styles.textColor,
              }}
              name="instagram"
              onPress={() =>
                Linking.openURL('https://www.instagram.com/ajit.verma_/')
              }
              size={45}
              type="font-awesome-5"
            />
            <Icon
              iconStyle={{
                color: styles.textColor,
              }}
              name="linkedin"
              onPress={() =>
                Linking.openURL(
                  'https://www.linkedin.com/in/ajit-verma-70b9b0196/',
                )
              }
              size={45}
              type="font-awesome-5"
            />
            <Icon
              iconStyle={{
                color: styles.textColor,
              }}
              name="mail"
              onPress={() => Linking.openURL('mailto:ajitverma1503@gmail.com')}
              size={50}
              type="material"
            />
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            gap: 10,
          }}>
          <Text
            style={{
              ...styles.aboutPage.imageContainer.appText,
            }}>
            Version History
          </Text>
          <Text style={styles.aboutPage.imageContainer.suggestionText}>
            Version 1.0.0: Initial MVP App
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

About.propTypes = {};

export default About;

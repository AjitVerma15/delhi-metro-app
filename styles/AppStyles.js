import {StyleSheet} from 'react-native';
import {colors} from './colors';

export const getStyles = theme => {
  const appColor = theme === 'dark' ? colors.dark : colors.light;
  return StyleSheet.create({
    headerTintColor: appColor.textColor,
    appHeader: {
      backgroundColor: appColor.boxColors,
      color: appColor.textColor,
    },
    headerContainer: {
      display: 'flex',
      alignContent: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: appColor.boxColors,
      borderBottomStartRadius: 20,
      borderBottomEndRadius: 20,
      paddingRight: 15,
    },
    language: {
      display: 'flex',
      alignItems: 'center',
      width: '30%',
    },
    search: {
      display: 'flex',
      flexDirection: 'row',
      gap: 5,
      borderWidth: 1,
      borderColor: appColor.textColor,
      borderRadius: 20,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 5,
      paddingRight: 10,
      marginBottom: 20,
      alignItems: 'center',
    },
    searchText: {
      fontSize: 15,
      color: appColor.textColor,
    },
    backgroundStyle: {
      flex: 1,
      statusbarColor: appColor.boxColors,
      backgroundColor: appColor.backgroundColor,
      paddingTop: 0, // Ensure no top padding
      paddingBottom: 0, // Ensure no bottom padding
    },
    greeting: {
      fontSize: 40,
      fontWeight: 'bold',
      marginTop: 'auto',
      marginBottom: 'auto',
      width: 180,
      color: appColor.textColor,
    },
    languageSelector: {
      dropdown: {
        margin: 18,
        height: 40,
        width: 150,
        backgroundColor: appColor.boxColors,
        borderRadius: 22,
        borderWidth: 1,
        borderColor: appColor.textColor,
        paddingHorizontal: 8,
      },
      itemContainerStyle: {
        color: 'black',
        backgroundColor: appColor.backgroundColor,
      },
      selectedStyle: {
        backgroundColor: appColor.boxActiveColor,
      },
      itemTextStyle: {
        color: 'black !important',
      },
      containerStyle: {
        backgroundColor: appColor.boxActiveColor,
      },
      imageStyle: {
        width: 24,
        height: 24,
        borderRadius: 12,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
        color: appColor.textColor,
        marginLeft: 8,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
    },
    listContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
    },
    featureItem: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '45%',
      margin: '2.5%',
      borderRadius: 20,
      backgroundColor: appColor.boxColors,
      height: 150,
      width: 150,
    },
    itemContent: {
      flexDirection: 'column',
      gap: 10,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
    itemText: {
      marginLeft: 10,
      fontSize: 22,
      color: appColor.textColor,
      textAlign: 'center',
    },
    iconColor: appColor.textColor,

    aboutPage: {
      container: {
        backgroundColor: appColor.backgroundColor,
        flex: 1,
        display: 'flex',
        padding: 10,
      },
      imageContainer: {
        image: {
          height: 100,
          with: 100,
          objectFit: 'contain',
        },
        box: {
          margin: 10,
          display: 'flex',
          gap: 10,
        },
        appText: {
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
        },
        versionText: {
          fontSize: 22,
          textAlign: 'center',
        },
        suggestionText: {
          fontSize: 18,
          textAlign: 'center',
        },
        iconContainer: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 15,
        },
      },
    },
  });
};

import React, {createContext, useState} from 'react';
import {useColorScheme} from 'react-native';
import {getStyles} from './AppStyles';

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const theme = useColorScheme();
  const styles = getStyles(theme);
  return (
    <ThemeContext.Provider value={styles}>{children}</ThemeContext.Provider>
  );
};

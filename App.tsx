import React from 'react';
import LanguageProvider from './locale/LanguageProvider';
import Home from './Home';
import {ThemeProvider} from './styles/ThemeProvider';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './Routes';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <LanguageProvider>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </LanguageProvider>
    </NavigationContainer>
  );
}

export default App;

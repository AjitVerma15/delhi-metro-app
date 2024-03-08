import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import About from './pages/About';
import {ThemeContext} from './styles/ThemeProvider';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const styles = React.useContext(ThemeContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="about"
        component={About}
        options={{
          headerTitle: 'About',
          headerStyle: styles.appHeader,
          headerTitleStyle: styles.appHeader,
          headerTintColor: styles.headerTintColor,
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LanguageProvider from './locale/LanguageProvider';
import {ThemeProvider} from './styles/ThemeProvider';

AppRegistry.registerComponent(appName, () => App);

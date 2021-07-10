/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Fitness_Life_App from './src/screens/RegisterScreen';
// import Fitness_Life_App from './App'; MainTabScreen is for the Tab Nav
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Fitness_Life_App);

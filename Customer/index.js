/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
// import Fitness_Life_App from './src/screens/SplashScreen';
// import Fitness_Life_App from './src/screens/LogInScreen';
// import Fitness_Life_App from './src/screens/RegisterScreen';
// import Fitness_Life_App from './src/screens/MainTabScreen';
import Fitness_Life_App from './App';
// import Fitness_Life_App from './src/screens/Appointments';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Fitness_Life_App);

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SplashScreen from '../screens/SplashScreen';
import LogInScreen from '../screens/LogInScreen';

const screens = {
  SplashScreen: {
    screen: SplashScreen,
  },
  LogInScreen: {
    screen: LogInScreen,
  },
};

const SplashScreenStack = createStackNavigator(screens);

export default createAppContainer(SplashScreenStack);

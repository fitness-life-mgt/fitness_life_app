import React from 'react';

// import LinearGradient from 'react-native-linear-gradient';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import SplashScreen from './SplashScreen';
import LogInScreen from './LogInScreen';
import RegisterScreen from './RegisterScreen';
import Tabs from '../navigate/Tabs'; //added new

const RootStack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const RootStackScreen = ({navigation}) => {
  return (
    <NavigationContainer theme={theme}>
      <RootStack.Navigator headerMode="screen">
        <RootStack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            title: '',
            headerShown: false,

            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <RootStack.Screen
          name="LogInScreen"
          component={LogInScreen}
          options={{
            title: '',
            headerShown: false,

            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <RootStack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: '',
            headerShown: false,

            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        {/* added new */}
        <RootStack.Screen
          name="Tabs"
          component={Tabs}
          options={{
            title: '',

            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default RootStackScreen;

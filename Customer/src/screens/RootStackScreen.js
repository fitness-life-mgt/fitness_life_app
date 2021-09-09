import React from 'react';

// import LinearGradient from 'react-native-linear-gradient';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import SplashScreen from './SplashScreen';
import LogInScreen from './LogInScreen';
import RegisterScreen from './RegisterScreen';
import Tabs from '../navigate/Tabs';
import MakeAppointment from './MakeAppointment';
import ApprovedAppointmentsScreen from './ApprovedAppointmentsScreen';
import colors from '../config/colors';

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
            headerShown: false,
            title: '',

            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <RootStack.Screen
          name="MakeAppointment"
          component={MakeAppointment}
          options={{
            headerShown: false,
            title: '',

            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <RootStack.Screen
          name="ApprovedAppointmentsScreen"
          component={ApprovedAppointmentsScreen}
          options={{
            title: 'Approved Appointments',
            // headerBackground: colors.color2,
            headerTitleStyle: {
              fontWeight: 'bold',
              color: colors.color5,
            },
            headerStyle: {
              backgroundColor: colors.color2,
            },
            headerTintColor: colors.color5,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default RootStackScreen;

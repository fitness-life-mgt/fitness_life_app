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
import AppointmentScreen from './AppointmentScreen';
import EditProfile from './EditProfileScreen';
import AddProfileScreen from './AddProfileDetails';
import PastAppointmentScreen from './PastAppointmentsScreen';
import DietPlanScreen from './DietPlanScreen';
import MyDietPlansScreen from './MyDietPlansScreen';
import RequestDietPlan from './RequestDietPlan';
import WorkoutArmScreen from './WorkoutArmScreen';
import WorkoutLegScreen from './WorkoutLegScreen';
import WorkoutAbsScreen from './WorkoutAbsScreen';
import WorkoutDummyScreen from './WorkoutDummyScreen';
import AboutUsScreen from './AboutUsScreen';

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
            headerShown: false,
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
        {/* to add the appointment screen, in the homescreen image */}
        <RootStack.Screen
          name="AppointmentScreen"
          component={AppointmentScreen}
          options={{
            title: '',
            headerShown: false,

            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <RootStack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            title: '',
            headerShown: false,

            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        {/* add profile screen for the first time users */}
        <RootStack.Screen
          name="AddProfileScreen"
          component={AddProfileScreen}
          options={{
            title: '',
            headerShown: false,

            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        {/* past appointment screen */}
        <RootStack.Screen
          name="PastAppointmentScreen"
          component={PastAppointmentScreen}
          options={{
            title: '',
            headerShown: false,

            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <RootStack.Screen
          name="DietPlanScreen"
          component={DietPlanScreen}
          options={{
            title: '',
            headerShown: false,

            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <RootStack.Screen
          name="MyDietPlansScreen"
          component={MyDietPlansScreen}
          options={{
            title: '',
            headerShown: false,

            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <RootStack.Screen
          name="RequestDietPlan"
          component={RequestDietPlan}
          options={{
            title: '',
            headerShown: false,

            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <RootStack.Screen
          name="WorkoutArmScreen"
          component={WorkoutArmScreen}
          options={{
            title: '',
            headerShown: false,

            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <RootStack.Screen
          name="WorkoutLegScreen"
          component={WorkoutLegScreen}
          options={{
            title: '',
            headerShown: false,

            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <RootStack.Screen
          name="WorkoutAbsScreen"
          component={WorkoutAbsScreen}
          options={{
            title: '',
            headerShown: false,

            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <RootStack.Screen
          name="WorkoutDummyScreen"
          component={WorkoutDummyScreen}
          options={{
            title: '',
            headerShown: false,

            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <RootStack.Screen
          name="AboutUsScreen"
          component={AboutUsScreen}
          options={{
            title: '',
            headerShown: false,

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

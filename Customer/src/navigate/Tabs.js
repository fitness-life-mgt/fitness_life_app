import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import colors from '../config/colors';

import HomeScreen from '../screens/HomeScreen';
import AppointmentScreen from '../screens/AppointmentScreen';
import MusicScreen from '../screens/MusicScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import ProgramScreen from '../screens/ProgramScreen';
// import {Colors} from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#000000">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: 'yellow',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Appointments"
        component={AppointmentScreen}
        options={{
          tabBarLabel: 'Appointments',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="Contact"
        component={ContactUsScreen}
        options={{
          tabBarLabel: 'Contact Us',
          tabBarIcon: ({color}) => (
            <FontAwesome name="support" color={color} size={26} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Program"
        component={ProgramScreen}
        options={{
          tabBarLabel: 'Workouts',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="dumbbell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Music"
        component={MusicScreen}
        options={{
          tabBarLabel: 'Music',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="music" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>

    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={HomeStackScreen} />
    //   <Tab.Screen name="Page02" component={Page02} />
    //   <Tab.Screen name="Page03" component={Page03} />
    //   <Tab.Screen name="Page04" component={Page04} />
    // </Tab.Navigator>
  );
};

export default Tabs;

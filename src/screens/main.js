import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Page02 from './page02';

const Home = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.bodyText}>Welcome to Home!</Text>
      <Button
        title="Go to Page 02"
        onPress={() => navigation.navigate('Page 02')}
      />
    </View>
  );
};

const Stack = createStackNavigator();

class FitnessLife extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#0B020C',
            },
            headerTitleStyle: {
              color: '#ffffff',
              fontWeight: 'bold',
              fontSize: 24,
              fontFamily: 'roboto',
            },
            headerTintColor: '#ffffff',
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Page 02" component={Page02} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 24,
  },
});

export default FitnessLife;

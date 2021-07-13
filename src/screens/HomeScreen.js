import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import colors from '../config/colors';
// import {WeekCalendar} from 'react-native-calendars';

const HomeScreen = () => {
  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>For Today</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>Welcome to HomePage!</Text>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: windowWidth,
    backgroundColor: colors.color5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    width: windowWidth,
    backgroundColor: colors.color2,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  body: {
    flex: 8,
    width: windowWidth,
    backgroundColor: colors.color5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    paddingLeft: 20,
    fontWeight: 'bold',
    color: colors.color5,
  },
  bodyText: {
    fontSize: 24,
  },
});

export default HomeScreen;

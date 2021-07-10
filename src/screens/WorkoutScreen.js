import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WorkoutScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.bodyText}>Workout Screen</Text>
    </View>
  );
};

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

export default WorkoutScreen;

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MusicScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.bodyText}>Music Screen</Text>
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

export default MusicScreen;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import colors from '../config/colors';
import LinearGradient from 'react-native-linear-gradient';

const ProgramScreen = ({navigation}) => {
  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <StatusBar backgroundColor={colors.color2} barStyle="light-content" />
        <View>
          <Text style={styles.headerText}>Workouts</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View>
          <Image
            source={require('../assests/images/workout.jpg')}
            style={styles.image}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.button_package}>
          <TouchableOpacity
            style={styles.package}
            onPress={() => navigation.navigate('WorkoutArmScreen')}>
            <LinearGradient
              colors={[colors.color3, colors.color4]}
              style={styles.package}>
              <Text
                style={[
                  styles.textPackage,
                  {
                    color: colors.color5,
                  },
                ]}>
                Arm Workouts
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.package}
            onPress={() => navigation.navigate('WorkoutLegScreen')}>
            <LinearGradient
              colors={[colors.color3, colors.color4]}
              style={styles.package}>
              <Text
                style={[
                  styles.textPackage,
                  {
                    color: colors.color5,
                  },
                ]}>
                Leg Workouts
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.package}
            onPress={() => navigation.navigate('WorkoutAbsScreen')}>
            <LinearGradient
              colors={[colors.color3, colors.color4]}
              style={styles.package}>
              <Text
                style={[
                  styles.textPackage,
                  {
                    color: colors.color5,
                  },
                ]}>
                ABS Workouts
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
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
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    paddingLeft: 20,
    fontWeight: 'bold',
    color: colors.color5,
    fontFamily: 'roboto',
  },
  bodyText: {
    fontSize: 24,
  },
  button_package: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    width: windowWidth,
    paddingLeft: 20,
    paddingRight: 40,
  },
  package: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  textPackage: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'roboto',
  },
  image: {
    height: 200,
    width: windowWidth,
  },
});

export default ProgramScreen;

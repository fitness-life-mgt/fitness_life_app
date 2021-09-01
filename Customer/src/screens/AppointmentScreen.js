import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
} from 'react-native';
import colors from '../config/colors';
import LinearGradient from 'react-native-linear-gradient';

const AppointmentScreen = () => {
  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <StatusBar backgroundColor={colors.color2} barStyle="light-content" />
        <View>
          <Text style={styles.headerText}>Appointments</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View>
          <Image
            source={require('../assests/images/exercise.jpg')}
            style={styles.image}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.button_package}>
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
              Make an Appointment
            </Text>
          </LinearGradient>

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
              Approved Appointments
            </Text>
          </LinearGradient>

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
              Past Appointments
            </Text>
          </LinearGradient>
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
    marginTop: 30,
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

export default AppointmentScreen;

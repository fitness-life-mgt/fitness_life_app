import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import colors from '../config/colors';
// import {WeekCalendar} from 'react-native-calendars';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>Hi Chanaka!</Text>
        </View>
      </View>
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Image
              source={require('../assests/images/home.png')}
              style={styles.image_home}
              resizeMode="stretch"
            />
          </View>

          <View style={styles.image_container}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AppointmentScreen')}>
              <Image
                source={require('../assests/images/Appointment.png')}
                style={styles.image_click}
                resizeMode="stretch"
              />
              <Text style={styles.text_appointment}>Appointments</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('DietPlanScreen')}>
              <Image
                source={require('../assests/images/Dietplan.png')}
                style={styles.image_click}
                resizeMode="stretch"
              />
              <Text style={styles.text_dietplan}>Diet Plans</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.image_container}>
            <TouchableOpacity>
              <Image
                source={require('../assests/images/store.png')}
                style={styles.image_click1}
                resizeMode="stretch"
              />
              <Text style={styles.text_store}>Store</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('AboutUsScreen')}>
              <Image
                source={require('../assests/images/about.png')}
                style={styles.image_click1}
                resizeMode="stretch"
              />
              <Text style={styles.text_about}>About Us</Text>
            </TouchableOpacity>
          </View>

          {/* <View>
            <Image
              source={require('../assests/images/homeImage2.png')}
              style={styles.image_home2}
              resizeMode="stretch"
            />
          </View> */}
          {/* <Text style={styles.text_home2}>Schedules                    Self Progress</Text> */}
        </ScrollView>
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
  image_container: {
    width: 320,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: -43,
  },
  image_click: {
    height: 200,
    width: 182,
    // marginBottom: 10,
  },
  image_click1: {
    height: 150,
    width: 182,
    paddingBottom: 20,
    marginBottom: 10,
  },
  image_home: {
    height: 200,
    width: windowWidth,
  },
  image_home2: {
    top: -25,
    height: 150,
    width: windowWidth,
  },
  text_appointment: {
    position: 'absolute',
    fontSize: 16,
    fontFamily: 'roboto',
    color: colors.color5,
    left: 48,
    top: 35,
    fontWeight: 'bold',
  },
  text_dietplan: {
    position: 'absolute',
    fontSize: 16,
    fontFamily: 'roboto',
    color: colors.color5,
    left: 48,
    top: 36,
    fontWeight: 'bold',
  },
  text_store: {
    position: 'absolute',
    fontSize: 16,
    fontFamily: 'roboto',
    color: colors.color5,
    left: 80,
    top: 8,
    fontWeight: 'bold',
  },
  text_about: {
    position: 'absolute',
    fontSize: 16,
    fontFamily: 'roboto',
    color: colors.color5,
    left: 48,
    top: 8,
    fontWeight: 'bold',
  },
  text_home2: {
    fontSize: 16,
    fontFamily: 'roboto',
    color: colors.color5,
    left: 60,
    top: -168,
    fontWeight: 'bold',
  },
});

export default HomeScreen;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
  TextInput,
} from 'react-native';
import colors from '../config/colors';
import LinearGradient from 'react-native-linear-gradient';

const ContactUsScreen = () => {
  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <StatusBar backgroundColor={colors.color2} barStyle="light-content" />
        <View>
          <Text style={styles.headerText}>Contact Us</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.contact}>
          {/* <Image
            source={require('../assests/images/contact.jpg')}
            style={styles.image}
            resizeMode="stretch"
          /> */}
          <Text style={styles.bodyText}>Subject</Text>
          <TextInput placeholder="Your Email" autoCapitalize="none" />
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
  contact: {
    top: 30,
    left: 20,
    right: 100,
    width: windowWidth,
    borderBottomWidth: 1,
    borderBottomColor: colors.color2,
  },

  bodyText: {
    fontSize: 24,
    color: colors.color2,
    fontWeight: 'bold',
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

export default ContactUsScreen;

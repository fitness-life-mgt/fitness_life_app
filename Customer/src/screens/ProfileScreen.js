import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import colors from '../config/colors';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
// import {withNavigation} from 'react-navigation';
// const ProfileScreen = ({navigation}) => {

export default class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios.get('http://localhost:8088/getProfileDetails').then(res => {
      console.log(res);
      this.setState({
        data: res.data,
      });
      // setshowWarning(true);
    });
  }

  render() {
    return (
      <View style={styles.view}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerText}>Profile</Text>
          </View>
        </View>
        <View style={styles.body}>
          <Animatable.View style={styles.topBody} animation="fadeInDownBig">
            <View style={styles.image_container}>
              <Image
                source={require('../assests/images/user.png')}
                style={styles.image_user}
                resizeMode="stretch"
              />
            </View>
            <View style={styles.body_details}>
              {/* <Text style={styles.textDetails}>Name :</Text> */}
              {this.state.data.map(item => (
                <View>
                  <Text style={styles.textDetailsLarge}>{item.firstName}</Text>
                  <Text style={styles.textDetailsMedium}>{item.lastName}</Text>
                  <Text style={styles.textDetailsSmall}>{item.email}</Text>
                </View>
              ))}
            </View>
          </Animatable.View>
          <View style={styles.button_package}>
            <TouchableOpacity
              style={styles.package}
              onPress={() => this.props.navigation.navigate('EditProfile')}>
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
                  Change Password
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* <TouchableOpacity
              style={styles.package}
              onPress={() =>
                this.props.navigation.navigate('AddProfileScreen')
              }>
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
                  Add Profile Details
                </Text>
              </LinearGradient>
            </TouchableOpacity> */}

            <TouchableOpacity
              style={styles.package}
              onPress={() =>
                this.props.navigation.navigate('UpdateProfileScreen')
              }>
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
                  Update Profile Details
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SplashScreen')}
              style={[
                styles.logout,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  borderColor: colors.color3,
                  borderWidth: 1,
                },
              ]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: colors.color3,
                  },
                ]}>
                Log Out
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const windowWidth = Dimensions.get('window').width;
const {height} = Dimensions.get('screen');
const height_logo = height * 0.2;

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
    flex: 7,
    width: windowWidth,
    backgroundColor: colors.color5,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  topBody: {
    backgroundColor: colors.color2,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    flex: 3.2,
  },
  lowBody: {
    flex: 3,
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
  image_container: {
    top: 10,
    alignItems: 'center',
  },
  image_user: {
    width: height_logo,
    height: height_logo,
  },
  body_details: {
    top: -5,
  },
  textDetailsLarge: {
    fontSize: 30,
    fontFamily: 'roboto',
    color: colors.color5,
    textAlign: 'center',
  },
  textDetailsMedium: {
    fontSize: 24,
    fontFamily: 'roboto',
    color: colors.color5,
    textAlign: 'center',
  },
  textDetailsSmall: {
    fontSize: 20,
    fontFamily: 'roboto',
    color: colors.color1,
    textAlign: 'center',
  },
  button_package: {
    flex: 2.5,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 25,
    marginBottom: 15,
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
  logout: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    marginLeft: 10,
  },
});

// export default ProfileScreen;

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  Linking,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import colors from '../config/colors';
import {color} from 'react-native-reanimated';

const LogInScreen = ({navigation}) => {
  const [emailtext, setemailtext] = useState('');
  const [passwordtext, setpasswordtext] = useState('');

  const login = (email, password) => {
    const x = {
      email: email,
      password: password,
    };
    axios.post('http://localhost:8088/login', x).then(res => {
      if (res.data == 'SUCCESS') {
        navigation.navigate('Tabs');
      } else {
        console.log(res.data.msg);
        Alert.alert('Login Error!', res.data.msg.toString(), [
          {text: 'Okay', onPress: () => console.log('alert closed')},
        ]);
      }
    });
    // .catch(error => {
    //   // console.log(error);
    //   console.log('Error in Login Screen');
    // });
  };

  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = val => {
    if (val.lenght != 0) {
      setData(
        {
          ...data,
          email: val,
          check_textInputChange: true,
        },
        setemailtext(val),
      );
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StatusBar backgroundColor={colors.color2} barStyle="light-content" />
        <Text style={styles.text_header}>Welcome to Fitness Life!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="grey" size={20} />
          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            name="emailtext"
            value={emailtext}
            onChangeText={val => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color={colors.color2} size={20} />
            </Animatable.View>
          ) : null}
        </View>

        <Text style={styles.text_footer}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="grey" size={20} />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            name="passwordtext"
            value={passwordtext}
            onChangeText={val => setpasswordtext(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color={colors.color2} size={20} />
            ) : (
              <Feather name="eye" color={colors.color2} size={20} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => login(emailtext, passwordtext)}>
            <LinearGradient
              colors={[colors.color3, colors.color4]}
              style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: colors.color5,
                  },
                ]}>
                Log In
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}
            style={[
              styles.signIn,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                borderColor: colors.color3,
                borderWidth: 1,
                marginTop: 15,
              },
            ]}>
            <Text
              style={[
                styles.textSign,
                {
                  color: colors.color3,
                },
              ]}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.view_password}>
          <Text
            onPress={() => Linking.openURL('http://fitnesslife.lk')}
            style={styles.text_password}>
            Forgot Password?
          </Text>
        </View> */}
      </Animatable.View>
    </View>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color2,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
    fontFamily: 'roboto',
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'roboto',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    // height: 20,
    // width: 100,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 40,
    width: '100%',
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 100,
    marginLeft: 100,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 125,
    marginLeft: 125,
  },
  view_password: {
    paddingTop: 15,
    justifyContent: 'center',
    alignContent: 'center',
  },
  text_password: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.color2,
  },
});

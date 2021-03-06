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
  ScrollView,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from '../config/colors';
import PhoneInput from 'react-native-phone-number-input';

// const RegisterScreen = navigation => {
//   const [data, setData] = React.useState({
//     username: '',
//     password: '',
//     check_textInputChange: false,
//     secureTextEntry: true,
//   });

const RegisterScreen = ({navigation}) => {
  const [fnametext, setfnametext] = useState('');
  const [lnametext, setlnametext] = useState('');
  const [emailtext, setemailtext] = useState('');
  const [passwordtext, setpasswordtext] = useState('');
  const [cpasswordtext, setcpasswordtext] = useState('');
  const [showWarning, setshowWarning] = useState(false);

  const SignUp = (fname, lname, email, password, cpassword) => {
    const x = {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      cpassword: cpassword,
    };

    axios.post('http://localhost:8088/register', x).then(res => {
      if (res.data == 'SUCCESS') {
        // Alert.alert('Registerd', 'Please Login to Continue', [
        //   {text: 'Login', onPress: () => navigation.navigate('LogInScreen')},
        // ]);
        setshowWarning(true);
      } else {
        console.log(res.data.msg);
        Alert.alert('Registration Error!', res.data.msg.toString(), [
          {text: 'Okay', onPress: () => console.log('alert closed')},
        ]);
      }
    });
    // .catch(error => {
    //   // setshowWarning(true);
    //   console.log(error.error);
    //   Alert.alert('Oops', error.toString(), [
    //     {text: 'Okay', onPress: () => console.log('alert closed')},
    //   ]);
    //console.log(error);
  };

  const [data, setData] = React.useState({
    email: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
  });

  const textInputChangeFirstName = val => {
    if (val.length != 0) {
      setData(
        {
          ...data,
          first_name: val,
          check_textInputChangeFirstName: true,
          // isValidUser: true,
        },
        setfnametext(val),
      );
    } else {
      setData({
        ...data,
        first_name: val,
        check_textInputChangeFirstName: false,
        // isValidUser: false,
      });
    }
  };

  const textInputChangeLastName = vals => {
    if (vals.length != 0) {
      setData(
        {
          ...data,
          first_name: vals,
          check_textInputChangeLastName: true,
          // isValidUser: true,
        },
        setlnametext(vals),
      );
    } else {
      setData({
        ...data,
        first_name: vals,
        check_textInputChangeLastName: false,
        // isValidUser: false,
      });
    }
  };

  const textInputChangeEmail = val => {
    if (val.length !== 0) {
      setData(
        {
          ...data,
          first_name: val,
          check_textInputChangeEmail: true,
          // isValidUser: true,
        },
        setemailtext(val),
      );
    } else {
      setData({
        ...data,
        first_name: val,
        check_textInputChangeEmail: false,
        // isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        // password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        // password: val,
        isValidPassword: false,
      });
    }
  };

  const handleConfirmPasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        // password: val,
        isValidConfirmPassword: true,
      });
    } else {
      setData({
        ...data,
        // password: val,
        isValidConfirmPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Modal
          transparent
          visible={showWarning}
          animationType="fade"
          hardwareAccelerated
          onRequestClose={() => setshowWarning(false)}>
          <View style={styles.centered_modal}>
            <View style={styles.error_modal}>
              <View style={styles.header_modal}>
                <Text style={styles.header_text_modal}>
                  Successfully Registered!
                </Text>
              </View>
              <View style={styles.body_modal}>
                <Text style={styles.body_text_modal}>
                  Please Login to Continue!
                </Text>
              </View>
              <Pressable
                style={styles.pressable_modal}
                onPress={() => navigation.navigate('LogInScreen')}
                android_ripple={{color: '#fff'}}>
                <Text style={styles.pressable_text_modal}>Login</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <View style={styles.header}>
          <StatusBar backgroundColor={colors.color2} barStyle="light-content" />
          <Text style={styles.text_header}>Register Yourself!</Text>
          <Text style={styles.text_header_small}>
            Your Gym is Waiting for you!
          </Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <Text style={styles.text_footer}>First Name</Text>
          <View style={styles.action}>
            <FontAwesome name="user" color="grey" size={20} />
            <TextInput
              placeholder="Your First Name"
              style={styles.textInput}
              autoCapitalize="none"
              name="fnametext"
              value={fnametext}
              onChangeText={val => textInputChangeFirstName(val)}
            />
            {data.check_textInputChangeFirstName ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color={colors.color2} size={20} />
              </Animatable.View>
            ) : null}
          </View>

          {/* To get the last name */}
          <Text style={styles.text_footer}>Last Name</Text>
          <View style={styles.action}>
            <FontAwesome name="user" color="grey" size={20} />
            <TextInput
              placeholder="Your Last Name"
              style={styles.textInput}
              autoCapitalize="none"
              name="lnametext"
              value={lnametext}
              onChangeText={
                val => textInputChangeLastName(val)
                // vals => textInputChangeLastName(vals))
              }
              // onChangeText={val => textInputChangeLastName(val)}
            />
            {data.check_textInputChangeLastName ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color={colors.color2} size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {/* To get the email */}
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <FontAwesome name="envelope" color="grey" size={20} />
            <TextInput
              placeholder="Your Email"
              keyboardType="email-address"
              style={styles.textInput}
              autoCapitalize="none"
              name="emailtext"
              value={emailtext}
              // onChangeText={val => setemailtext(val)}
              onChangeText={val => textInputChangeEmail(val)}
            />
            {data.check_textInputChangeEmail ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color={colors.color2} size={20} />
              </Animatable.View>
            ) : null}
          </View>

          {/* password */}
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
              onEndEditing={e => handlePasswordChange(e.nativeEvent.text)}
              // onChangeText={val => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color={colors.color2} size={20} />
              ) : (
                <Feather name="eye" color={colors.color2} size={20} />
              )}
            </TouchableOpacity>
          </View>
          {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password must be 8 Characters long
              </Text>
            </Animatable.View>
          )}
          {/* confirm password */}
          <Text style={styles.text_footer}>Confirm Password</Text>
          <View style={styles.action}>
            <FontAwesome name="lock" color="grey" size={20} />
            <TextInput
              placeholder="Re-enter Password"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              name="cpasswordtext"
              value={cpasswordtext}
              onChangeText={val => setcpasswordtext(val)}
              onEndEditing={e =>
                handleConfirmPasswordChange(e.nativeEvent.text)
              }
              // onChangeText={val => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.confirm_secureTextEntry ? (
                <Feather name="eye-off" color={colors.color2} size={20} />
              ) : (
                <Feather name="eye" color={colors.color2} size={20} />
              )}
            </TouchableOpacity>
          </View>
          {data.isValidConfirmPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password must be 8 Characters long
              </Text>
            </Animatable.View>
          )}

          <View style={styles.button}>
            <TouchableOpacity
              onPress={() =>
                SignUp(
                  fnametext,
                  lnametext,
                  emailtext,
                  passwordtext,
                  cpasswordtext,
                )
              }>
              <LinearGradient
                colors={[colors.color3, colors.color4]}
                style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    // eslint-disable-next-line react-native/no-inline-styles
                    {
                      color: '#ffffff',
                    },
                  ]}>
                  Register
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('LogInScreen')}
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
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color2,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
    fontFamily: 'roboto',
    paddingTop: 30,
  },
  footer: {
    flex: 4,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: colors.color5,
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'roboto',
    // paddingTop: 10,
    // marginTop: 5,
  },
  text_header_small: {
    color: colors.color5,
    // fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'roboto',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
    paddingTop: 5,
  },
  action: {
    flexDirection: 'row',
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    // paddingBottom: 5,
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
    marginTop: 20,
    width: '100%',
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 125,
    marginLeft: 125,
  },
  centered_modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000070',
  },
  error_modal: {
    width: 270,
    height: 150,
    backgroundColor: colors.color5,
    // borderWidth: 1,
    // borderColor: colors.color2,
    borderRadius: 10,
  },
  header_modal: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: colors.color3,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  header_text_modal: {
    fontFamily: 'roboto',
    fontSize: 19,
    color: colors.color2,
    fontWeight: 'bold',
  },
  body_modal: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body_text_modal: {
    fontFamily: 'roboto',
    fontSize: 17,
    color: colors.color1,
    marginTop: -20,
  },
  pressable_modal: {
    // borderTopWidth: 1,
    // borderColor: colors.color1,
    backgroundColor: colors.color4,
    height: 50,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  pressable_text_modal: {
    fontFamily: 'roboto',
    fontSize: 18,
    color: colors.color5,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 10,
    fontWeight: 'bold',
  },
});

import React, {Component, useState, useEffect} from 'react';
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
  Modal,
  Alert,
  Pressable,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from '../config/colors';
import PhoneInput from 'react-native-phone-number-input';

const AddProfileScreen = ({navigation}) => {
  const [phonetext, setphonetext] = useState('');
  //   const [passwordtext, setpasswordtext] = useState('');
  //   const [cpasswordtext, setcpasswordtext] = useState('');
  const [addresstext, setaddresstext] = useState('');
  const [heighttext, setheighttext] = useState('');
  const [weighttext, setweighttext] = useState('');
  const [agetext, setagetext] = useState('');
  const [showWarning, setshowWarning] = useState(false);

  const Edit = (telephone, address, height, weight, age) => {
    const x = {
      telephone: telephone,
      address: address,
      height: height,
      weight: weight,
      age: age,
    };

    axios.post('http://localhost:8088/addProfileDetails', x).then(res => {
      if (res.data == 'SUCCESS') {
        setshowWarning(true);
      } else {
        console.log(res.data.msg);
        Alert.alert('Failed!', res.data.msg.toString(), [
          {text: 'Okay', onPress: () => console.log('alert closed')},
        ]);
      }
    });
    // .catch(error => {
    //   console.log(error);
    // });
  };

  const [data, setData] = React.useState({
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  return (
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
              <Text style={styles.header_text_modal}>Success!</Text>
            </View>
            <View style={styles.body_modal}>
              <Text style={styles.body_text_modal}>Profile Details Added</Text>
            </View>
            <Pressable
              style={styles.pressable_modal}
              onPress={() => navigation.navigate('Tabs')}
              android_ripple={{color: '#fff'}}>
              <Text style={styles.pressable_text_modal}>Okay</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        <StatusBar backgroundColor={colors.color2} barStyle="light-content" />
        <Text style={styles.text_header}>Add Your Details</Text>
        <Text style={styles.textDetailsMedium}>
          Add details to complete your profile
        </Text>
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* To get the phone number */}
          <View>
            <Text style={styles.text_footer}>Contact No.</Text>
            <View style={styles.action}>
              <Entypo name="phone" color="grey" size={20} />
              <TextInput
                placeholder="94XXXXXXXXX"
                keyboardType="numeric"
                style={styles.textInput}
                autoCapitalize="none"
                name="phonetext"
                value={phonetext}
                onChangeText={val => setphonetext(val)}
              />
              {data.check_textInputChange ? (
                <Animatable.View animation="bounceIn">
                  <Feather
                    name="check-circle"
                    color={colors.color2}
                    size={20}
                  />
                </Animatable.View>
              ) : null}
            </View>

            <Text style={styles.text_footer}>Address</Text>
            <View style={styles.action}>
              <Entypo name="location" color="grey" size={20} />
              <TextInput
                placeholder="Your Address"
                style={styles.textInput}
                autoCapitalize="none"
                name="addresstext"
                value={addresstext}
                onChangeText={val => setaddresstext(val)}
              />
              {data.check_textInputChange ? (
                <Animatable.View animation="bounceIn">
                  <Feather
                    name="check-circle"
                    color={colors.color2}
                    size={20}
                  />
                </Animatable.View>
              ) : null}
            </View>

            <Text style={styles.text_footer}>Height</Text>
            <View style={styles.action}>
              <MaterialCommunity
                name="human-male-height"
                color="grey"
                size={20}
              />
              <TextInput
                placeholder="Your Height in cm"
                keyboardType="numeric"
                style={styles.textInput}
                autoCapitalize="none"
                name="heighttext"
                value={heighttext}
                onChangeText={val => setheighttext(val)}
              />
              {data.check_textInputChange ? (
                <Animatable.View animation="bounceIn">
                  <Feather
                    name="check-circle"
                    color={colors.color2}
                    size={20}
                  />
                </Animatable.View>
              ) : null}
            </View>

            <Text style={styles.text_footer}>Weight</Text>
            <View style={styles.action}>
              <MaterialCommunity
                name="weight-kilogram"
                color="grey"
                size={20}
              />
              <TextInput
                placeholder="Your Weight in Kg"
                keyboardType="numeric"
                style={styles.textInput}
                autoCapitalize="none"
                name="weighttext"
                value={weighttext}
                onChangeText={val => setweighttext(val)}
              />
              {data.check_textInputChange ? (
                <Animatable.View animation="bounceIn">
                  <Feather
                    name="check-circle"
                    color={colors.color2}
                    size={20}
                  />
                </Animatable.View>
              ) : null}
            </View>

            <Text style={styles.text_footer}>Age</Text>
            <View style={styles.action}>
              <FontAwesome name="age" color="grey" size={20} />
              <TextInput
                placeholder="Your Age"
                style={styles.textInput}
                autoCapitalize="none"
                name="agetext"
                value={agetext}
                onChangeText={val => setagetext(val)}
              />
              {data.check_textInputChange ? (
                <Animatable.View animation="bounceIn">
                  <Feather
                    name="check-circle"
                    color={colors.color2}
                    size={20}
                  />
                </Animatable.View>
              ) : null}
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                Edit(phonetext, addresstext, heighttext, weighttext, agetext)
              }>
              <LinearGradient
                colors={[colors.color3, colors.color4]}
                //style={styles.signIn}
              >
                <Text
                  style={[
                    styles.textSign,
                    // eslint-disable-next-line react-native/no-inline-styles
                    {
                      color: '#ffffff',
                    },
                  ]}>
                  Add Details
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default AddProfileScreen;

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
    flex: 5,
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
  },
  text_header_small: {
    color: colors.color5,
    // fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'roboto',
  },
  textDetailsMedium: {
    fontSize: 20,
    fontFamily: 'roboto',
    color: colors.color1,
    textAlign: 'left',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
    marginTop: 8,
  },
  action: {
    flexDirection: 'row',
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: -5,
    marginBottom: -5,
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
    // color: '#05375a',
    fontSize: 15,
    // height: 20,
    // width: 100,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    //marginTop: 10,
    borderColor: colors.color3,
    backgroundColor: colors.color3,
    borderWidth: 1,
    marginTop: 22,
    borderRadius: 10,
    padding: 10,
  },
  signIn: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    //borderRadius: 10,
  },
  textSign: {
    fontSize: 19,
    fontWeight: 'bold',
    backgroundColor: colors.color3,
    alignItems: 'center',
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

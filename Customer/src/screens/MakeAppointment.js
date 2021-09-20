import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Platform,
  Alert,
  Modal,
  Pressable,
  Dimensions,
} from 'react-native';
import colors from '../config/colors';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import DatePicker from 'react-native-date-picker';
import DropDownPicker from 'react-native-dropdown-picker';

const MakeAppointment = ({navigation}) => {
  const [appdatetext, setappdatetext] = useState('');
  const [apptimetext, setapptimetext] = useState('');
  const [trainertext, settrainertext] = useState('');
  const [showWarning, setshowWarning] = useState(false);
  const today = new Date(new Date().getFullYear(), new Date().getMonth(), 21);

  const SignUp = (appdate, apptime, trainer) => {
    const x = {
      appdate: appdate,
      apptime: apptime,
      trainer: trainer,
    };

    axios.post('http://localhost:8088/makeAppointment', x).then(res => {
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

  const [date, setDate] = useState(new Date());
  // const [time, setTime] = useState(new Time());
  const [open1, setOpen1] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Mr. Kasun', value: '1'},
    {label: 'Ms. Anne', value: '2'},
    {label: 'Mr. Colin', value: '3'},
    {label: 'Mr. Scott', value: '4'},
  ]);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    {label: 'Morning', value: 'Morning'},
    {label: 'Evening', value: 'Evening'},
  ]);

  return (
    // <ScrollView showsVerticalScrollIndicator={false}>
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
              <Text style={styles.body_text_modal}>
                Appointment Request Sent!
              </Text>
            </View>
            <Pressable
              style={styles.pressable_modal}
              onPress={() => navigation.navigate('AppointmentScreen')}
              android_ripple={{color: '#fff'}}>
              <Text style={styles.pressable_text_modal}>Okay</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        <StatusBar backgroundColor={colors.color2} barStyle="light-content" />
        <Text style={styles.text_header}>Request Your Appointment</Text>
        <Text style={styles.textDetailsMedium}>
          Your Trainer will accept your request and confirm the appointment
        </Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Trainer</Text>

        {/* <View style={styles.action_dropdown}> */}
        <DropDownPicker
          placeholder="Select a Trainer"
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        {/* <FontAwesome name="envelope" color="grey" size={20} />
          <TextInput
            placeholder="Trainer Name"
            style={styles.textInput}
            autoCapitalize="none"
            name="trainertext"
            value={trainertext}
            onChangeText={val => settrainertext(val)}
          /> */}
        {/* </View> */}

        <Text style={styles.text_footer}>Date</Text>
        {/* <View style={styles.action}>
            <FontAwesome name="calendar" color="grey" size={20} />
            <TextInput
              placeholder="YYYY-MM-DD"
              style={styles.textInput}
              autoCapitalize="none"
              name="appdatetext"
              value={appdatetext}
              onChangeText={val => setappdatetext(val)}
            />
          </View> */}

        {/* button for date picker */}
        <View style={styles.action_button}>
          <Button
            style={styles.btnDate}
            color={colors.color1}
            title="Select Date"
            onPress={() => setOpen1(true)}
          />
          <DatePicker
            name="appdatetext"
            value={appdatetext}
            mode="date"
            // format="YYYY-MM-DD"
            // minimumDate={today}
            // minimumDate="2021-09-20"
            minimumDate={today}
            modal
            open={open1}
            date={date}
            onConfirm={date => {
              setOpen1(false);
              setDate(date);
              setappdatetext(date);
            }}
            onCancel={() => {
              setOpen1(false);
            }}
          />
        </View>
        {/* To get the last name */}
        <Text style={styles.text_footer}>Session</Text>
        <DropDownPicker
          placeholder="Select a Session"
          open={open2}
          value={value2}
          items={items2}
          setOpen={setOpen2}
          setValue={setValue2}
          setItems={setItems2}
        />
        {/* <View style={styles.action}>
          <FontAwesome name="clock-o" color="grey" size={20} />
          <TextInput
            placeholder="Morning or Evening"
            style={styles.textInput}
            autoCapitalize="none"
            name="apptimetext"
            value={apptimetext}
            onChangeText={val => setapptimetext(val)}
          />
        </View> */}

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => SignUp(appdatetext, apptimetext, trainertext)}>
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
                Request Appointment
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
    //  </ScrollView>
  );
};

export default MakeAppointment;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color2,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 30,
    fontFamily: 'roboto',
    paddingTop: 30,
    marginTop: 40,
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
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
    marginTop: 8,
  },
  action: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    marginBottom: 10,
    marginTop: 10,
    paddingBottom: 5,
  },
  action_button: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    marginBottom: 10,
    marginTop: 10,
    paddingBottom: 5,
    width: windowWidth,
    zIndex: -1,
  },
  action_dropdown: {
    marginBottom: 10,
    marginTop: 10,
    paddingBottom: 5,
    zIndex: 1,
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
    paddingBottom: 5,
    marginBottom: 5,
    height: 40,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 28,
    width: '100%',
  },
  btnDate: {
    alignItems: 'center',
    marginTop: 50,
    color: colors.color3,
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
    // marginRight: 125,
    // marginLeft: 125,
  },
  textDetailsMedium: {
    fontSize: 19,
    fontFamily: 'roboto',
    color: colors.color1,
    textAlign: 'left',
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

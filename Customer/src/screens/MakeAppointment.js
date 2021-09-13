import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import {Formik} from 'formik';
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
  ColorPropType,
} from 'react-native';
import colors from '../config/colors';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import DatePicker from 'react-native-date-picker';

// const getCurrentDate = () => {
//   var date = new Date().getDate();
//   var month = new Date().getMonth() + 1;
//   var year = new Date().getFullYear();

//   //Alert.alert(date + '-' + month + '-' + year);
//   // You can turn it in to your desired format
//   return year + '-' + month + '-' + date; //format: yyyy-mm-dd;
// };
// var currentDate = getCurrentDate().toString();

const MakeAppointment = ({navigation}) => {
  const [appdatetext, setappdatetext] = useState('');
  const [apptimetext, setapptimetext] = useState('');
  const [hourstext, sethourstext] = useState('');
  const [emailtext, setemailtext] = useState('');

  const SignUp = (appdate, apptime, hours, email) => {
    const x = {
      appdate: appdate,
      apptime: apptime,
      hours: hours,
      email: email,
    };

    axios
      .post('http://localhost:8088/makeAppointment', x)
      .then(res => {
        if (res.data == 'SUCCESS') {
          navigation.navigate('Appointments');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  // const [data, setData] = React.useState({
  //   email: '',
  //   password: '',
  //   confirm_password: '',
  //   check_textInputChange: false,
  //   secureTextEntry: true,
  //   confirm_secureTextEntry: true,
  // });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <StatusBar backgroundColor={colors.color2} barStyle="light-content" />
          <Text style={styles.text_header}>Request Your Appointment</Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <FontAwesome name="envelope" color="grey" size={20} />
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              autoCapitalize="none"
              name="emailtext"
              value={emailtext}
              onChangeText={val => setemailtext(val)}
            />
          </View>

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

          <Button title="Open" onPress={() => setOpen(true)} />
          <DatePicker
            name="appdatetext"
            value={appdatetext}
            mode="date"
            // minimumDate={currentDate} --> Method in top of the file
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
              setappdatetext(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />

          {/* To get the last name */}
          <Text style={styles.text_footer}>Time</Text>
          <View style={styles.action}>
            <FontAwesome name="clock-o" color="grey" size={20} />
            <TextInput
              placeholder="HH:MM:SS"
              style={styles.textInput}
              autoCapitalize="none"
              name="apptimetext"
              value={apptimetext}
              onChangeText={
                val => setapptimetext(val)
                // vals => textInputChangeLastName(vals))
              }
              // onChangeText={val => textInputChangeLastName(val)}
            />
            {/* {data.check_textInputChangeLastName ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color={colors.color2} size={20} />
              </Animatable.View>
            ) : null} */}
          </View>
          {/* To get the email */}
          <Text style={styles.text_footer}>No. of Hours</Text>
          <View style={styles.action}>
            <FontAwesome name="hourglass" color="grey" size={20} />
            <TextInput
              placeholder="1"
              style={styles.textInput}
              autoCapitalize="none"
              name="hourstext"
              value={hourstext}
              onChangeText={val => sethourstext(val)}
              // onChangeText={val => textInputChangeEmail(val)}
            />
            {/* {data.check_textInputChangeEmail ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color={colors.color2} size={20} />
              </Animatable.View>
            ) : null} */}
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => SignUp(appdatetext, apptimetext, hourstext)}>
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
    </ScrollView>
  );
};

export default MakeAppointment;

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
    marginBottom: -5,
    marginTop: 10,
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
});

// export default function MakeAppointment() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <StatusBar backgroundColor={colors.color2} barStyle="light-content" />
//         <Text style={styles.text_header}>Request Your Appointment</Text>
//       </View>

//       <Animatable.View animation="fadeInUpBig" style={styles.footer}>
//         <ScrollView showsVerticalScrollIndicator={false}>
//           <Formik
//             initialValues={{name: '', date: '', time: '', duration: ''}}
//             onSubmit={(values, actions) => {
//               actions.resetForm();
//               console.log(values);
//             }}>
//             {props => (
//               <View>
//                 <Text style={styles.text_footer}>Name</Text>
//                 <View style={styles.action}>
//                   <TextInput
//                     style={styles.textInput}
//                     placeholder="Name"
//                     onChangeText={props.handleChange('name')}
//                     value={props.values.name}
//                   />
//                 </View>

//                 <Text style={styles.text_footer}>Date of Appointment</Text>
//                 <View style={styles.action}>
//                   <TextInput
//                     style={styles.textInput}
//                     placeholder="DD/MM/YYYY"
//                     onChangeText={props.handleChange('date')}
//                     value={props.values.date}
//                   />
//                 </View>

//                 <Text style={styles.text_footer}>Time of Appointment</Text>
//                 <View style={styles.action}>
//                   <TextInput
//                     style={styles.textInput}
//                     placeholder="HH:MM"
//                     onChangeText={props.handleChange('time')}
//                     value={props.values.time}
//                   />
//                 </View>

//                 <Text style={styles.text_footer}>Number of Hours</Text>
//                 <View style={styles.action}>
//                   <TextInput
//                     style={styles.textInput}
//                     placeholder="1"
//                     onChangeText={props.handleChange('duration')}
//                     value={props.values.duration}
//                   />
//                 </View>

//                 <View style={styles.button}>
//                   <Button
//                     title="Request Appointment"
//                     color={colors.color3}
//                     onPress={props.handleSubmit}
//                   />
//                 </View>
//               </View>
//             )}
//           </Formik>
//         </ScrollView>
//       </Animatable.View>
//     </View>
//   );
// }

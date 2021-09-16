import React, {useState} from 'react';
import axios from 'axios';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import colors from '../config/colors';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

const RequestDietPlan = ({navigation}) => {
  const [desc, setdesc] = useState('');

  const SignUp = desc => {
    const x = {
      desc: desc,
    };

    axios
      .post('http://localhost:8088/requestDietPlan', x)
      .then(res => {
        if (res.data == 'SUCCESS') {
          navigation.navigate('DietPlanScreen');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const [date, setDate] = useState(new Date());
  // const [time, setTime] = useState(new Time());
  const [open, setOpen] = useState(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <StatusBar backgroundColor={colors.color2} barStyle="light-content" />
          <Text style={styles.text_header}>Request Your Diet Plan</Text>
          <Text style={styles.textDetailsMedium}>
            Add the description Stating your requirement of a diet plan. Please
            clearly mention, any allergies you have to avoid any trouble.
          </Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <Text style={styles.text_footer}>Description</Text>
          <View style={styles.action}>
            <TextInput
              multiline={true}
              numberOfLines={10}
              placeholder="Add Your Description here..."
              style={styles.textInput}
              autoCapitalize="none"
              name="desc"
              value={desc}
              onChangeText={val => setdesc(val)}
            />
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => SignUp(desc)}>
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
                  Request Diet Plan
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    </ScrollView>
  );
};

export default RequestDietPlan;

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
    marginTop: Platform.OS === 'ios' ? 0 : 0,
    padding: 20,
    color: '#05375a',
    paddingBottom: 5,
    marginBottom: 5,
    height: 200,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: colors.color2,
    borderRadius: 10,
    lineHeight: 24,
    fontSize: 17,
    fontFamily: 'roboto',
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
    width: '100%',
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
});

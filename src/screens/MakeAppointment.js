import React from 'react';
import {Formik} from 'formik';
import {StyleSheet, Button, TextInput, View, Text} from 'react-native';

export default function MakeAppointment() {
  return (
    <View>
      <Formik
        initialValues={{name: '', date: '', time: '', duration: ''}}
        onSubmit={values => {
          console.log(values);
        }}>
        {props => (
          <View>
            <TextInput
              style={appointmentStyles.name}
              placeholder="Name"
              onChangeText={props.handleChange('name')}
              value={props.values.name}
            />

            <TextInput
              style={appointmentStyles.date}
              placeholder="DD/MM/YYYY"
              onChangeText={props.handleChange('date')}
              value={props.values.date}
            />

            <TextInput
              style={appointmentStyles.time}
              placeholder="HH:MM"
              onChangeText={props.handleChange('time')}
              value={props.values.time}
            />

            <TextInput
              style={appointmentStyles.duration}
              placeholder="1"
              onChangeText={props.handleChange('duration')}
              value={props.values.duration}
            />

            <Button
              title="Make Appointment"
              color="red"
              onPress={props.handleSubmit}
            />
          </View> 
        )}
      </Formik>
    </View>
  );
}

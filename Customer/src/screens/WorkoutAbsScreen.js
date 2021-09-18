import React, {useState, useEffect, Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';

import colors from '../config/colors';
import axios from 'axios';
// require('../assests/images/workout.jpg');

export default class App extends Component {
  state = {
    data: [],
    // imageName: [],
    // id,
  };
  componentDidMount() {
    axios.get('http://localhost:8088/getAbsWorkouts').then(res => {
      console.log(res);
      this.setState({
        data: res.data,
      });
    });
  }

  render() {
    return (
      <View style={styles.view}>
        <View style={styles.header}>
          <StatusBar backgroundColor={colors.color2} barStyle="light-content" />
          <View>
            <Text style={styles.headerText}>ABS Workouts</Text>
          </View>
        </View>

        <View style={styles.body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.state.data.map(item => (
              <View style={styles.item}>
                <View style={styles.toparea}>
                  <View style={styles.imagearea}>
                    {/* const imageName = {item.image} */}
                    <Image
                      style={styles.image}
                      source={require('../assests/images/workout.jpg')}
                    />
                  </View>
                  <View style={styles.titlearea}>
                    <Text style={styles.text_header}>{item.workoutName}</Text>
                    <Text style={styles.text_header_duration}>
                      Duration: {item.duration} seconds
                    </Text>
                  </View>
                </View>
                <View style={styles.descarea}>
                  <Text style={styles.text_header_small}>
                    {item.description}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

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
  bodyText: {
    fontSize: 24,
  },
  button_package: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 50,
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
    height: 90,
    width: (windowWidth * 2) / 6,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  text_header_small: {
    color: colors.color1,
    // fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'roboto',
    marginLeft: 8,
    paddingTop: 5,
  },
  text_header: {
    color: colors.color2,
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 0,
    fontFamily: 'roboto',
  },
  text_header_duration: {
    color: colors.color2,
    // fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'roboto',
    marginLeft: 3,
    paddingTop: 5,
  },
  item: {
    marginTop: 24,
    marginLeft: 5,
    marginRight: 5,
    borderBottomWidth: 2,
    borderColor: colors.color1,
  },
  toparea: {
    // fontSize: 24,
    flexDirection: 'row',
  },
  imagearea: {
    flex: 2,
    // backgroundColor: colors.color1,
    // borderWidth: 1,
    // padding: 10,
    height: 90,
  },
  titlearea: {
    flex: 3,
    // backgroundColor: colors.color2,
    // borderWidth: 1,
    padding: 10,
    height: 90,
  },
  descarea: {
    // backgroundColor: colors.color2,
    // borderWidth: 2,
    padding: 1,
    marginBottom: 10,
    // height: 105,
  },
});

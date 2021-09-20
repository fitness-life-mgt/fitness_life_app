import React, {useState, useEffect, Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SectionList,
  StatusBar,
  Dimensions,
} from 'react-native';

import colors from '../config/colors';
import axios from 'axios';

export default class App extends Component {
  // constructor(props){
  //   super(props)
  // }
  state = {
    data: [],
    // id,
  };
  componentDidMount() {
    axios.get('http://localhost:8088/requestedDietPlans').then(res => {
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
            <Text style={styles.headerText}>Requested Diet Plans</Text>
          </View>
        </View>
        <View style={styles.body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.state.data.map(item => (
              <View style={styles.item}>
                <Text style={styles.text_header}>
                  Description -{' '}
                  <Text style={styles.text_header_small}>
                    {item.description}
                  </Text>
                </Text>
                <Text style={styles.text_header}>
                  Requested On -{' '}
                  <Text style={styles.text_header_small}>
                    {item.date.substring(0, 10)}
                  </Text>
                </Text>
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
    height: 200,
    width: windowWidth,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 20,
    marginLeft: 5,
    marginRight: 5,
    // backgroundColor: colors.color4,
    borderColor: colors.color1,
    borderWidth: 2,
    fontSize: 24,
    borderRadius: 0,
  },

  text_header_small: {
    color: colors.color1,
    // fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'roboto',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  text_header: {
    color: colors.color2,
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'roboto',
  },
});

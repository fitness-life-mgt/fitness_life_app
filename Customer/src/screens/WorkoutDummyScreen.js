import React from 'react';

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
// import axios from 'axios';
// require('../assests/images/workout.jpg');

const WorkoutDummyScreen = () => {
  //   state = {
  //     data: [],
  //     // imageName: [],
  //     // id,
  //   };
  //   componentDidMount() {
  //     axios.get('http://localhost:8088/getArmWorkouts').then(res => {
  //       console.log(res);
  //       this.setState({
  //         data: res.data,
  //       });
  //     });
  //   }

  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <StatusBar backgroundColor={colors.color2} barStyle="light-content" />
        <View>
          {/* <Text style={styles.headerText}>Arm Workouts</Text> */}
          {/* <Text style={styles.headerText}>Leg Workouts</Text> */}
          <Text style={styles.headerText}>ABS Workouts</Text>
        </View>
      </View>

      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.item}>
            <View style={styles.toparea}>
              <View style={styles.imagearea}>
                <Image
                  style={styles.image}
                  source={require('../assests/images/workouts/w1.jpg')}
                />
              </View>
              <View style={styles.titlearea}>
                <Text style={styles.text_header}>Mid-pushup hold</Text>
                <Text style={styles.text_header_duration}>
                  Duration: 180 seconds
                </Text>
              </View>
            </View>
            <View style={styles.descarea}>
              <Text style={styles.text_header_small}>
                Lowering yourself halfway into a pushup and hovering provides a
                crazy isometric burn for pretty much the entire upper body, and
                the triceps
              </Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.toparea}>
              <View style={styles.imagearea}>
                <Image
                  style={styles.image}
                  source={require('../assests/images/workouts/w2.jpeg')}
                />
              </View>
              <View style={styles.titlearea}>
                <Text style={styles.text_header}>Hammer Curls</Text>
                <Text style={styles.text_header_duration}>
                  Duration: 60 seconds
                </Text>
              </View>
            </View>
            <View style={styles.descarea}>
              <Text style={styles.text_header_small}>
                Go as heavy as you can handle for 10 reps—and then do curls in
                three one-minute sets, with a minute’s rest in-between
              </Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.toparea}>
              <View style={styles.imagearea}>
                <Image
                  style={styles.image}
                  source={require('../assests/images/workouts/w3.jpeg')}
                />
              </View>
              <View style={styles.titlearea}>
                <Text style={styles.text_header}>Tricep Dips</Text>
                <Text style={styles.text_header_duration}>
                  Duration: 60 seconds
                </Text>
              </View>
            </View>
            <View style={styles.descarea}>
              <Text style={styles.text_header_small}>
                Before you even consider bending your elbows, widen your chest
                and keep it proud, shoulders back. Bend your elbows straight
                back, again, focusing on your shoulder position.
              </Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.toparea}>
              <View style={styles.imagearea}>
                <Image
                  style={styles.image}
                  source={require('../assests/images/workouts/w4.jpeg')}
                />
              </View>
              <View style={styles.titlearea}>
                <Text style={styles.text_header}>Rope Cable Pushdown</Text>
                <Text style={styles.text_header_duration}>
                  Duration: 80 seconds
                </Text>
              </View>
            </View>
            <View style={styles.descarea}>
              <Text style={styles.text_header_small}>
                Stand with feet planted, and grasp the rope handles, pulling
                them down so your elbows are at right angles, locked at your
                sides. Press slowly straight down toward your legs.
              </Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.toparea}>
              <View style={styles.imagearea}>
                <Image
                  style={styles.image}
                  source={require('../assests/images/workouts/w5.jpeg')}
                />
              </View>
              <View style={styles.titlearea}>
                <Text style={styles.text_header}>Leg Press</Text>
                <Text style={styles.text_header_duration}>
                  Duration: 180 seconds
                </Text>
              </View>
            </View>
            <View style={styles.descarea}>
              <Text style={styles.text_header_small}>
                Bend your knees to lower the platform, stopping before your
                glutes lift off the pad. From there, powerfully extend your
                knees to press the weight up.
              </Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.toparea}>
              <View style={styles.imagearea}>
                <Image
                  style={styles.image}
                  source={require('../assests/images/workouts/w6.jpg')}
                />
              </View>
              <View style={styles.titlearea}>
                <Text style={styles.text_header}>Step-Up</Text>
                <Text style={styles.text_header_duration}>
                  Duration: 80 seconds
                </Text>
              </View>
            </View>
            <View style={styles.descarea}>
              <Text style={styles.text_header_small}>
                Hold a dumbbell in each hand in front of a knee- to hip-high
                step, bench or platform.
              </Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.toparea}>
              <View style={styles.imagearea}>
                <Image
                  style={styles.image}
                  source={require('../assests/images/workouts/w7.jpeg')}
                />
              </View>
              <View style={styles.titlearea}>
                <Text style={styles.text_header}>Walking Lunge</Text>
                <Text style={styles.text_header_duration}>
                  Duration: 120 seconds
                </Text>
              </View>
            </View>
            <View style={styles.descarea}>
              <Text style={styles.text_header_small}>
                Holding dumbbells in each hand, step forward with one foot. Bend
                both knees to lower your torso toward the floor.
              </Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.toparea}>
              <View style={styles.imagearea}>
                <Image
                  style={styles.image}
                  source={require('../assests/images/workouts/w8.jpeg')}
                />
              </View>
              <View style={styles.titlearea}>
                <Text style={styles.text_header}>Dumbell Crunch</Text>
                <Text style={styles.text_header_duration}>
                  Duration: 100 seconds
                </Text>
              </View>
            </View>
            <View style={styles.descarea}>
              <Text style={styles.text_header_small}>
                Lie on your back, holding a dumbbell or weight plate across your
                chest in both hands. Raise your torso, then lower it,
                maintaining tension in your uppers abs throughout.
              </Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.toparea}>
              <View style={styles.imagearea}>
                <Image
                  style={styles.image}
                  source={require('../assests/images/workouts/w9.jpeg')}
                />
              </View>
              <View style={styles.titlearea}>
                <Text style={styles.text_header}>Hanging Knee Raise</Text>
                <Text style={styles.text_header_duration}>
                  Duration: 150 seconds
                </Text>
              </View>
            </View>
            <View style={styles.descarea}>
              <Text style={styles.text_header_small}>
                Start in a dead hang and raise your knees powerfully to activate
                more of the muscle fibres in the lower abs. Lower back to the
                start under control to prevent swinging.
              </Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.toparea}>
              <View style={styles.imagearea}>
                <Image
                  style={styles.image}
                  source={require('../assests/images/workouts/w10.jpeg')}
                />
              </View>
              <View style={styles.titlearea}>
                <Text style={styles.text_header}>Plank</Text>
                <Text style={styles.text_header_duration}>
                  Duration: 90 seconds
                </Text>
              </View>
            </View>
            <View style={styles.descarea}>
              <Text style={styles.text_header_small}>
                Maintain a strict plank position, with your hips up, your glutes
                and core braced, and your head and neck relaxed. Breathing
                slowly and deeply.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default WorkoutDummyScreen;

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
    borderWidth: 1,
    borderColor: colors.color1,
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

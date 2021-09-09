import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Image,
  Slider,
  Animated,
  FlatList,
} from 'react-native';
import colors from '../config/colors';

import Ionicons from 'react-native-vector-icons/Ionicons';
// import Slider from '@react-native-community/slider';
import {TouchableOpacity} from 'react-native-gesture-handler';
import songs from '../assests/music/data';
// import Animated from 'react-native-reanimated';

const MusicScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [songIndex, setSongIndex] = useState(0);

  const songSlider = useRef();

  useEffect(() => {
    scrollX.addListener(({value}) => {
      // console.log('Scroll X ', scrollX);
      // console.log('Device Width ', windowWidth);

      const index = Math.round(value / windowWidth);
      setSongIndex(index);

      // console.log('Index', index);
    });
    return () => {
      scrollX.removeAllListeners();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const skipToNext = () => {
    songSlider.current.scrollToOffset({
      offset: (songIndex + 1) * windowWidth,
    });
  };

  const skipToPrevious = () => {
    songSlider.current.scrollToOffset({
      offset: (songIndex - 1) * windowWidth,
    });
  };

  const renderSongs = (index, item) => {
    return (
      <Animated.View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: windowWidth,
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'black',
        }}>
        <View style={styles.artworkWrapper}>
          <Image
            source={require('../assests/images/song.jpeg')}
            style={styles.artworkImg}
          />
        </View>
      </Animated.View>
    );
  };
  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Music</Text>
      </View>
      <View style={styles.body}>
        <Animated.FlatList
          ref={songSlider}
          data={songs}
          renderItem={renderSongs}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {x: scrollX},
                },
              },
            ],
            {useNativeDriver: true},
          )}
        />

        <View>
          <Text style={styles.title}>{songs[songIndex].title}</Text>
          <Text style={styles.artist}>{songs[songIndex].artist}</Text>
        </View>

        <View>
          <Slider
            style={styles.progressContainer}
            value={10}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor={colors.color3}
            minimumTrackTintColor={colors.color3}
            maximumTrackTintColor="black"
            onSlidingComplete={() => {}}
          />
        </View>

        <View style={styles.progressLabelContainer}>
          <Text style={styles.progressLabelTxt}>0:00</Text>
          <Text style={styles.progressLabelTxt}>3:50</Text>
        </View>

        <View style={styles.musicControls}>
          <TouchableOpacity onPress={skipToPrevious}>
            <Ionicons
              name="play-skip-back-outline"
              size={35}
              color={colors.color3}
              style={{marginTop: 15}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="ios-pause-circle" size={55} color={colors.color3} />
          </TouchableOpacity>
          <TouchableOpacity onPress={skipToNext}>
            <Ionicons
              name="play-skip-forward-outline"
              size={35}
              color={colors.color3}
              style={{marginTop: 15}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

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
    justifyContent: 'center',
    alignItems: 'center',
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
  artworkWrapper: {
    width: 250,
    height: 250,
    marginBottom: 10,
    marginTop: 10,
    elevation: 5,
  },
  artworkImg: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.color2,
  },
  artist: {
    fontSize: 16,
    fontWeight: '200',
    textAlign: 'center',
    color: colors.color1,
  },
  progressContainer: {
    width: 320,
    height: 40,
    marginTop: 0,
    flexDirection: 'row',
  },
  progressLabelContainer: {
    width: 320,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabelTxt: {
    color: colors.color2,
  },
  musicControls: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
    marginTop: -10,
    marginBottom: 20,
  },
});

export default MusicScreen;

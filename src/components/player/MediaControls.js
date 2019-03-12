import React from 'react';
import { View, Text, Slider, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default MediaControls = ({
  title,
  artist,
  paused,
  maximumValue,
  seekPosition,
  onPressPlay,
  onPressPause,
  onForward,
  onBack,
  minimumTrackTintColor,
  maximumTrackTintColor
}) => {

  let middleButton;
  if (paused) {
    middleButton = (
      <TouchableOpacity onPress={onPressPlay} style={styles.touchIcons}>
        <View>
          <FontAwesomeIcon icon="play" size={styles.playPauseIcons.fontSize} />
        </View>
      </TouchableOpacity>
    );
  } else {
    middleButton = (
      <TouchableOpacity onPress={onPressPause} style={[styles.touchIcons]}>
        <View>
          <FontAwesomeIcon icon="pause" size={styles.playPauseIcons.fontSize} />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.infoWrp}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.artistName}>{artist}</Text>
      </View>
      <View>
        <Slider
          minimumValue={0.00}
          step={0.01}
          value={seekPosition}
          maximumValue={maximumValue}
          minimumTrackTintColor={minimumTrackTintColor}
          maximumTrackTintColor={maximumTrackTintColor}
        />
      </View>
      <View style={styles.controlsWrp}>
        <TouchableOpacity onPress={onBack} style={[styles.touchIcons, styles.touchIconsSmall]}>
          <FontAwesomeIcon icon="step-backward" size={styles.backForwardIcons.fontSize} />
        </TouchableOpacity>
        
        {middleButton}
        
        <TouchableOpacity onPress={onForward} style={[styles.touchIcons, styles.touchIconsSmall]}>
          <FontAwesomeIcon icon="step-forward" size={styles.backForwardIcons.fontSize} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15
  },
  infoWrp: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center'
  },
  sliderWrp: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  controlsWrp: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20
  },
  touchIcons: {
    height: 50,
    width: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  touchIconsSmall: {
    height: 30,
    width: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  artistName: {
    fontSize: 24,
    fontWeight: '300',
    textAlign: 'center'
  },
  playPauseIcons: {
    fontSize: 38
  },
  backForwardIcons: {
    fontSize: 25
  }
});

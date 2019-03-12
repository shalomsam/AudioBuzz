import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import MediaControls from './MediaControls';

export default class Player extends Component {

  constructor(props) {
    super(props);

    this.state = {
      paused: false,
      trackLength: 1.00,
      tracks: props.tracks || [],
      seekPosition: 0.00,
      selectedTrackIndex: props.selectedTrackIndex || 0,
      selectedTrack: props.track || props.tracks[props.selectedTrackIndex] || null,
    }
  }

  handleError = (error) => {
    console.error(error.message || 'error >>' + JSON.stringify(error));
  }

  handleBuffer = (data) => {
    console.log("buffer >>", data);
  }

  setDuration = ({ duration }) => {
    this.setState({ trackLength: Math.floor(duration) });
  }

  setProgress = ({ currentTime }) => {
    this.setState({ seekPosition: Math.floor(currentTime) });
  }

  onPause = () => {
    this.setState({ paused: true });
    console.log(this.state.paused);
  }

  onPlay = () => {
    this.setState({ paused: false });
  }

  renderPlayer = () => {
    let poster = '';
    const { selectedTrack, paused, trackLength, seekPosition } = this.state;
    const source = {uri: (selectedTrack.embed.youtube || null) };

    return (
      <View style={styles.container}>
        <View style={styles.videoWrp}>
          <Video
            source={source}
            ref={(ref) => {
              this.player = ref
            }}
            onBuffer={this.handleBuffer}
            onError={this.handleError}
            paused={paused}
            onLoad={this.setDuration}
            onProgress={this.setProgress}
            style={styles.video}
          />
        </View>
        <View>
          <MediaControls
            title={selectedTrack.title}
            artist={selectedTrack.artist.name}
            paused={paused}
            maximumValue={trackLength}
            seekPosition={seekPosition}
            onPressPause={this.onPause}
            onPressPlay={this.onPlay}
          />
        </View>
      </View>
    )
  }

  render() {
    
    const { selectedTrack } = this.state;
    
    if (selectedTrack !== null) {
      if (selectedTrack.thumbnails.hasOwnProperty('high')) {
        poster = selectedTrack.thumbnails.high.url;
      } else if (selectedTrack.thumbnails.hasOwnProperty('default')) {
        poster = selectedTrack.thumbnails.default.url;
      } else {
        poster = <FontAwesomeIcon icon="music" />
      }

      return this.renderPlayer();
    } else {
      return (
        <View>
          <Text>No Source</Text>
        </View>
      )
    }
    
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1'
  },
  videoWrp: {
    // width: '100%',
    backgroundColor: '#333',
    height: 350,
    flexDirection: 'column'
  },
  video: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  mediaControlsWrp: {
    flex: 3
  }
})

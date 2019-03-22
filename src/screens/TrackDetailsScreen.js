import React, { Component } from 'react';
import { View, Image, Text, Linking, TouchableOpacity, Platform } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { colors } from '../theme';
import Header from '../components/ui/Header';
import { TrackDetailsStyle as styles } from '../styles';
import YouTube from 'react-native-youtube';
import { REACT_APP_YOUTUBE_API } from 'react-native-dotenv';

export default class TrackDetailsScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tracks: props.navigation.getParam('tracks') || [],
      selectedTrack: props.navigation.getParam('selectedTrack') || null,
      selectedTrackIndex: props.navigation.getParam('selectedTrackIndex') || null,
      embed: false,
      library: null,
      linkOpened: false,
    }
  }

  extractFromTrack = () => {
    const track = this.state.selectedTrack;
    let embed = false;
    let url;
    let library = 'youtube';
    if (track.hasOwnProperty('embed') && track.embed.hasOwnProperty('youtube')) {
      url = track.embed.youtube.url;
      embed = true;
    } else {
      const libraries = Object.keys(track.links);
      library = libraries[0];
      url = track.links[library];
    }

    return { url, library, embed }
  }

  onError = (e) => {
    console.log('YT Error >>', e);
  }

  renderYoutube = () => {
    process.env.REACT_APP_YOUTUBE_API = REACT_APP_YOUTUBE_API || process.env.REACT_APP_YOUTUBE_API;

    const youtubeStyles = Platform.OS === 'ios' ? styles.youtubeStyleIOS : styles.youtubeStyle;
    return (
      <YouTube
        videoId={this.state.selectedTrack.youtubeId}
        origin="http://www.youtube.com"
        apiKey={process.env.REACT_APP_YOUTUBE_API}
        controls={1}
        play={true}
        onError={this.onError}
        style={youtubeStyles}
      />
    )
  }

  renderThumbnail = () => {
    const track = this.state.selectedTrack;
    let thumbType = null;
    let thumbnail;
    if (track.hasOwnProperty('thumbnails')) {
      if (track.thumbnails.hasOwnProperty('medium')) {
        thumbType = 'medium'
      } else if (track.thumbnails.hasOwnProperty('default')) {
        thumbType = 'default'
      }
    }

    if (thumbType !== null) {
      thumbnail = <Image
        resizeMode='cover'
        source={{ uri: track.thumbnails[thumbType].url }}
        style={styles.thumbnail}
      />;
    } else {
      thumbnail = <FontAwesomeIcon icon="music" size={45} color={colors.white} />
    }

    return thumbnail;
  }

  renderLinks = () => {
    const track = this.state.selectedTrack;
    let links = [];
    links = Object.keys(track.links);
    links = links.map((key, index) => {
      return (
        <TouchableOpacity
          key={index}
          onPress={() => {
            Linking.openURL(track.links[key])
          }}
        >
          <View style={styles.link}>
            <FontAwesomeIcon icon="play-circle" size={styles.linkIcon.fontSize} style={styles.linkIcon} />
            <Text style={styles.linkText}>{key}</Text>
          </View>
        </TouchableOpacity>
      )
    });

    return (
      <View style={styles.linksWrp}>
        {links}
      </View>
    );
  }

  onBack = () => {
    if (this.state.selectedTrackIndex !== 0) {
      const index = this.state.selectedTrackIndex - 1;
      const track = this.state.tracks[index];
      this.setState({ selectedTrackIndex: index, selectedTrack: track });
    }
  }

  onForward = () => {
    if (this.state.selectedTrackIndex !== (this.state.tracks.length - 1)) {
      const index = this.state.selectedTrackIndex + 1;
      const track = this.state.tracks[index];
      this.setState({ selectedTrackIndex: index, selectedTrack: track });
    }
  }

  render() {
    const track = this.state.selectedTrack;
    const headerStyle = Platform.OS === 'ios' ? [styles.headerStyle, styles.headerStyleIOS] : styles.headerStyle;
    return (
      <View style={styles.container}>
        <Header
          leftIconPress={() => this.props.navigation.goBack()}
          leftIcon='caret-square-left'
          style={headerStyle}
        />
        <View style={styles.thumbnailWrp}>
          {
            track.hasOwnProperty('youtubeId') ?
              this.renderYoutube() :
              this.renderThumbnail()
          }
        </View>
        <View>
          <View style={styles.infoContainer}>
            <View style={styles.infoWrp}>
              <Text style={styles.title}>{track.title}</Text>
              <Text style={styles.artistName}>{track.artist.name}</Text>
            </View>
          </View>
          <View style={styles.controlsWrp}>
            <TouchableOpacity onPress={this.onBack} style={[styles.touchIcons, styles.touchIconsSmall]}>
              <FontAwesomeIcon icon="step-backward" size={styles.backForwardIcons.fontSize} />
            </TouchableOpacity>

            {this.renderLinks()}

            <TouchableOpacity onPress={this.onForward} style={[styles.touchIcons, styles.touchIconsSmall]}>
              <FontAwesomeIcon icon="step-forward" size={styles.backForwardIcons.fontSize} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

}

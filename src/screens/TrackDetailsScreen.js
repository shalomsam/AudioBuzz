import React, { Component } from 'react';
import { View, Image, Text, Linking, TouchableOpacity, Platform } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { colors } from '../theme';
import Header from '../components/ui/Header';
import { TrackDetailsStyle as styles } from '../styles'

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

  componentDidMount() {
    const { url, library, embed } = this.getTrackUrl();

    Linking.canOpenURL(url)
      .then((canOpen) => {
        if (canOpen) {
          Linking.openURL(url);
          this.setState({ linkOpened: true });
        } else {
          this.setState({ library, embed });
        }
      });
  }

  getTrackUrl = () => {
    const track = this.state.selectedTrack;
    let target;
    let embed = false;
    if (track.hasOwnProperty('embed')) {
      target = track.embed;
      embed = true;
    } else {
      target = track.links;
    }

    const keys = Object.keys(target);
    const library = keys[0];
    let url = target[library];

    if (typeof url === 'object') {
      url = url.url;
    }
    return { url, library, embed };
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
    if (this.state.trackIndex !== 0) {
      const index = this.state.trackIndex - 1;
      const track = this.state.tracks[index];
      this.setState({ trackIndex: index, track: track });
    }
  }

  onForward = () => {
    if (this.state.trackIndex !== (this.state.tracks.length - 1)) {
      const index = this.state.trackIndex + 1;
      const track = this.state.tracks[index];
      this.setState({ trackIndex: index, track: track });
    }
  }

  render() {
    const track = this.state.selectedTrack;
    const headerStyle = Platform.OS === 'ios' ? styles.headerStyleIOS : styles.headerStyle;
    return (
      <View style={styles.container}>
        <Header
          leftIconPress={() => this.props.navigation.goBack()}
          leftIcon='caret-square-left'
          style={headerStyle}
        />
        <View style={styles.thumbnailWrp}>
          {this.renderThumbnail(track)}
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

            {this.renderLinks(track)}

            <TouchableOpacity onPress={this.onForward} style={[styles.touchIcons, styles.touchIconsSmall]}>
              <FontAwesomeIcon icon="step-forward" size={styles.backForwardIcons.fontSize} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

}

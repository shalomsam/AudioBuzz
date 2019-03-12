import React, { Component } from 'react';
import { View, Image, Text, Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { colors } from '../../theme';

export default class TrackDetailsView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tracks: props.tracks || [],
      trackIndex: props.trackIndex || 0,
      track: props.track || null,
    }
  }


  renderThumbnail = (track) => {
    let thumbType = null;
    let thumbnail;
    if (track.hasOwnProperty('thumbnail')) {
      if (track.thumbnails.hasOwnProperty('medium')) {
        thumbType = 'medium'
      } else if (track.thumbnails.hasOwnProperty('default')) {
        thumbType = 'default'
      }
    }

    if (thumbType !== null) {
      console.log("thumbnail >>", track.thumbnails[thumbType].url);
      thumbnail = <Image 
        resizeMode='cover'
        source={{ uri: track.thumbnails[thumbType].url }}
        style={{
          height: '100%',
          width: '100%'
        }}
      />;
    } else {
      thumbnail = <FontAwesomeIcon icon="music" size={45} color={colors.white} />
    }

    return thumbnail;
  }

  renderLinks = (track) => {
    let links = [];
    links = Object.keys(track.links);
    links = links.map((key, index) => {
      return (
        <TouchableOpacity 
          key={index}
          onPress={() => {
            console.log("Link >> ", track.links[key]);
            Linking.openURL(track.links[key])
          }}
        >
          <View style={styles.link}>
            <FontAwesomeIcon icon="play-circle" size={16} style={{ marginRight: 5, color: colors.white }} />
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
      this.setState({trackIndex: index, track: track});
    }
  }

  onForward = () => {
    if (this.state.trackIndex !== (this.state.tracks.length - 1)) {
      const index = this.state.trackIndex + 1;
      const track = this.state.tracks[index];
      this.setState({trackIndex: index, track: track});
    }
  }

  render() {
    const { track } = this.state;
    return (
      <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1'
  },
  thumbnailWrp: {
    backgroundColor: '#333',
    height: 350,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoContainer: {
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
  },
  linksWrp: {
    flexDirection: 'row',
    width: 280,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  link: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#007bff',
  },
  linkText: {
    color: colors.white
  }
})

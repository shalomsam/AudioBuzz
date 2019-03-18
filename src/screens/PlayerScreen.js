import React, { Component } from 'react';
import { View, Linking } from 'react-native';
import { connect } from 'react-redux';
import TrackDetailsView from '../components/views/TrackDetailsView';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { colors } from '../theme';

class PlayerScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Track Details',
      headerLeft: <FontAwesomeIcon
        icon="caret-square-left"
        onPress={() => { navigation.goBack() }}
        size={20}
        color={colors.white}
        style={{ marginLeft: 10 }}
      />
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      tracks: [],
      selectedTrack: null,
      selectedTrackIndex: null,
      embed: false,
      library: null,
      linkOpened: false,
    }
  }

  componentWillMount() {
    const tracks = this.props.navigation.getParam('tracks');
    const selectedTrack = this.props.navigation.getParam('selectedTrack');
    const selectedTrackIndex = this.props.navigation.getParam('selectedTrackIndex');
    this.setState({ tracks, selectedTrack, selectedTrackIndex });

    const { url, library, embed } = this.getTrackUrl(selectedTrack);

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

  getTrackUrl = (track) => {
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

  renderDetails = () => {
    console.log('pp >>', this.props)
    return <TrackDetailsView
      track={this.state.selectedTrack}
      tracks={this.state.tracks}
      trackIndex={this.state.selectedTrackIndex}
      navigation={this.props.navigation}
    />
  }

  render() {
    return this.renderDetails();
  }
}

// const mapStateToProps = (state) => {
//   const { library, location, tracks } = state.tracks;
//   return {
//     library,
//     location,
//     tracks
//   }
// }

// export default connect(mapStateToProps, null)(PlayerScreen);

export default PlayerScreen;

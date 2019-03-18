import React, { Component } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { LoadingView } from '../components/views/LoadingView';
import { TrackView } from '../components/views/TrackView';
import { tracksFetch } from '../actions';
import { libraryToIconName, libraryToName } from '../utils';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Header from "../components/ui/Header";
import images from '../assets/images';

class TracksScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const library = navigation.getParam('library');
    let icon = <FontAwesomeIcon icon={libraryToIconName(library)} />;

    if (library === 'mixed') {
      icon = <Image source={images.cassette} style={{ height: 20, width: 20 }} />
    }

    return {
      drawerIcon: icon
    };
  }

  componentDidMount() {
    const library = this.props.navigation.getParam('library') || 'mixed';
    this.props.tracksFetch(library);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const library = nextProps.navigation.state.params.library;

    if (nextProps !== this.props) {
      if (nextProps.navigation.state.params.library !== this.props.library) {
        this.props.tracksFetch(library);
      }

      return true;
    }

    return false;
  }

  renderLoading() {
    return (
      <LoadingView />
    );
  }

  renderTracks() {
    return (
      <View>
        <Header
          title={libraryToName(this.props.navigation.state.params.library, this.props.location)}
          navigation={this.props.navigation}
        />
        <View>
          <FlatList
            contentContainerStyle={styles.containerStyle}
            data={this.props.tracks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('PlayerScreen', {
                    tracks: this.props.tracks,
                    selectedTrack: item,
                    selectedTrackIndex: index
                  });
                }}>
                  <TrackView track={item} rank={index + 1} />
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </View>
    )
  }

  render() {
    if (this.props.tracks.length === 0) {
      return this.renderLoading();
    }

    return this.renderTracks();
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15
  }
});

const mapStateToProps = (state) => {
  const { library, location, tracks } = state.tracks;
  return {
    library,
    location,
    tracks
  }
}

const mapDispatchToProps = {
  tracksFetch
}

export default connect(mapStateToProps, mapDispatchToProps)(TracksScreen);

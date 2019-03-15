import React, { Component } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { LoadingView } from '../components/views/LoadingView';
import { TrackView } from '../components/views/TrackView';
import { tracksFetch } from '../actions';
import { libraryToIconName } from '../utils';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

class TracksScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const library = navigation.getParam('library');

    return {
      drawerIcon: <FontAwesomeIcon icon={libraryToIconName(library)} />
    };
  }

  componentDidMount() {
    const library = this.props.navigation.getParam('library') || 'mixed';
    this.props.tracksFetch(library);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const library = nextProps.navigation.state.params.library;

    // if (nextProps.navigation.state.params.library !== this.props.library) {
    //   this.props.tracksFetch(library);
    // }
    // return true;

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
        <FlatList 
          contentContainerStyle={styles.containerStyle} 
          data={this.props.tracks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity onPress={()=>{
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

import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Thumbnail from '../thumbnail/Thumbnail';

class TrackView extends PureComponent {

  render() {
    const { track, rank } = this.props;
    let imgSrc = null;

    if (track.hasOwnProperty('thumbnails')) {
      if (track.thumbnails.hasOwnProperty('medium')) {
        imgSrc = track.thumbnails.medium.url;
      } else if (track.thumbnails.hasOwnProperty('default')) {
        imgSrc = track.thumbnails.default.url;
      }
    }

    return (
      <View style={styles.box}>
        <View style={[styles.rankWrp, styles.col]}>
          <Text style={styles.rank}>{rank}</Text>
        </View>
        <View style={styles.col}>
          <Thumbnail
            resizeMode='cover'
            source={{ uri: imgSrc }}
            style={styles.img}
          />
        </View>
        <View style={[styles.col, styles.detailsWrp]}>
          <Text style={styles.title}>{track.title}</Text>
          <Text>{track.artist.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d6d7da',
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    height: '100%'
  },
  col: {
    height: '100%'
  },
  img: {
    height: 75,
    width: 75
  },
  rankWrp: {
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  rank: {
    fontSize: 32,
    fontWeight: '800',
    width: 40,
    textAlign: 'center'
  },
  detailsWrp: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    width: 240
  },
  title: {
    fontWeight: '800',
    fontSize: 18
  }
});

export { TrackView };

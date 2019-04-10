import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
          <Text numberOfLines={2} style={styles.title}>{track.title}</Text>
          <Text numberOfLines={1}>{track.artist.name}</Text>
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
    paddingLeft: 5,
    paddingRight: 5,
  },
  rank: {
    fontSize: 28,
    fontWeight: '300',
    width: 50,
    textAlign: 'center',
    flexWrap: 'nowrap'
  },
  detailsWrp: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    width: 200
  },
  title: {
    fontWeight: '800',
    fontSize: 14
  }
});

export { TrackView };

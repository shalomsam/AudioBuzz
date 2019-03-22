import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Thumbnail from '../thumbnail/Thumbnail';
import { TrackViewStyles as styles } from '../../styles';

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
          <Text>{track.artist.name}</Text>
        </View>
      </View>
    );
  }
}

export { TrackView };

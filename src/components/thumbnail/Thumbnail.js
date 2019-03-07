import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { theme, colors } from '../../theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Thumbnail = (props) => {

  let image = '';
  let parentStyles = [styles.thumbnail];

  if (props.source.uri === null) {
    parentStyles.push(props.style);
    parentStyles.push(styles.active);
    image = <FontAwesomeIcon icon="music" color={colors.white} size={styles.icon.fontSize} />
  } else {
    image = <Image {...props} />
  }

  return (
    <View style={parentStyles}>
      {image}
    </View>
  )
}

const styles = StyleSheet.create({
  thumbnail: {
    backgroundColor: theme.thumbnailBgColor
  },
  active: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  icon: {
    fontSize: 28
  }
})

export default Thumbnail;

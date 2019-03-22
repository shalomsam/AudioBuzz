import React from 'react';
import { View, Image, Text } from 'react-native';
import { DrawerItems } from 'react-navigation';
import images from '../../assets/images';
import { DrawerStyles as styles } from '../../styles';

export default Drawer = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrp}>
        <Image
          source={images.turntable}
          style={styles.icon}
        />
        <Text>MusicTrends</Text>
      </View>
      <View style={styles.itemsWrp}>
        <DrawerItems {...props} />
      </View>
    </View>
  )
}

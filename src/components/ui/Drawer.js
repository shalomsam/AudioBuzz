import React from 'react';
import { View, Image, Text } from 'react-native';
import { DrawerItems } from 'react-navigation';
import images from '../../assets/images';

export default Drawer = (props) => {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={images.turntable}
          style={{ marginTop: 10 }}
        />
        <Text>AudioBuzz</Text>
      </View>
      <View style={{ flex: 6 }}>
        <DrawerItems {...props} />
      </View>
    </View>
  )
}

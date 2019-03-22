import { StyleSheet, Platform } from 'react-native';

const paddingBottom = Platform.OS === 'android' ? 90 : 1;

export const TracksScreenStyles = StyleSheet.create({
  wrp: {
    paddingBottom: paddingBottom
  },
  containerStyle: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 50
  }
})

import { StyleSheet } from 'react-native';
import { colors } from '../theme';

export const Navigation = StyleSheet.create({
  leftIconWrp: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 10
  },
  leftIcon: {
    fontSize: 20,
    color: colors.white
  },
  title: {
    color: colors.white,
    fontSize: 20,
  },
});

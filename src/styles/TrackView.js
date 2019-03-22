import { StyleSheet } from 'react-native';
import { theme } from '../theme';

export const TrackViewStyles = StyleSheet.create({
  box: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.borderColor,
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    height: '100%',
    backgroundColor: theme.boxBg
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
    fontSize: 26,
    fontWeight: '300',
    width: 50,
    textAlign: 'center',
  },
  detailsWrp: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 7,
    paddingBottom: 7,
    width: 200
  },
  title: {
    fontWeight: '800',
    fontSize: 17
  }
})

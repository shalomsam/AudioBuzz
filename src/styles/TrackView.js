import { StyleSheet } from 'react-native';

export const TrackViewStyles = StyleSheet.create({
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
    paddingLeft: 7,
    paddingRight: 7,
  },
  rank: {
    fontSize: 28,
    fontWeight: '800',
    width: 46,
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

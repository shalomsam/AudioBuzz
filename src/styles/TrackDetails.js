import { StyleSheet } from 'react-native';
import { colors } from '../theme';

export const TrackDetailsStyle = StyleSheet.create({
  headerStyle: {
    // position: 'absolute',
    // zIndex: 1,
    // backgroundColor: 'transparent',
    height: 50,
    width: '100%'
  },
  headerStyleIOS: {
    height: 90
  },
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1'
  },
  youtubeStyle: {
    alignSelf: 'stretch',
    height: 300,
  },
  youtubeStyleIOS: {
    alignSelf: 'flex-end',
    height: 300,
    width: '100%',
    top: 20
  },
  thumbnailWrp: {
    backgroundColor: '#333',
    height: 350,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  thumbnail: {
    height: '100%',
    width: '100%'
  },
  infoContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15
  },
  infoWrp: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  artistName: {
    fontSize: 24,
    fontWeight: '300',
    textAlign: 'center'
  },
  controlsWrp: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20
  },
  touchIcons: {
    height: 50,
    width: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  touchIconsSmall: {
    height: 30,
    width: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  artistName: {
    fontSize: 24,
    fontWeight: '300',
    textAlign: 'center'
  },
  playPauseIcons: {
    fontSize: 38
  },
  backForwardIcons: {
    fontSize: 25
  },
  linksWrp: {
    flexDirection: 'row',
    width: 280,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  link: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#007bff',
  },
  linkIcon: {
    fontSize: 16,
    marginRight: 5,
    color: colors.white
  },
  linkText: {
    color: colors.white
  }
});

import TracksScreen from './screens/TracksScreen';

export default Routes = {
  Home: {
    screen: TracksScreen,
    params: {
      library: 'mixed'
    }
  },
  AppleMusic: {
    screen: TracksScreen,
    params: {
      library: 'applemusic'
    }
  },
  LastFm: {
    screen: TracksScreen,
    params: {
      library: 'lastfm'
    }
  },
  Spotify: {
    screen: TracksScreen,
    params: {
      library: 'spotify'
    }
  },
  YouTube: {
    screen: TracksScreen,
    params: {
      library: 'youtube'
    }
  }
};

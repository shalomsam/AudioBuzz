import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import TracksScreen from './screens/TracksScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { libraryToName } from './utils';
import { colors } from './theme';

const routes = {
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

const routeOptions = {
  defaultNavigationOptions: ({navigation}) => {
    const library = navigation.getParam('library') || 'mixed';
    return {
      title: libraryToName(library),
      headerStyle: {
        backgroundColor: '#343a40',
      },
      headerLeft: <FontAwesomeIcon 
        icon="bars" 
        onPress={() => {navigation.toggleDrawer()} } 
        size={20}
        color={colors.white}
      />,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff'
      }
    }
  },
  headerLayoutPreset: 'center',
};

const DrawerStack = createDrawerNavigator(routes, {
  initialRouteName: 'Home',
  drawerWidth: 300
});

const RouteStack = createStackNavigator({
  DrawerStack: {
    screen: DrawerStack
  }
}, routeOptions);

export default createAppContainer(RouteStack);

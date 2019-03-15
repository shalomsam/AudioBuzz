import React from 'react';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import TracksScreen from './screens/TracksScreen';
import PlayerScreen from './screens/PlayerScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { libraryToName } from './utils';
import { colors } from './theme';
import Routes from './Routes';

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
        style={{marginLeft: 10}}
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

const DrawerStack = createDrawerNavigator(Routes, {
  initialRouteName: 'Home',
  drawerWidth: 300
});

const RouteStack = createStackNavigator({
  DrawerStack: {
    screen: DrawerStack
  },
  PlayerScreen: {
    screen: PlayerScreen
  }
}, routeOptions);

export default createAppContainer(RouteStack);

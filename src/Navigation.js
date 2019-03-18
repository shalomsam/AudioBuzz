import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import PlayerScreen from './screens/PlayerScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { libraryToName } from './utils';
import { colors } from './theme';
import Routes from './Routes';
import { Navigation } from './styles';
import Drawer from './components/ui/Drawer';

const DrawerStack = createDrawerNavigator(Routes, {
  initialRouteName: 'Home',
  drawerWidth: 300,
  unmountInactiveRoutes: true,
  contentComponent: (props) => (
    <Drawer {...props} />
  )
});

const RouteStack = createStackNavigator(
  {
    DrawerStack: {
      screen: DrawerStack
    },
    PlayerScreen: {
      screen: PlayerScreen
    }
  },
  {
    headerMode: 'none'
  });

export default createAppContainer(RouteStack);

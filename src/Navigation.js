import React from 'react';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import Routes from './Routes';
import Drawer from './components/ui/Drawer';
import TrackDetailsScreen from './screens/TrackDetailsScreen';

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
    TrackDetails: {
      screen: TrackDetailsScreen
    }
  },
  {
    headerMode: 'none'
  });

export default createAppContainer(RouteStack);

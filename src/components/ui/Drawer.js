import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { DrawerItems, NavigationActions } from 'react-navigation';

const Drawer = (props) => {
  return (
    <View>
      <ScrollView>
        <DrawerItems 
          {...props}
          onItemPress={(route, focus) => {
            console.log('route >>', route);
            console.log('routes >>', props.routes);

            // console.log('params', props.routes[route.route.key].params);
            props.onItemPress(route, focus);
            NavigationActions.setParams(props.routes[route.route.key].params);
          }}
        /> 
      </ScrollView>
    </View>
  )
}

export default Drawer;

import React, { Component } from 'react';
import { View, StatusBar }  from 'react-native';
import Reducers from './reducers';
import Routes from './Routes';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { theme } from './theme';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faYoutube, faItunesNote, faLastfm, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faMusic, faBars, faPlay, faPause, faStepForward, faStepBackward, faBackward, faPlayCircle, faCaretSquareLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faMusic, faBars, faPlay, faPause, faStepForward, faStepBackward, faYoutube, faItunesNote, faLastfm, faSpotify, faBackward, faPlayCircle, faCaretSquareLeft);

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

export default class App extends Component {
  render() {
    const store = createStore(Reducers, applyMiddleware(thunk));

    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle='light-content' backgroundColor={theme.headerBgColor} />
          <Routes />
        </View>
      </Provider>
    );
  }
}

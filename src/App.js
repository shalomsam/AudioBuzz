import React, { Component } from 'react';
import { View, StatusBar, Platform } from 'react-native';
import Reducers from './reducers';
import Navigation from './Navigation';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { theme } from './theme';
import codePush from "react-native-code-push";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faYoutube, faItunesNote, faLastfm, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faMusic, faBars, faPlay, faPause, faStepForward, faStepBackward, faBackward, faPlayCircle, faCaretSquareLeft, faTimes } from '@fortawesome/free-solid-svg-icons';

import { enableFontPatch, configure } from './utils';

enableFontPatch();
configure();

library.add(faMusic, faBars, faPlay, faPause, faStepForward, faStepBackward, faYoutube, faItunesNote, faLastfm, faSpotify, faBackward, faPlayCircle, faCaretSquareLeft, faTimes);

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

class App extends Component {

  constructor(props) {
    super(props);
    const CODEPUSH_KEY = Platform.OS === 'android' ? process.env.CODEPUSH_KEY_ANDROID : process.env.CODEPUSH_KEY_IOS;
    console.log('Using CodePush Key: ', CODEPUSH_KEY);
    codePush.sync({ deploymentKey: CODEPUSH_KEY, mandatoryInstallMode: codePush.InstallMode.ON_NEXT_RESUME });
  }

  render() {
    const store = createStore(Reducers, applyMiddleware(thunk));

    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle='light-content' backgroundColor={theme.headerBgColor} />
          <Navigation />
        </View>
      </Provider>
    );
  }
}

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_START };
export default codePush(codePushOptions)(App);

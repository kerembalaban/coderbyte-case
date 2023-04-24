import React, {useContext} from 'react';
import {WebView} from 'react-native-webview';
import {AuthContext} from '../context/appContext';

const WebviewScreen = () => {
  const {userState} = useContext(AuthContext);
  return <WebView source={{uri: userState.website}} />;
};

export default WebviewScreen;

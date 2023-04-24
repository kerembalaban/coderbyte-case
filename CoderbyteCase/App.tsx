/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext, initialState} from './src/context/appContext';
import {UserState} from './src/types/userTypes';
import Navigator from './src/navigation/navigator';

const App = () => {
  const [userState, setUserState] = useState<UserState>(initialState);

  return (
    <AuthContext.Provider value={{userState, setUserState}}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;

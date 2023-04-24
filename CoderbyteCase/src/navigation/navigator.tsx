import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from '../screens/SignupScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import WebviewScreen from '../screens/Webview';
import {strings} from '../constants/strings';

export type RootStackParamList = {
  Signup: undefined;
  Confirmation: undefined;
  Webview: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          title: strings.signUpTitle,
        }}
      />
      <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      <Stack.Screen name="Webview" component={WebviewScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;

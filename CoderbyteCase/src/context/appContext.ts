import {UserState} from './../types/userTypes';
import React, {createContext} from 'react';

interface AuthContextType {
  userState: UserState;
  setUserState: React.Dispatch<React.SetStateAction<UserState>>;
}

export const initialState: UserState = {
  email: '',
  password: '',
  firstName: '',
  website: 'https://google.com',
  avatar: null,
};

export const AuthContext = createContext<AuthContextType>({
  userState: initialState,
  setUserState: () => {},
});

import {StackNavigationProp} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {
  Text,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Button from '../components/Button';
import {FormInput} from '../components/FormInput';
import {strings} from '../constants/strings';
import {AuthContext} from '../context/appContext';
import {RootStackParamList} from '../navigation/navigator';
import {UserState} from '../types/userTypes';
import AvatarPicker from '../components/AvatarPicker';
import {isValidEmail, isValidPassword, isValidUrl} from '../utils/helpers';
import {colors} from '../constants/colors';
import {useNavigation} from '@react-navigation/native';

type SignupScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Signup'
>;

const SignupScreen = () => {
  const {userState, setUserState} = useContext(AuthContext);
  const navigation = useNavigation<SignupScreenNavigationProp>();

  const handleSignup = () => {
    if (!isValidEmail(userState.email)) {
      Alert.alert(strings.validEmailError);
      return;
    }
    if (userState.website !== '' && !isValidUrl(userState.website)) {
      Alert.alert(strings.validUrlError);
      return;
    }
    if (!isValidPassword(userState.password)) {
      Alert.alert(strings.validPasswordError);
      return;
    }

    navigation.navigate('Confirmation');
  };

  const handleAvatarChange = (uri: string) => {
    setUserState({...userState, avatar: uri});
  };

  const handleInputChange = (field: keyof UserState, value: string) => {
    setUserState({...userState, [field]: value});
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}>
      <ScrollView
        contentContainerStyle={styles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always">
        <Text> {strings.signUpHelpText}</Text>
        <AvatarPicker onAvatarChange={handleAvatarChange} />
        <FormInput
          label={strings.firstName}
          value={userState.firstName}
          onChangeText={(value: string) =>
            handleInputChange('firstName', value)
          }
        />
        <FormInput
          label={strings.email}
          value={userState.email}
          onChangeText={(value: string) => handleInputChange('email', value)}
        />
        <FormInput
          label={strings.password}
          value={userState.password}
          secureTextEntry={true}
          onChangeText={(value: string) => handleInputChange('password', value)}
        />
        <FormInput
          label={strings.website}
          value={userState.website}
          onChangeText={(value: string) => handleInputChange('website', value)}
        />
        <Button
          title={strings.signUp}
          onPress={handleSignup}
          disabled={!userState.email || !userState.password}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContentContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  helpText: {
    fontSize: 16,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.text,
    borderRadius: 4,
    padding: 8,
    marginVertical: 8,
    alignSelf: 'stretch',
    height: 54,
  },
});

export default SignupScreen;

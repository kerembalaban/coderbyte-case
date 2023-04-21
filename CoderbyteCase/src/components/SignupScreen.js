import React from 'react';
import {View, Text, TextInput, StyleSheet, Alert} from 'react-native';
import {Button} from './common/Button';
import ProfilePicture from './ProfilePicture';

const SignupForm = ({navigation}) => {
  const [name, setNameLocal] = React.useState('');
  const [email, setEmailLocal] = React.useState('');
  const [password, setPasswordLocal] = React.useState('');
  const [website, setWebsiteLocal] = React.useState('https://');
  const [response, setResponse] = React.useState();

  const handleSignup = () => {
    if (email === '' || password === '') {
      Alert.alert('Email and Passwords fields are required');
      return;
    }
    let imageUri = response?.assets
      ? response.assets.length > 0
        ? response.assets[0].uri
        : null
      : null;

    navigation.navigate('Confirmation', {
      name,
      email,
      website,
      imageUri,
    });
  };

  return (
    <View style={styles.container}>
      <Text>
        Use the for below to submit your portfolio. An email and password are
        required
      </Text>
      <ProfilePicture setResponse={setResponse} response={response} />
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={name}
        onChangeText={setNameLocal}
      />
      <TextInput
        style={styles.input}
        placeholder="Email*"
        value={email}
        onChangeText={setEmailLocal}
      />
      <TextInput
        style={styles.input}
        placeholder="Password*"
        value={password}
        onChangeText={setPasswordLocal}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="https://"
        value={website}
        onChangeText={setWebsiteLocal}
      />
      <Button title="Submit" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
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
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginVertical: 8,
    alignSelf: 'stretch',
    height: 54,
  },
});

export default SignupForm;

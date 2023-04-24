import {StackNavigationProp} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import {Avatar} from '../components/Avatar';
import Button from '../components/Button';
import {fonts} from '../constants/fonts';
import {strings} from '../constants/strings';
import {AuthContext} from '../context/appContext';
import {RootStackParamList} from '../navigation/navigator';

type ConfirmationScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Confirmation'
>;

type Props = {
  navigation: ConfirmationScreenNavigationProp;
};

const ConfirmationScreen = ({navigation}: Props) => {
  const {userState} = useContext(AuthContext);

  const handleOpenWebView = () => {
    navigation.navigate('Webview');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hi {userState.firstName}!!</Text>
      <Text style={styles.title}>{strings.signUpSuccess}</Text>
      {userState.avatar && <Avatar uri={userState.avatar} />}

      <Text style={styles.text}>{userState.firstName}</Text>
      <Text style={styles.text}>{userState.email}</Text>
      <Text
        style={styles.hyperlink}
        onPress={() => Linking.openURL(userState.website)}>
        {userState.website}
      </Text>
      {userState.website && (
        <Button title={strings.openWebsite} onPress={handleOpenWebView} />
      )}
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
    marginTop: 16,
    fontSize: fonts.large,
    alignSelf: 'flex-start',
  },
  title: {
    marginTop: 16,
    fontSize: fonts.medium,
    alignSelf: 'flex-start',
  },
  text: {
    borderRadius: 4,
    padding: 8,
    alignSelf: 'center',
  },
  hyperlink: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default ConfirmationScreen;

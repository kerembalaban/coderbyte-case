import React from 'react';
import {View, Text, StyleSheet, Linking, Image} from 'react-native';
import {Button} from './common/Button';

const ConfirmationScreen = ({route, navigation}) => {
  const {name, email, website, imageUri} = route.params;

  console.log(imageUri);

  const handleSignIn = () => {
    navigation.navigate('Webview', {url: website});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Hi {name}!! Your portfolio has been successfully submitted! The preview
        below is what the community will see
      </Text>
      {imageUri && (
        <Image style={{width: 120, height: 120}} source={{uri: imageUri}} />
      )}

      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{email}</Text>
      <Text style={styles.hyperlink} onPress={() => Linking.openURL(website)}>
        {website}
      </Text>
      <Button style={styles.button} title="Submit" onPress={handleSignIn} />
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
    margin: 16,
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
  button: {
    position: 'absolute',
    bottom: 20,
  },
});

export default ConfirmationScreen;

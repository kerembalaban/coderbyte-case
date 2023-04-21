import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

const ProfilePicture = props => {
  const {response, setResponse} = props;

  const handleSelect = React.useCallback(
    (type, options) => {
      if (type === 'capture') {
        ImagePicker.launchCamera(options, setResponse);
      } else {
        ImagePicker.launchImageLibrary(options, setResponse);
      }
    },
    [setResponse],
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSelect}>
        {response?.assets ? (
          <Image
            style={{width: 120, height: 120}}
            source={{uri: response.assets[0].uri}}
          />
        ) : (
          <Text style={styles.title}>Tap to add avatar</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'lightgray',
    marginVertical: 20,
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
  },
});

export default ProfilePicture;

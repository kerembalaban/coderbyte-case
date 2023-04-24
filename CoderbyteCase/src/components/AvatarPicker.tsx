import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Avatar} from './Avatar';
import {launchImageLibrary} from 'react-native-image-picker';
import {strings} from '../constants/strings';
import {colors} from '../constants/colors';

type Props = {
  onAvatarChange: (uri: string) => void;
};

let options: {
  selectionLimit: 0;
  mediaType: 'photo';
  includeBase64: false;
};

const AvatarPicker = ({onAvatarChange}: Props) => {
  const [avatar, setAvatar] = React.useState<string>();

  const handleSelect = async () => {
    const result = await launchImageLibrary(options);
    if (result?.assets && result?.assets.length > 0) {
      let uri = result.assets[0].uri;
      if (uri !== undefined) {
        setAvatar(uri);
        onAvatarChange(uri);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSelect}>
        {avatar && <Avatar uri={avatar} />}
        <Text style={styles.title}>{strings.avatarHelpText}</Text>
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
    backgroundColor: colors.background,
    marginVertical: 20,
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
  },
});

export default AvatarPicker;

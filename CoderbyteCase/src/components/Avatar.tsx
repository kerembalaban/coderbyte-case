import React from 'react';
import {Image, StyleSheet} from 'react-native';

type Props = {
  uri: string;
};

export const Avatar = ({uri}: Props) => {
  return <Image style={styles.avatar} source={{uri: uri}} />;
};

const styles = StyleSheet.create({
  avatar: {
    width: 120,
    height: 150,
    borderRadius: 10,
    marginTop: 16,
  },
});

import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export const Button = props => {
  const {title = '', onPress, style} = props;
  return (
    <TouchableOpacity
      {...props}
      onPress={onPress}
      activeOpacity={0.6}
      style={[styles.button, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 8,
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

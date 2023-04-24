import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../constants/colors';
import {fonts} from '../constants/fonts';

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

const Button = ({title, onPress, disabled = false}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, disabled ? styles.disabled : null]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.red,
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  title: {
    color: colors.background,
    fontSize: fonts.medium,
    fontWeight: 'bold',
  },
});

export default Button;

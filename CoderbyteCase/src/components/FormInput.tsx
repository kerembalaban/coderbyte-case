import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {colors} from '../constants/colors';
import {fonts} from '../constants/fonts';

interface FormInputProps extends TextInputProps {
  label: string;
  value: string;
  onChangeText(value: string): void;
}

export const FormInput = ({
  label,
  value,
  onChangeText,
  ...props
}: FormInputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={label}
      value={value}
      placeholderTextColor="gray"
      onChangeText={onChangeText}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    borderColor: colors.text,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
    fontSize: fonts.small,
  },
});

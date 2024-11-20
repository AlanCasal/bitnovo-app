import { View, Text, TextInput, ViewStyle, TextInputProps } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { LIGHT_GRAY_6, PRIMARY_BLUE } from '@/src/utils/common';

type Props = {
  value?: string;
  label?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  onChangeText: (value: string, name: string) => void;
  containerStyle?: ViewStyle;
  name: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  maxLength?: number;
  charactersAmount?: number;
} & TextInputProps;

const CustomTextInput = ({
  value,
  label,
  placeholder,
  placeholderTextColor = LIGHT_GRAY_6,
  onChangeText,
  containerStyle,
  name,
  iconLeft,
  iconRight,
  maxLength,
  charactersAmount,
  ...rest
}: Props) => {
  const containerStyles = {
    ...styles.container,
    ...containerStyle,
  };
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={containerStyles}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        {iconLeft && <View style={styles.iconLeft}>{iconLeft}</View>}
        <TextInput
          value={value}
          onChangeText={inputValue => onChangeText(inputValue, name)}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          cursorColor={PRIMARY_BLUE}
          {...rest}
        />
        {iconRight && <View style={styles.iconRight}>{iconRight}</View>}
      </View>
      {maxLength && isFocused && (
        <Text style={styles.maxLength}>
          {value?.length}/{maxLength} caracteres
        </Text>
      )}
    </View>
  );
};

export default CustomTextInput;

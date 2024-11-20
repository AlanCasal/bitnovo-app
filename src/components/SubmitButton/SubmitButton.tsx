import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import styles from './styles';
import { ImageSource, Image } from 'expo-image';
import Loader from '@/src/components/Loader';

type Props = {
  buttonText: string;
  handleOnPress: () => void;
  isDisabled?: boolean;
  customContainerStyle?: ViewStyle;
  customDisabledStyle?: ViewStyle;
  customTextStyle?: TextStyle;
  customDisabledTextStyle?: TextStyle;
  iconSource?: ImageSource;
  isLoading?: boolean;
  loaderSize?: number;
};

const SubmitButton = ({
  buttonText,
  handleOnPress,
  isDisabled = false,
  isLoading = false,
  loaderSize = 80,
  customContainerStyle,
  customDisabledStyle,
  customTextStyle,
  customDisabledTextStyle,
  iconSource,
}: Props) => {
  let containerStyle = { ...styles.container, ...customContainerStyle };
  const disabledStyle = { ...styles.disabled, ...customDisabledStyle };
  let textStyle = { ...styles.buttonText, ...customTextStyle };

  const handleOnPressAction = () => {
    Keyboard.dismiss();
    handleOnPress();
  };

  if (isDisabled || isLoading) {
    containerStyle = { ...containerStyle, ...disabledStyle };
    textStyle = { ...textStyle, ...customDisabledTextStyle };
  }

  return (
    <TouchableOpacity
      disabled={isDisabled || isLoading}
      onPress={handleOnPressAction}
    >
      <View style={containerStyle}>
        {isLoading ? (
          <Loader size={loaderSize} />
        ) : (
          <Text style={textStyle}>{buttonText}</Text>
        )}
        {!isLoading && iconSource && (
          <Image source={iconSource} style={styles.icon} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SubmitButton;

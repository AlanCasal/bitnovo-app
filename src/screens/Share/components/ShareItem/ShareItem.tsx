import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import { Image, ImageSource } from 'expo-image';

type Props = {
  iconSource: ImageSource;
  description: string;
  extraButton?: boolean;
  handleOnPress?: () => void;
  handleOnPressExtraButton?: () => void;
};

const ShareItem = ({
  description,
  iconSource = require('@/assets/icons/link.png'),
  extraButton = false,
  handleOnPress,
  handleOnPressExtraButton,
}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleOnPress}>
        <Image source={iconSource} style={styles.icon} contentFit='contain' />
        <Text
          style={styles.description}
          numberOfLines={1}
          ellipsizeMode='middle'
        >
          {description}
        </Text>
      </TouchableOpacity>
      {extraButton && (
        <TouchableOpacity onPress={handleOnPressExtraButton}>
          <View style={styles.extraButtonContainer}>
            <Image
              source={require('@/assets/icons/qr.png')}
              style={styles.qrIcon}
              contentFit='contain'
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ShareItem;

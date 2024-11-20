import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import { Image } from 'expo-image';
import { LIGHT_GRAY } from '@/src/utils/common';
import { Item } from '@/src/utils/fakeData';

type Props = {
  item: Item;
  handleOnPress: () => void;
  isSelected: boolean;
};

const SelectableItem = ({
  item: { title, description, image },
  handleOnPress,
  isSelected,
}: Props) => {
  let rightIcon;
  let containerStyle = styles.container;

  if (isSelected) {
    rightIcon = require('@/assets/icons/check-lightblue.png');
    containerStyle = {
      ...containerStyle,
      ...(isSelected && { backgroundColor: LIGHT_GRAY }),
    };
  } else {
    rightIcon = require('@/assets/icons/chevron-right.png');
  }

  return (
    <TouchableOpacity style={containerStyle} onPress={handleOnPress}>
      <View style={styles.itemInfoContainer}>
        <View>
          <Image source={image} style={styles.leftImage} />
        </View>
        <View>
          <Text style={styles.itemTitle}>{title}</Text>
          <Text style={styles.itemDescription}>{description}</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <Image source={rightIcon} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};

export default SelectableItem;

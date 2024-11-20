import React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import styles from './styles';
import { IS_IOS } from '@/src/utils/common';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  title?: string;
  leftElement?: React.ReactNode;
  centerElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  withBorderBottom?: boolean;
  containerStyle?: ViewStyle;
};

const Header = ({
  title,
  rightElement,
  centerElement,
  leftElement,
  withBorderBottom = true,
  containerStyle,
}: Props) => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={{
        ...styles.container,
        paddingTop: IS_IOS ? top : top + 10,
        ...(withBorderBottom && styles.containerBorderBottom),
        ...containerStyle,
      }}
    >
      <View style={styles.leftElementContainer}>{leftElement}</View>

      <View style={styles.titleContainer}>
        {title && <Text style={styles.title}>{title}</Text>}
        {centerElement && centerElement}
      </View>

      <View style={styles.rightElementContainer}>{rightElement}</View>
    </View>
  );
};

export default Header;

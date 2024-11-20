import {
  IS_IOS,
  IOS_SHADOW_COLOR,
  MULISH_400,
  PRIMARY_TEXT_COLOR,
  ANDROID_SHADOW_COLOR,
  LIGHT_GRAY_2,
} from '@/src/utils/common';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    minHeight: 60,
    padding: 14,
    borderRadius: 6,
    backgroundColor: LIGHT_GRAY_2,
    flexDirection: 'row',
    gap: 10,

    shadowColor: IS_IOS ? IOS_SHADOW_COLOR : ANDROID_SHADOW_COLOR,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    width: 16,
    height: 16,
  },
  text: {
    flex: 1,
    fontFamily: MULISH_400,
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'left',
    color: PRIMARY_TEXT_COLOR,
  },
});

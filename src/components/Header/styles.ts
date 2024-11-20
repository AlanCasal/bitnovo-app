import { StyleSheet } from 'react-native';
import {
  ANDROID_SHADOW_COLOR,
  IOS_SHADOW_COLOR,
  IS_IOS,
  MULISH_700,
  PRIMARY_TEXT_COLOR,
  WHITE,
} from '@/src/utils/common';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 17,
    paddingBottom: 17,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: WHITE,
  },
  containerBorderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: IOS_SHADOW_COLOR,
    shadowColor: IS_IOS ? IOS_SHADOW_COLOR : ANDROID_SHADOW_COLOR,
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 2,
  },
  leftElementContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightElementContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontFamily: MULISH_700,
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
    color: PRIMARY_TEXT_COLOR,
  },
});

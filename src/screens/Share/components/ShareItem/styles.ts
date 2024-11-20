import {
  LIGHT_GRAY_4,
  MULISH_400,
  PRIMARY_BLUE,
  PRIMARY_TEXT_COLOR,
} from '@/src/utils/common';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
  },
  buttonContainer: {
    flex: 1,
    height: 56,
    gap: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: LIGHT_GRAY_4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  icon: {
    width: 20,
    height: 20,
  },
  description: {
    flex: 1,
    fontFamily: MULISH_400,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.01,
    color: PRIMARY_TEXT_COLOR,
    // ellipsizeMode: 'tail',
    // numberOfLines: 1,
  },
  extraButtonContainer: {
    width: 56,
    height: 56,
    borderRadius: 6,
    backgroundColor: PRIMARY_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrIcon: {
    width: 20,
    height: 20,
  },
});

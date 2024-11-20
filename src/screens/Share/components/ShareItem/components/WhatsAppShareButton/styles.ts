import {
  MULISH_400,
  MULISH_700,
  PRIMARY_BLUE,
  PRIMARY_TEXT_COLOR,
  WHITE,
  WHITE_2,
} from '@/src/utils/common';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 56,
    gap: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: PRIMARY_BLUE,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  icon: {
    width: 20,
    height: 20,
  },
  sharingOptionsContainer: {
    flexDirection: 'row',
    flex: 1,
    gap: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  phoneInputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    gap: 16,
  },
  phonePrefixContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  phonePrefix: {
    fontFamily: MULISH_400,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.01,
    color: PRIMARY_TEXT_COLOR,
  },
  chevronDownIcon: {
    width: 10,
    height: 6,
    top: 1,
  },
  phoneInput: {
    flex: 1,
  },
  sendButtonContainer: {
    height: 24,
    width: 53,
    borderRadius: 4,
    backgroundColor: PRIMARY_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonText: {
    fontFamily: MULISH_700,
    color: WHITE,
    fontSize: 12,
    lineHeight: 16,
  },
  disabledButton: {
    backgroundColor: WHITE_2,
  },
  disabledButtonText: {
    color: PRIMARY_BLUE,
  },
});

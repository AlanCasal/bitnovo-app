import {
  LIGHT_GRAY_3,
  LIGHT_GRAY_6,
  MULISH_400,
  MULISH_700,
  PRIMARY_TEXT_COLOR,
} from '@/src/utils/common';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    gap: 8,
  },
  label: {
    fontFamily: MULISH_700,
    color: PRIMARY_TEXT_COLOR,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.01,
    textAlign: 'left',
  },
  inputContainer: {
    minHeight: 56,
    fontFamily: MULISH_400,
    color: PRIMARY_TEXT_COLOR,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: LIGHT_GRAY_3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
  maxLength: {
    fontFamily: MULISH_400,
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'right',
    color: LIGHT_GRAY_6,
  },
});

import {
  LIGHT_GRAY_6,
  MULISH_400,
  MULISH_700,
  WHITE_2,
} from '@/src/utils/common';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 114,
    borderRadius: 12,
    backgroundColor: WHITE_2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentRequestContainer: {
    flexDirection: 'row',
    gap: 17,
  },
  title: {
    fontFamily: MULISH_400,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.01,
    color: LIGHT_GRAY_6,
  },
  amount: {
    fontFamily: MULISH_700,
    fontSize: 30,
    lineHeight: 38,
    textAlign: 'left',
  },
  image: {
    width: 58,
    height: 58,
  },
  description: {
    fontFamily: MULISH_400,
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'center',
    color: LIGHT_GRAY_6,
  },
});

import {
  MULISH_400,
  MULISH_700,
  LIGHT_GRAY_6,
  PRIMARY_BLUE,
  PRIMARY_TEXT_COLOR,
  WHITE_2,
} from '@/src/utils/common';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 88,
    height: 32,
  },
  content: {
    flex: 1,
    paddingHorizontal: 35,
    justifyContent: 'flex-end',
  },
  paymentReceivedContainer: {
    gap: 16,
    marginVertical: 'auto',
  },
  image: {
    width: 204,
    height: 158,
    alignSelf: 'center',
  },
  paymentReceivedText: {
    fontFamily: MULISH_700,
    fontSize: 20,
    lineHeight: 25,
    textAlign: 'center',
    color: PRIMARY_TEXT_COLOR,
  },
  descriptionText: {
    fontFamily: MULISH_400,
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
    color: LIGHT_GRAY_6,
  },
  disabledButton: {
    backgroundColor: WHITE_2,
  },
  disabledButtonText: {
    color: PRIMARY_BLUE,
  },
});

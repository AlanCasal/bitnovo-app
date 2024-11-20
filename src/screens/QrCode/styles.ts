import {
  MULISH_400,
  MULISH_700,
  PRIMARY_BLUE,
  WHITE,
} from '@/src/utils/common';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: PRIMARY_BLUE,
    paddingHorizontal: 18,
    paddingTop: 24,
  },
  paymentInfoContainer: {
    gap: 24,
  },
  qrContainer: {
    width: '100%',
    borderRadius: 6,
    backgroundColor: WHITE,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrImage: {
    width: '100%',
    height: '100%',
  },
  amount: {
    fontFamily: MULISH_700,
    fontSize: 26,
    lineHeight: 40.56,
    textAlign: 'center',
    color: WHITE,
  },
  info: {
    fontFamily: MULISH_400,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
    textAlign: 'center',
    color: WHITE,
  },
  qrWrapper: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    padding: 10,
    width: '20%',
    height: '20%',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
});

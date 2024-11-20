import { StyleSheet } from 'react-native';
import {
  LIGHT_BLUE,
  LIGHT_GRAY_2,
  MULISH_600,
  PRIMARY_BLUE,
} from '../../utils/common';

export default StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_BLUE,
    height: 56,
    borderRadius: 6,
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  buttonText: {
    color: 'white',
    fontFamily: MULISH_600,
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
  },
  disabled: {
    backgroundColor: LIGHT_GRAY_2,
  },
  disabledText: {
    color: LIGHT_BLUE,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

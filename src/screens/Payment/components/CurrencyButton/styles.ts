import {
  LIGHT_GRAY_7,
  MULISH_700,
  PRIMARY_TEXT_COLOR,
} from '@/src/utils/common';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  currencyButton: {
    backgroundColor: LIGHT_GRAY_7,
    borderRadius: 24,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  currencyText: {
    fontFamily: MULISH_700,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700',
    color: PRIMARY_TEXT_COLOR,
  },
  icon: {
    width: 16,
    height: 16,
  },
});

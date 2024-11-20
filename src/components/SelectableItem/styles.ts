import {
  LIGHT_GRAY,
  LIGHT_GRAY_6,
  MULISH_400,
  MULISH_700,
  PRIMARY_TEXT_COLOR,
} from '@/src/utils/common';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 52,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  itemInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  leftImage: {
    width: 32,
    height: 32,
  },
  itemSelected: {
    backgroundColor: LIGHT_GRAY,
  },
  itemTitle: {
    fontFamily: MULISH_700,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.01,
    color: PRIMARY_TEXT_COLOR,
  },
  itemDescription: {
    fontFamily: MULISH_400,
    fontSize: 12,
    lineHeight: 16,
    color: LIGHT_GRAY_6,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 16,
    height: 16,
  },
});

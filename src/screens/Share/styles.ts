import { PRIMARY_BLUE, WHITE, WHITE_2 } from '@/src/utils/common';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  content: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 18,
    justifyContent: 'space-between',
  },
  shareOptionsContainer: {
    gap: 20,
  },
  disabledButton: {
    backgroundColor: WHITE_2,
  },
  disabledButtonText: {
    color: PRIMARY_BLUE,
  },
});

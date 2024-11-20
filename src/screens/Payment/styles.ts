import { PRIMARY_BLUE, WHITE } from '@/src/utils/common';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  content: {
    flex: 1,
    paddingTop: 64,
    marginHorizontal: 17,
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  amount: {
    fontSize: 40,
    lineHeight: 50,
    color: PRIMARY_BLUE,
  },
});

import { IS_IOS } from '@/src/utils/common';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    ...(!IS_IOS && { paddingTop: 0 }),
  },
  content: {
    paddingHorizontal: 18,
  },
  currenciesList: {
    marginTop: 8,
    paddingVertical: 12,
    gap: 4,
  },
});

import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import { CurrenciesEnum } from '@/src/context/PaymentContext/types';
import { Image } from 'expo-image';

type Props = {
  selectedCurrency: CurrenciesEnum;
  handleOnPress: () => void;
};

const CurrencyButton = ({ selectedCurrency, handleOnPress }: Props) => {
  return (
    <TouchableOpacity style={styles.currencyButton} onPress={handleOnPress}>
      <Text style={styles.currencyText}>{selectedCurrency}</Text>
      <Image
        style={styles.icon}
        source={require('@/assets/icons/chevron-down.png')}
      />
    </TouchableOpacity>
  );
};

export default CurrencyButton;

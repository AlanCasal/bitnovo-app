import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import { BLUR_HASH } from '@/src/utils/common';
import { Image } from 'expo-image';

type Props = {
  amount: string;
};

const PaymentRequestBox = ({ amount }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.paymentRequestContainer}>
        <Image
          source={require('@/assets/images/money-time.png')}
          style={styles.image}
          placeholder={{ blurhash: BLUR_HASH }}
        />
        <View>
          <Text style={styles.title}>Solicitud de pago</Text>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
      <Text style={styles.description}>
        Comparte el enlace de pago con el cliente
      </Text>
    </View>
  );
};

export default PaymentRequestBox;

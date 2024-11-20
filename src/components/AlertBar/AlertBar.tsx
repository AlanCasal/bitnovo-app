import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import { Image } from 'expo-image';

const AlertBar = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require('@/assets/icons/info-circle.png')}
      />
      <Text style={styles.text}>
        Escanea el QR y serás redirigido a la pasarela de pago de Bitnovo Pay.
      </Text>
    </View>
  );
};

export default AlertBar;

import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '@/src/components/Header';
import { Image } from 'expo-image';
import styles from './styles';
import SubmitButton from '@/src/components/SubmitButton';
import { useRouter } from 'expo-router';

const PaymentReceived = () => {
  const router = useRouter();
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsDisabled(false), 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleFinish = () => router.push('/');

  return (
    <View style={styles.container}>
      <Header
        centerElement={
          <Image
            source={require('@/assets/images/bitnovo-pay.png')}
            style={styles.logo}
          />
        }
        containerStyle={{ paddingBottom: 12 }}
      />

      <View style={styles.content}>
        <View style={styles.paymentReceivedContainer}>
          <Image
            style={styles.image}
            source={require('@/assets/images/thick-check-confetti.png')}
          />
          <Text style={styles.paymentReceivedText}>Pago recibido</Text>
          <Text style={styles.descriptionText}>
            El pago se ha confirmado con éxito
          </Text>
        </View>

        <SubmitButton
          buttonText='Finalizar'
          handleOnPress={handleFinish}
          isDisabled={isDisabled}
          customDisabledStyle={styles.disabledButton}
          customDisabledTextStyle={styles.disabledButtonText}
        />
      </View>
    </View>
  );
};

export default PaymentReceived;

import { View, Text, useWindowDimensions } from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '@/src/components/Header';
import BackButton from '@/src/components/BackButton';
import AlertBar from '@/src/components/AlertBar';
import QRCode from 'react-native-qrcode-svg';
import usePaymentContext from '@/src/context/PaymentContext/usePaymentContext';
import { PRIMARY_TEXT_COLOR } from '@/src/utils/common';
import { Image } from 'expo-image';

const QrCode = () => {
  const { paymentOrder } = usePaymentContext();
  const { width } = useWindowDimensions();
  const qrSize = Math.min(width * 0.8, 300);

  return (
    <View style={styles.container}>
      <Header leftElement={<BackButton />} />

      <View style={styles.content}>
        <View style={styles.paymentInfoContainer}>
          <AlertBar />
          <View style={styles.qrContainer}>
            {paymentOrder.web_url ? (
              <View style={styles.qrWrapper}>
                <QRCode
                  value={paymentOrder.web_url}
                  size={qrSize}
                  color={PRIMARY_TEXT_COLOR}
                />
                <View style={styles.logoContainer}>
                  <Image
                    source={require('@/assets/images/bitnovo-pay.png')}
                    style={styles.logo}
                    contentFit='contain'
                  />
                </View>
              </View>
            ) : null}
          </View>
          <Text style={styles.amount}>56,00 €</Text>
          <Text style={styles.info}>
            Esta pantalla se actualizará automáticamente.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default QrCode;

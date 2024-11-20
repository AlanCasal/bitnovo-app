import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import Header from '@/src/components/Header';
import PaymentRequestBox from './components/PaymentRequestBox';
import SubmitButton from '@/src/components/SubmitButton';
import ShareItemList from './components/ShareItemList';
import PaymentRequestModal from '@/src/components/Modals/PaymentRequestModal';
import usePaymentContext from '@/src/context/PaymentContext/usePaymentContext';
import { useRouter } from 'expo-router';
import {
  CurrencySymbol,
  PaymentStatusEnum,
} from '@/src/context/PaymentContext/types';

const Share = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();
  const { paymentStatus, amount, currency } = usePaymentContext();

  const handleModal = () => {
    setIsModalVisible(prev => !prev);
  };

  const formattedAmount = () => {
    return currency.symbol === CurrencySymbol.EUR
      ? `${amount} ${currency.symbol}`
      : `${currency.symbol} ${amount}`;
  };

  useEffect(() => {
    if (paymentStatus === PaymentStatusEnum.COMPLETED)
      router.push('/paymentReceived');
  }, [paymentStatus, router]);

  return (
    <View style={styles.container}>
      <Header containerStyle={{ paddingBottom: 0 }} />

      <View style={styles.content}>
        <View style={styles.shareOptionsContainer}>
          <PaymentRequestBox amount={formattedAmount()} />

          <ShareItemList />
        </View>

        <View>
          <SubmitButton
            buttonText='Nueva solicitud'
            handleOnPress={handleModal}
            customDisabledStyle={styles.disabledButton}
            customDisabledTextStyle={styles.disabledButtonText}
            iconSource={require('@/assets/icons/wallet-add.png')}
            isDisabled
          />
        </View>

        <PaymentRequestModal
          isModalVisible={isModalVisible}
          handleModal={handleModal}
        />
      </View>
    </View>
  );
};

export default Share;

/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useMemo, useRef } from 'react';
import { Alert, AppState, AppStateStatus } from 'react-native';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import usePaymentContextValue from '@/src/context/PaymentContext/usePaymentContextValue';
import PaymentContext from '@/src/context/PaymentContext';
import SharingOptionsContext from '@/src/context/SharingOptionsContext';
import useSharingOptionsContextValue from '@/src/context/SharingOptionsContext/useSharingOptionsContextValue';
import orderApi from '../api/order';

const Layout = () => {
  const paymentContextValue = usePaymentContextValue();
  const sharingOptionsContextValue = useSharingOptionsContextValue();
  const appState = useRef(AppState.currentState);

  const handlePaymentStatus = useMemo(
    () => async () => {
      const { paymentOrder } = paymentContextValue;

      let savedPaymentOrder;

      if (paymentOrder.identifier) savedPaymentOrder = paymentOrder;
      else {
        const asyncStoragePaymentOrder =
          await AsyncStorage.getItem('paymentOrder');

        if (asyncStoragePaymentOrder) {
          savedPaymentOrder = JSON.parse(asyncStoragePaymentOrder);
          paymentContextValue.savePaymentOrder(savedPaymentOrder);
        }
      }

      try {
        const response = await orderApi.getPaymentInfo(paymentOrder.identifier);

        if (response.status == 'CO')
          paymentContextValue.handlePaymentReceived();
      } catch (error) {
        Alert.alert('Error', 'Error fetching order info from API');
      }
    },
    [paymentContextValue]
  );

  useEffect(() => {
    const handleAppStateChange = async (nextAppState: string) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        await handlePaymentStatus();
      }

      appState.current = nextAppState as AppStateStatus;
    };

    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange
    );

    return () => {
      subscription.remove();
    };
  }, [paymentContextValue, handlePaymentStatus]);

  const memoizedPaymentValue = useMemo(
    () => paymentContextValue,
    [paymentContextValue]
  );

  const memoizedSharingOptionsValue = useMemo(
    () => sharingOptionsContextValue,
    [sharingOptionsContextValue]
  );

  return (
    <PaymentContext.Provider value={memoizedPaymentValue}>
      <SharingOptionsContext.Provider value={memoizedSharingOptionsValue}>
        <StatusBar style='dark' />
        <Slot />
      </SharingOptionsContext.Provider>
    </PaymentContext.Provider>
  );
};

export default Layout;

/* eslint-disable no-console */
import { useState, useEffect, useCallback } from 'react';
import {
  CurrenciesEnum,
  Currency,
  CurrencySymbol,
  PaymentOrder,
  PaymentStatusEnum,
} from './types';
import { useRouter } from 'expo-router';
import { isValidNumberWithDecimal } from '@/src/utils/common';
import AsyncStorage from '@react-native-async-storage/async-storage';

const INITIAL_PAYMENT_ORDER: PaymentOrder = {
  web_url: '',
  fiat: CurrenciesEnum.USD,
  identifier: '',
  language: '',
  need_dni: false,
  reference: '',
};

const INITIAL_CURRENCY = {
  shortName: CurrenciesEnum.USD,
  symbol: CurrencySymbol.USD,
};

const WEB_SOCKET_URL = 'wss://payments.pre-bnvo.com/ws/merchant';

const usePaymentContextValue = () => {
  const router = useRouter();
  const [amount, setAmount] = useState<string>('');
  const [concept, setConcept] = useState<string>('');
  const [currency, setCurrency] = useState<Currency>(INITIAL_CURRENCY);
  const [paymentOrder, setPaymentOrder] = useState<PaymentOrder>(
    INITIAL_PAYMENT_ORDER
  );
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatusEnum>(
    PaymentStatusEnum.PENDING
  );

  const handleSaveAmount = useCallback((newAmount: string) => {
    if (newAmount && !isValidNumberWithDecimal(newAmount)) return;

    setAmount(newAmount);
  }, []);

  const handleSaveCurrency = useCallback((newCurrency: CurrenciesEnum) => {
    setCurrency({
      shortName: newCurrency,
      symbol: CurrencySymbol[newCurrency],
    });
  }, []);

  const handleSavePaymentOrder = useCallback(
    async (newPaymentOrder: PaymentOrder) => {
      setPaymentOrder(newPaymentOrder);

      const savedPaymentOrder = await AsyncStorage.getItem('paymentOrder');
      if (!savedPaymentOrder)
        AsyncStorage.setItem('paymentOrder', JSON.stringify(newPaymentOrder));
    },
    []
  );

  const handleClearPaymentData = useCallback(() => {
    setAmount('');
    setConcept('');
    handleSaveCurrency(CurrenciesEnum.USD);
    setPaymentOrder(INITIAL_PAYMENT_ORDER);
  }, [handleSaveCurrency]);

  const handlePaymentReceived = useCallback(() => {
    setPaymentStatus(PaymentStatusEnum.COMPLETED);

    handleClearPaymentData();

    router.push('/paymentReceived');
  }, [router, handleClearPaymentData]);

  useEffect(() => {
    let socket: WebSocket | null = null;

    if (paymentOrder.identifier) {
      socket = new WebSocket(`${WEB_SOCKET_URL}/${paymentOrder.identifier}`);

      socket.onopen = () => {
        console.log(
          `%c[WebSocket connected]`,
          'background: #000059; color: #9fcfff'
        );
      };

      socket.onmessage = event => {
        const data = JSON.parse(event.data);
        console.log(
          '%c[WebSocket message received]',
          'background: #000059; color: #9fcfff',
          data
        );

        if (data.status === PaymentStatusEnum.COMPLETED)
          handlePaymentReceived();
      };

      socket.onerror = error => {
        console.error(
          '%c[WebSocket error]',
          'background: #590000; color: #ff9f9f',
          error
        );
      };
    }

    return () => {
      if (socket) {
        socket.close();
        console.log('[WebSocket closed]');
      }
    };
  }, [paymentOrder.identifier, handlePaymentReceived]);

  return {
    amount,
    saveAmount: handleSaveAmount,
    concept,
    saveConcept: setConcept,
    currency,
    saveCurrency: handleSaveCurrency,
    paymentOrder,
    savePaymentOrder: handleSavePaymentOrder,
    paymentStatus,
    handlePaymentReceived,
  };
};

export default usePaymentContextValue;

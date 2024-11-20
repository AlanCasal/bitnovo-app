import {
  View,
  TextInput,
  ScrollView,
  Alert,
  Text,
  TextStyle,
} from 'react-native';
import React, { useState } from 'react';
import Header from '@/src/components/Header';
import styles from './styles';
import FormSubmitButton from '@/src/components/SubmitButton';
import CustomKeyboardView from '@/src/components/KeyboardView';
import { useRouter } from 'expo-router';
import CustomTextInput from '@/src/components/TextInput';
import CurrencyButton from './components/CurrencyButton';
import {
  IS_IOS,
  LIGHT_GRAY_5,
  MULISH_700,
  PRIMARY_BLUE,
} from '@/src/utils/common';
import usePaymentContext from '@/src/context/PaymentContext/usePaymentContext';
import paymentApi from './api';
import {
  CurrenciesEnum,
  CurrencySymbol,
} from '@/src/context/PaymentContext/types';
import ListModal from '@/src/components/Modals/ListModal';
import { CURRENCIES } from '@/src/utils/fakeData';
import { Item } from '../../utils/fakeData';

const FIX_BASE_MARGIN = -100;
const FIX_MARGIN_INCREASE_AMOUNT = 20;
const LIST_MODAL_TITLE = 'Selecciona una divisa';

const Payment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();
  const {
    amount,
    concept,
    currency,
    saveAmount,
    saveConcept,
    saveCurrency,
    savePaymentOrder,
  } = usePaymentContext();

  const handleModal = () => {
    setIsModalVisible(prev => !prev);
  };

  const handleSaveCurrency = (item: Item) => {
    saveCurrency(item.description as CurrenciesEnum);
    handleModal();
  };

  const handleSelectFiat = () => {
    handleModal();
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const data = {
      expected_output_amount: +amount,
      reference: concept,
      fiat: currency.shortName,
      language: 'ES',
    };

    const response = await paymentApi.createPayment(data);

    if (response.success) {
      savePaymentOrder(response.data);
      router.push('/share');
    } else {
      Alert.alert('Error', response.error);
    }

    setIsLoading(false);
  };

  const currencyMargin = () => {
    const amountLength = amount.trim().length;

    if (amountLength > 4) return 0;

    return FIX_BASE_MARGIN + amountLength * FIX_MARGIN_INCREASE_AMOUNT;
  };

  const isEuro = currency.shortName === CurrenciesEnum.EUR;
  const amountPlaceholder = isEuro
    ? `0.00 ${CurrencySymbol.EUR}`
    : `${currency.symbol} 0.00`;

  let amountStyle: TextStyle = styles.amount;
  let currencyStyle: TextStyle = {};
  if (IS_IOS) amountStyle = { ...amountStyle, fontFamily: MULISH_700 };
  else {
    amountStyle = { ...amountStyle };
    if (isEuro) currencyStyle = { marginLeft: currencyMargin() };
  }

  return (
    <CustomKeyboardView keyboardShouldPersistTaps='handled'>
      <View style={styles.container}>
        <Header
          title='Crear pago'
          rightElement={
            <CurrencyButton
              selectedCurrency={currency.shortName}
              handleOnPress={handleSelectFiat}
            />
          }
        />

        <ListModal
          isModalVisible={isModalVisible}
          handleModal={handleModal}
          title={LIST_MODAL_TITLE}
          itemsList={CURRENCIES}
          selectedItem={currency.shortName}
          handleSelectItem={handleSaveCurrency}
        />

        <View style={styles.content}>
          <ScrollView>
            <View style={styles.amountContainer}>
              {!!amount && !isEuro && (
                <Text style={[amountStyle, currencyStyle]}>
                  {currency.symbol}
                </Text>
              )}
              <TextInput
                value={amount}
                placeholder={amountPlaceholder}
                style={amountStyle}
                onChangeText={value => saveAmount(value)}
                keyboardType='numeric'
                placeholderTextColor={LIGHT_GRAY_5}
                cursorColor={PRIMARY_BLUE}
              />
              {!!amount && isEuro && (
                <Text style={[amountStyle, currencyStyle]}>
                  {currency.symbol}
                </Text>
              )}
            </View>

            <CustomTextInput
              value={concept}
              label='Concepto'
              placeholder='Añade descripción del pago'
              onChangeText={saveConcept}
              name='concept'
              containerStyle={{ marginTop: 50 }}
              maxLength={140}
              charactersAmount={concept.length}
              multiline
            />
          </ScrollView>

          <View>
            <FormSubmitButton
              buttonText='Continuar'
              handleOnPress={handleSubmit}
              isDisabled={!amount.trim()}
              isLoading={isLoading}
            />
          </View>
        </View>
      </View>
    </CustomKeyboardView>
  );
};

export default Payment;

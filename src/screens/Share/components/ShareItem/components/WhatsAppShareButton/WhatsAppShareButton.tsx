import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Linking,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { Image, ImageSource } from 'expo-image';
import styles from './styles';
import { isValidNumber, LIGHT_GRAY_5, PRIMARY_BLUE } from '@/src/utils/common';
import { COUNTRIES, Item } from '@/src/utils/fakeData';
import ListModal from '@/src/components/Modals/ListModal/ListModal';
import useSharingOptionsContext from '@/src/context/SharingOptionsContext/useSharingOptionsContext';

type Props = {
  iconSource?: ImageSource;
  message?: string;
};

const LIST_MODAL_TITLE = 'Seleccionar país';

const WhatsAppShareButton = ({ message = '' }: Props) => {
  const [phone, setPhone] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { phonePrefix, savePhonePrefix } = useSharingOptionsContext();
  const disableSend = !phone.trim();

  const onPhoneInputChange = (value: string) => {
    if (!isValidNumber(value)) return;

    setPhone(value);
  };

  const handleModal = () => {
    setIsModalVisible(prev => !prev);
  };

  const handleSavePhonePrefix = (item: Item) => {
    savePhonePrefix(item.title);
  };

  const handleSend = async () => {
    const encodedMessage = encodeURIComponent(message);

    const url = `https://wa.me/${phonePrefix}${phone}?text=${encodedMessage}`;
    const canOpen = await Linking.canOpenURL(url);

    if (canOpen) await Linking.openURL(url);
    else Alert.alert('Error', 'Make sure WhatsApp is installed on your device');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/icons/whatsapp.png')}
        style={styles.icon}
        contentFit='contain'
      />
      <View style={styles.sharingOptionsContainer}>
        <View style={styles.phoneInputContainer}>
          <TouchableOpacity onPress={handleModal}>
            <View style={styles.phonePrefixContainer}>
              <Text style={styles.phonePrefix}>{phonePrefix}</Text>
              <Image
                source={require('@/assets/icons/chevron-down.png')}
                style={styles.chevronDownIcon}
                contentFit='contain'
              />
            </View>
          </TouchableOpacity>
          <ListModal
            isModalVisible={isModalVisible}
            handleModal={handleModal}
            title={LIST_MODAL_TITLE}
            itemsList={COUNTRIES}
            selectedItem={phonePrefix}
            handleSelectItem={handleSavePhonePrefix}
          />
          <TextInput
            value={phone}
            placeholder='300 678 9087'
            style={styles.phoneInput}
            onChangeText={onPhoneInputChange}
            keyboardType='numeric'
            placeholderTextColor={LIGHT_GRAY_5}
            cursorColor={PRIMARY_BLUE}
          />
        </View>
        <TouchableOpacity onPress={handleSend} disabled={disableSend}>
          <View
            style={{
              ...styles.sendButtonContainer,
              ...(disableSend && styles.disabledButton),
            }}
          >
            <Text
              style={{
                ...styles.sendButtonText,
                ...(disableSend && styles.disabledButtonText),
              }}
            >
              Enviar
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WhatsAppShareButton;

import { Alert, FlatList, Linking, Share } from 'react-native';
import React from 'react';
import ShareItem from '../ShareItem';
import styles from './styles';
import { ImageSource } from 'expo-image';
import WhatsAppShareButton from '../ShareItem/components/WhatsAppShareButton';
import { useRouter } from 'expo-router';
import { paymentBodyMessage, ShareItemName } from '@/src/utils/common';
import * as Clipboard from 'expo-clipboard';
import usePaymentContext from '@/src/context/PaymentContext/usePaymentContext';
import useSharingOptionsContext from '@/src/context/SharingOptionsContext/useSharingOptionsContext';

type ShareItemProps = {
  description: string;
  iconSource: ImageSource;
  extraButton?: boolean;
  name: ShareItemName;
  handleOnPress: () => void;
  handleOnPressExtraButton?: () => void;
};

const ShareItemList = () => {
  const router = useRouter();
  const { amount, currency, concept, paymentOrder } = usePaymentContext();
  const { isSharingWhatsapp, setIsSharingWhatsapp } =
    useSharingOptionsContext();

  const message = paymentBodyMessage(paymentOrder.web_url, concept);

  const shareOptionsData = [
    {
      description: paymentOrder.web_url.replace('https://', ''),
      iconSource: require('@/assets/icons/link.png'),
      extraButton: true,
      name: ShareItemName.LINK,
      handleOnPress: async () => {
        await Clipboard.setStringAsync(paymentOrder.web_url);
        Alert.alert('Enlace de pago copiado!', paymentOrder.web_url);
      },
      handleOnPressExtraButton: () => router.push('/qrCode'),
    },
    {
      description: 'Enviar por correo electrónico',
      iconSource: require('@/assets/icons/sms.png'),
      name: ShareItemName.EMAIL,
      handleOnPress: async () => {
        const email = '';
        const subject = `Solicitud de pago por ${amount} ${currency.shortName}`;
        const emailURL = `mailto:${email}?subject=${subject}&body=${paymentBodyMessage(paymentOrder.web_url, concept)}`;

        const supported = await Linking.canOpenURL(emailURL);

        try {
          if (supported) Linking.openURL(emailURL);
          else Alert.alert('Error', 'No email app found');
        } catch (error) {
          Alert.alert('Error', (error as Error).message);
        }
      },
    },
    {
      description: 'Enviar a número de WhatsApp',
      iconSource: require('@/assets/icons/whatsapp.png'),
      name: ShareItemName.WHATSAPP,
      handleOnPress: () => setIsSharingWhatsapp(true),
    },
    {
      description: 'Compartir con otras aplicaciones',
      iconSource: require('@/assets/icons/export.png'),
      name: ShareItemName.EXPORT,
      handleOnPress: async () => {
        try {
          await Share.share({ message });
        } catch (error) {
          Alert.alert('Error:', (error as Error).message);
        }
      },
    },
  ];

  const renderItem = ({ item }: { item: ShareItemProps }) => {
    if (item.name === ShareItemName.WHATSAPP && isSharingWhatsapp) {
      return <WhatsAppShareButton message={message} />;
    }

    return <ShareItem {...item} />;
  };

  return (
    <FlatList
      data={shareOptionsData}
      contentContainerStyle={styles.shareOptionsList}
      keyExtractor={() => Math.random().toString()}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
};

export default ShareItemList;

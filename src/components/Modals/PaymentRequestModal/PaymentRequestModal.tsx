import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import { BlurView } from 'expo-blur';
import styles from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IS_IOS } from '@/src/utils/common';
import { Image } from 'expo-image';
import SubmitButton from '../../SubmitButton';

type Props = {
  isModalVisible: boolean;
  handleModal: () => void;
};

const PaymentRequestModal = ({
  isModalVisible = false,
  handleModal,
}: Props) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={isModalVisible}
      onRequestClose={handleModal}
    >
      {IS_IOS && (
        <BlurView intensity={20} style={StyleSheet.absoluteFill} tint='dark' />
      )}
      <TouchableWithoutFeedback onPress={handleModal}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>

      <View
        style={[
          styles.modalContainer,
          { marginBottom: IS_IOS ? bottom : bottom + 10 },
        ]}
      >
        <View style={styles.modalContentContainer}>
          <Image
            source={require('@/assets/images/thick-check.png')}
            style={styles.checkIcon}
          />
          <Text style={styles.modalTitle}>Solicitud enviada</Text>
          <Text style={styles.modalDescription}>
            Tu solicitud de pago ha sido enviada con éxito por WhatsApp.
          </Text>
          <SubmitButton buttonText='Entendido' handleOnPress={handleModal} />
        </View>
      </View>
    </Modal>
  );
};

export default PaymentRequestModal;

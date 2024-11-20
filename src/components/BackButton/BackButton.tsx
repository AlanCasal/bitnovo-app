import { TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';

type Props = {
  customAction?: () => void;
};

const BackButton = ({ customAction }: Props) => {
  const router = useRouter();

  const handleBack = () => {
    if (customAction) customAction();
    else router.back();
  };

  return (
    <TouchableOpacity style={styles.backButton} onPress={handleBack}>
      <Image
        style={styles.icon}
        source={require('@/assets/icons/arrow-left.png')}
      />
    </TouchableOpacity>
  );
};

export default BackButton;

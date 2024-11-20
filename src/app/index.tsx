import React from 'react';
import { View } from 'react-native';
import PaymentScreen from '../screens/Payment';
import {
  useFonts,
  Mulish_400Regular,
  Mulish_700Bold,
  Mulish_600SemiBold,
} from '@expo-google-fonts/mulish';
import Loader from '@/src/components/Loader';

const Index = () => {
  const [fontsLoaded] = useFonts({
    Mulish_400Regular,
    Mulish_700Bold,
    Mulish_600SemiBold,
  });

  if (!fontsLoaded)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Loader size={100} />
      </View>
    );

  return <PaymentScreen />;
};

export default Index;

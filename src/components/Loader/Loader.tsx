import { View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const Loader = ({ size: height = 30 }: { size?: number }) => {
  return (
    <View style={{ height, aspectRatio: 1 }}>
      <LottieView
        style={{ flex: 1 }}
        source={require('@/assets/animations/loadingSpinner.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loader;

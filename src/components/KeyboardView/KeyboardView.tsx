import { KeyboardAvoidingView, ScrollView } from 'react-native';
import React from 'react';
import { IS_IOS } from '@/src/utils/common';

type Props = {
  children: React.ReactNode;
  keyboardShouldPersistTaps?:
    | boolean
    | 'always'
    | 'never'
    | 'handled'
    | undefined;
};

const BEHAVIOR = IS_IOS ? 'padding' : 'height';

const CustomKeyboardView: React.FC<Props> = ({
  children,
  keyboardShouldPersistTaps = undefined,
}) => {
  const keyboardVerticalOffset = 0;
  const contentContainerStyle = { flex: 1 };

  return (
    <KeyboardAvoidingView
      behavior={BEHAVIOR}
      style={{ flex: 1 }}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <ScrollView
        style={{ flex: 1 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={contentContainerStyle}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CustomKeyboardView;

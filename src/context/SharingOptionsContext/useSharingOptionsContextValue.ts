import { COUNTRIES } from '@/src/utils/fakeData';
import { useState } from 'react';

const useSharingOptionsContextValue = () => {
  const [isSharingWhatsapp, setIsSharingWhatsapp] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [phonePrefix, setPhonePrefix] = useState(COUNTRIES[0].title);

  return {
    isSharingWhatsapp,
    setIsSharingWhatsapp,
    phoneNumber,
    savePhoneNumber: setPhoneNumber,
    phonePrefix,
    savePhonePrefix: setPhonePrefix,
  };
};

export default useSharingOptionsContextValue;

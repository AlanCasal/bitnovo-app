import { useContext } from 'react';
import PaymentContext, { PaymentContextData } from './index';

const usePaymentContext = (): PaymentContextData => {
  const value = useContext(PaymentContext);

  if (!value) {
    throw new Error(
      'usePaymentContext must be used within an PaymentContextProvider'
    );
  }

  return value;
};

export default usePaymentContext;

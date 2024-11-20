import { createContext } from 'react';
import PaymentContextValue from './usePaymentContextValue';

export type PaymentContextData = ReturnType<typeof PaymentContextValue>;

const PaymentContext = createContext<PaymentContextData | undefined>(undefined);

export default PaymentContext;

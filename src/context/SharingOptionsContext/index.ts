import { createContext } from 'react';
import SharingOptionsContextValue from './useSharingOptionsContextValue';

export type SharingOptionsContextData = ReturnType<
  typeof SharingOptionsContextValue
>;

const SharingOptionsContext = createContext<
  SharingOptionsContextData | undefined
>(undefined);

export default SharingOptionsContext;

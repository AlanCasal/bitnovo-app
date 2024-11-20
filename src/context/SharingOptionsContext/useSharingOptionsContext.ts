import { useContext } from 'react';
import SharingOptionsContext, { SharingOptionsContextData } from './index';

const useSharingOptionsContext = (): SharingOptionsContextData => {
  const value = useContext(SharingOptionsContext);

  if (!value) {
    throw new Error(
      'useSharingOptionsContext must be used within an SharingOptionsContextProvider'
    );
  }

  return value;
};

export default useSharingOptionsContext;

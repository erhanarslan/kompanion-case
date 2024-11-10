import { useContext } from 'react';
import RegisterContext from './registerContext';
import { RegisterContextType } from './registerContextData';

export const useRegisterContext = (): RegisterContextType => {
  const context = useContext(RegisterContext);
  if (!context) {
    throw new Error('useRegisterContext must be used within a RegisterProvider');
  }
  return context;
};

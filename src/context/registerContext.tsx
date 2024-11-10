import { createContext, useState, ReactNode } from 'react';
import { RegisterData, RegisterContextType, defaultState } from './registerContextData'

const RegisterContext = createContext<RegisterContextType | undefined>(undefined);

export const RegisterProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [registerData, setRegisterData] = useState<RegisterData>(defaultState.registerData);

  const nextStep = () => setCurrentStep((prev: number) => prev + 1);
  const prevStep = () => setCurrentStep((prev: number) => prev - 1);

  const updateRegisterData = (data: Partial<RegisterData>) => {
    setRegisterData((prev) => ({ ...prev, ...data }));
  };

  return (
    <RegisterContext.Provider value={{ currentStep, nextStep, prevStep, registerData, updateRegisterData }}>
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContext;

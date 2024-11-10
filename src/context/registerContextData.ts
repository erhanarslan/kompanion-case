export type RegisterData = {
    height?: string;
    weight?: string;
    workoutDays?: string[];
    fitnessGoal?: string;
    name?: string;
    surname?: string;
    email?: string;
    password?: string;
  };
  
  export type RegisterContextType = {
    currentStep: number;
    nextStep: () => void;
    prevStep: () => void;
    registerData: RegisterData;
    updateRegisterData: (data: Partial<RegisterData>) => void;
  };
  
  
  export const defaultState: RegisterContextType = {
    currentStep: 1,
    nextStep: () => {},
    prevStep: () => {},
    registerData: {
      height: '',
      weight: '',
      workoutDays: [],
      fitnessGoal: 'loseWeight',
      name: '',
      surname: '',
      email: '',
      password: '',
    },
    updateRegisterData: () => {},
  };
  
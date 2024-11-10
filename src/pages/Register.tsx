import { useRegisterContext } from '../context/useRegisterContext';
import BodyInfo from '../components/BodyInfo/BodyInfo';
import WorkoutDays from '../components/WorkoutDays/WorkoutDays';
import FitnessGoal from '../components/FitnessGoal/FitnessGoal';
import PersonalInfo from '../components/PersonalInfo/PersonalInfo';
import { useTranslation } from 'react-i18next';
import './register.css';

const Register = () => {
  const { currentStep } = useRegisterContext();
  const { i18n } = useTranslation();

  
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <BodyInfo />;
      case 2:
        return <WorkoutDays />;
      case 3:
        return <FitnessGoal />;
      case 4:
        return <PersonalInfo />;
      default:
        return null;
    }
  };
  return (
    // deciding animation direction 
    <div className={`container ${i18n.language === 'ar' ? 'stepAnimationAr': ''}`}>
      {renderStep()}
    </div>
  );
};

export default Register;

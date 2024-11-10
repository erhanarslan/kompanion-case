import { useRegisterContext } from '../../context/useRegisterContext';
import { useTranslation } from 'react-i18next';
import styles from './WorkoutDays.module.css';
import { postData } from '../../utils/services/registerService';

const WorkoutDays = () => {
  const {  updateRegisterData, registerData,nextStep,prevStep } = useRegisterContext();
  const { t, i18n } = useTranslation();

  const handleNext = async () => {
    try {
      await postData(registerData);
      nextStep(); 
    } catch (error) {
      console.error("Veri gönderimi sırasında bir hata oluştu:", error);
    }
  };
  const handlePrev = () => {
    prevStep();
  };
  

  const handleSelectDay = (day:string) => {
    const updatedWorkoutDays = registerData.workoutDays?.includes(day)
      ? registerData.workoutDays.filter((d) => d !== day)
      : [...(registerData.workoutDays || []), day];
    updateRegisterData({ workoutDays: updatedWorkoutDays });
  };

  const options =
    registerData.weight && registerData.height
      ? Number(registerData.weight) / Number(registerData.height) <= 0.5
        ? ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
        : ["monday", "wednesday", "saturday", "sunday"]
      : [];

  return (
    <>
        <div className={`title ${i18n.language === 'ar' ? 'stepAnimationAr': ''}`}>
            {t('steps.step2Title')}
        </div>
      
      <div className={styles.daySelect}>
        {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((day, index, array) => {
          const isSelectable = options.includes(day);
          const isSelected = registerData.workoutDays?.includes(day);

          return (
            <div key={day} className={`${styles.dayContainer} ${i18n.language === 'ar' ? 'stepAnimationAr': ''}`}>
              <button
                className={`${styles.dayButton} ${isSelectable ? styles.selectableDay : styles.unselectableDay} ${isSelected ? styles.selectedDay : ''}`}
                onClick={() => isSelectable && handleSelectDay(day)}
                disabled={!isSelectable}
              >
                <span className={`${styles.dayText} ${isSelectable ? styles.selectableDayText : styles.nonSelectableDayText} ${i18n.language === 'ar' ? `${styles.dayTextAr}`: ''}`}>
                  {t(`days.${day}`)}
                </span>
                
                <div className={`${styles.checkIconWrapper} ${isSelected ? styles.selected : ''}`}>
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 6.83333L4.33333 11L11 1"
                      stroke="#C8D0D2" 
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </button>

              {index < array.length - 1 && <div className={styles.daySeparator}></div>}
            </div>
          );
        })}
      </div>
      <div className={`buttonGroup ${i18n.language === 'ar' ? 'stepAnimationAr': ''}`}>
          <button className="stepButton"
          onClick={handlePrev} >
            {t('navigation.back')}
          </button>
          <button
            className="stepButton"
            onClick={handleNext}
            disabled={!registerData.workoutDays || registerData.workoutDays.length === 0}
          >
            {t('navigation.next')}
          </button>
        </div>
      
    </>
  );
};

export default WorkoutDays;

import { useRegisterContext } from "../../context/useRegisterContext";
import { useTranslation } from "react-i18next";
import styles from './FitnessGoal.module.css';
import { postData } from '../../utils/services/registerService';

const FitnessGoal = () => {
  const {  updateRegisterData, registerData,prevStep,nextStep } =
    useRegisterContext();
  const { t, i18n } = useTranslation();

  const handleFitnessGoalChange = (goal: string) => {
    updateRegisterData({ fitnessGoal: goal });
  };
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

  return (
    <>
        <div className={`title ${i18n.language === 'ar' ? 'stepAnimationAr': ''}`}>

        {t("steps.step3Title")}

        </div>
      <div className={`${styles.fitnessGoals} ${i18n.language === 'ar' ? 'stepAnimationAr': ''}`}>
        <label className={styles.fitnessGoalOption}>
          <img
            src="/assets/icons/Flame.svg"
            alt="Lose Weight Icon"
            className={styles.goalIcon}
          />
          <span className={styles.goalText}>{t("goals.loseWeight")}</span>
          <input
            type="radio"
            value="loseWeight"
            checked={registerData.fitnessGoal === "loseWeight"}
            onChange={() => handleFitnessGoalChange("loseWeight")}
            className={styles.goalRadio}
          />
        </label>

        <div className={styles.daySeperator}></div>

        <label className={styles.fitnessGoalOption}>
          <img
            src="/assets/icons/Tier.svg"
            alt="Build Muscle Icon"
            className={styles.goalIcon}
          />
          <span className={styles.goalText}>{t("goals.buildMuscle")}</span>
          <input
            type="radio"
            value="buildMuscle"
            checked={registerData.fitnessGoal === "buildMuscle"}
            onChange={() => handleFitnessGoalChange("buildMuscle")}
            className={styles.goalRadio}
          />
        </label>

        <div className={styles.daySeperator}></div>

        <label className={styles.fitnessGoalOption}>
          <img
            src="/assets/icons/Smile.svg"
            alt="Stay Health Icon"
            className={styles.goalIcon}
          />
          <span className={styles.goalText}>{t("goals.stayHealth")}</span>
          <input
            type="radio"
            value="stayHealth"
            checked={registerData.fitnessGoal === "stayHealth"}
            onChange={() => handleFitnessGoalChange("stayHealth")}
            className={styles.goalRadio}
          />
        </label>
      </div>
      <div className={`buttonGroup ${i18n.language === 'ar' ? 'stepAnimationAr': ''}`}>
        <button className="stepButton" onClick={handlePrev}>
          {t("navigation.back")}
        </button>
        <button className="stepButton" onClick={handleNext}>
          {t("navigation.next")}
        </button>
      </div>
    </>
  );
};

export default FitnessGoal;

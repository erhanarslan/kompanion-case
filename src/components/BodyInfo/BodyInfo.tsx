import { useRegisterContext } from "../../context/useRegisterContext";
import { useTranslation } from 'react-i18next';
import { postData } from '../../utils/services/registerService';


const BodyInfo = () => {
  const {  nextStep,updateRegisterData, registerData } = useRegisterContext();
  const { t, i18n } = useTranslation();

  const handleNext = async () => {
    try {
      await postData(registerData);
      nextStep(); 
    } catch (error) {
      console.error("Veri gönderimi sırasında bir hata oluştu:", error);
    }
  };

  return (
    <>
      <div className={`title ${i18n.language === 'ar' ? 'stepAnimationAr': ''}`}>
        {t("steps.step1Title")}
      </div>
      <div className="inputGroup">
        <div className="inputWrapper">

        <input
          className={`stepInput ${i18n.language === 'ar' ? 'stepAnimationAr': ''}`}
          placeholder={`${t("attributes.height")}`}
          value={registerData.height || ""}
          onChange={(e) => updateRegisterData({ height: e.target.value })}
        />
          <span className={`inputInfo ${i18n.language === 'ar' ? 'inputInfoAr' : ''}`}>
          {t("units.cm")}
        </span>
        </div>
        <div className="inputWrapper">

        <input
          className={`stepInput ${i18n.language === 'ar' ? 'stepAnimationAr': ''}`}
          placeholder={`${t("attributes.weight")} `}
          value={registerData.weight || ""}
          onChange={(e) => updateRegisterData({ weight: e.target.value })}
        />
           <span className={`inputInfo ${i18n.language === 'ar' ? 'inputInfoAr stepAnimationAr' : ''} `}>
           {t("units.kg")}
        </span>
        </div>
       
      </div>
      <div className={`buttonGroup ${i18n.language === 'ar' ? 'stepAnimationAr': ''}`}>
          <button className="stepButton" disabled>
            {t('navigation.back')}
          </button>
          <button
            className={`stepButton ${i18n.language === 'ar' ? 'stepAnimationAr': ''}`}
            onClick={handleNext}
            disabled={!registerData.height || !registerData.weight}
          >
            {t('navigation.next')}
          </button>
        </div>
    </>
  );
};

export default BodyInfo;




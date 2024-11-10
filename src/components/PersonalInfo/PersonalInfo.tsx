import { useRegisterContext } from '../../context/useRegisterContext';
import { useTranslation } from 'react-i18next';
import { postData } from '../../utils/services/registerService';

const PersonalInfo = () => {
  const {  updateRegisterData, registerData,prevStep } = useRegisterContext();
  const { t, i18n } = useTranslation();

  const handleInputChange = (field: string, value: string) => {
    updateRegisterData({ [field]: value });
  };
  const handleSave = async () => {
    try {
      await postData(registerData); 
      alert("Form başarıyla kaydedildi");
    } catch (error) {
      console.error(t('messages.wentwrong'), error);
    }
  };
  const handlePrev = () => {
    prevStep();
  };

  return (
    <>
      
        <div className={`title ${i18n.language === 'ar' ? 'stepAnimationAr': ''}`}>{t('steps.step4Title')}</div>

        <div className={`inputGroup ${i18n.language === 'ar' ? 'stepAnimationAr': ''}`}>
          <input
            className="stepInput"
            placeholder={t('form.name')}
            value={registerData.name || ''}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
          <input
            className="stepInput"
            placeholder={t('form.surname')}
            value={registerData.surname || ''}
            onChange={(e) => handleInputChange('surname', e.target.value)}
          />
        </div>
        <div className={`inputGroup ${i18n.language === 'ar' ? 'stepAnimationAr': ''}`}>
          <input
            className="stepInput"
            placeholder={t('form.email')}
            value={registerData.email || ''}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
          <input
            className="stepInput"
            placeholder={t('form.password')}
            type="password"
            value={registerData.password || ''}
            onChange={(e) => handleInputChange('password', e.target.value)}
          />
        </div>
        <div className={`buttonGroup ${i18n.language === 'ar' ? 'stepAnimationAr': ''}`}>
          <button className="stepButton" onClick={handlePrev}>
            {t("navigation.back")}
          </button>
          <button className="stepButton" onClick={handleSave}>
            {t("navigation.save")}
          </button>
      </div>
      </>
    
  );
};

export default PersonalInfo;



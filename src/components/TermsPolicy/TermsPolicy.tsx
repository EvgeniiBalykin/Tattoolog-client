import { selectLanguage } from '@store/reducers/langSlice';
import { useSelector } from 'react-redux';
import TermsPolicyDe from './TermsPolicyDe';
import TermsPolicyEng from './TermsPolicyEng';
import TermsPolicyPl from './TermsPolicyPl';

const TermsPolicy = () => {
  const { language } = useSelector(selectLanguage);

  return (
    <>
      {language === 'de' && <TermsPolicyDe />}
      {language === 'en' && <TermsPolicyEng />}
      {language === 'pl' && <TermsPolicyPl />}
    </>
  );
};

export default TermsPolicy;

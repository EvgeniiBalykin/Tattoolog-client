import { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import i18next from 'i18next';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { LANGUAGES, LANGUAGE_LOCAL_STORAGE_KEY } from '@constants/index';
import { saveSelectedLanguage } from '../../i18n';

const LangSwitcher = ({ isSelect }: { isSelect: boolean }) => {
  const initialLang = localStorage.getItem(LANGUAGE_LOCAL_STORAGE_KEY);
  const [selectedLanguage, setSelectedLanguage] = useState(initialLang || 'en');
  const currentDomain = window.location.hostname;
  // TODO: Добавить язык в зависимости от домена
  console.log(currentDomain);

  const handleChange = (event: any) => {
    const newLanguage = event.target.value as string;
    i18next.changeLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
    saveSelectedLanguage(newLanguage);
  };

  return (
    <>
      {isSelect ? (
        <FormControl>
          <Select
            value={selectedLanguage}
            onChange={handleChange}
            displayEmpty
            size="small"
            inputProps={{ 'aria-label': 'Language' }}
          >
            {LANGUAGES.map((lang) => (
              <MenuItem key={lang.code} value={lang.code}>
                {lang.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : (
        <ToggleButtonGroup
          value={selectedLanguage}
          exclusive
          onChange={handleChange}
          aria-label="text alignment"
          fullWidth
          sx={{ marginBottom: 2 }}
        >
          {LANGUAGES.map((lang) => (
            <ToggleButton
              key={lang.code}
              size="small"
              value={lang.code}
              aria-label={lang.name}
            >
              {lang.code}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      )}
    </>
  );
};

export default LangSwitcher;

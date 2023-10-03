import { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import i18next from 'i18next';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { LANGUAGES } from '@constants/index';

const LangSwitcher = ({ isSelect }: { isSelect: boolean }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleChange = (event: any) => {
    const newLanguage = event.target.value as string;
    i18next.changeLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
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

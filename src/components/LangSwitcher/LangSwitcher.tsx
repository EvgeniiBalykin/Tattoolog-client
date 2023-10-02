import { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import i18next from 'i18next';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

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
            <MenuItem value="en">EN</MenuItem>
            <MenuItem value="ru">RU</MenuItem>
            <MenuItem value="ua">UA</MenuItem>
          </Select>
        </FormControl>
      ) : (
        <ToggleButtonGroup
          value={selectedLanguage}
          exclusive
          onChange={handleChange}
          aria-label="text alignment"
          fullWidth
        >
          <ToggleButton size="medium" value="en" aria-label="English">
            EN
          </ToggleButton>
          <ToggleButton size="medium" value="ru" aria-label="Russian">
            RU
          </ToggleButton>
          <ToggleButton size="medium" value="ua" aria-label="Ukrainian">
            UA
          </ToggleButton>
        </ToggleButtonGroup>
      )}
    </>
  );
};

export default LangSwitcher;

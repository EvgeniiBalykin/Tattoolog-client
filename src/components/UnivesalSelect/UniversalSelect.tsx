import {
  Autocomplete,
  Box,
  IconButton,
  TextField,
  Tooltip,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const UniversalSelect = ({
  field,
  fieldsValue,
  setFieldsValue,
  options,
  setCountrySearch,
  setCitySearch,
}: any) => {
  const { t } = useTranslation();

  return (
    <Autocomplete
      disablePortal
      options={options || []}
      value={{
        value: fieldsValue[field.name]?.id,
        label: fieldsValue[field.name]?.value,
      }}
      onChange={(_, value) =>
        setFieldsValue({
          ...fieldsValue,
          [field.name]: {
            value: value?.label || '',
            id: value?.value || undefined,
          },
        })
      }
      renderInput={(params) => (
        <Box display="flex">
          <TextField
            {...params}
            color="secondary"
            variant="outlined"
            value={fieldsValue[field.name]?.value}
            onChange={(e) => {
              setFieldsValue({
                ...fieldsValue,
                [field.name]: { value: e.target.value, id: null },
              });
              if (field.name === 'country') setCountrySearch(e.target.value);
              if (field.name === 'city') setCitySearch(e.target.value);
            }}
            name={field.name}
            size="small"
            InputLabelProps={{}}
          />
          <Box display="flex" sx={{ backgroundColor: '#4A2352' }}>
            <Tooltip title={t(field.label)}>
              <IconButton>{field.icon}</IconButton>
            </Tooltip>
          </Box>
        </Box>
      )}
    />
  );
};

export default UniversalSelect;

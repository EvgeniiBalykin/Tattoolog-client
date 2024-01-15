import {
  Autocomplete,
  Box,
  IconButton,
  TextField,
  Tooltip,
} from '@mui/material';
import {
  useGetAssociationsTypeQuery,
  useGetCityQuery,
  useGetCountryQuery,
} from '@services/toolsApi';
import { ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface IField {
  name: string;
  type: string;
  component?: string;
  icon?: ReactElement;
  label: string;
}

const UniversalSelect = ({
  field,
  fieldsValue,
  setFieldsValue,
  isIcon = true,
  size = 'small',
}: {
  field: IField;
  fieldsValue?: any;
  setFieldsValue?: any;
  isIcon?: boolean;
  size?: 'small' | 'medium';
}) => {
  const { t } = useTranslation();
  const [countrySearch, setCountrySearch] = useState('');
  const [citySearch, setCitySearch] = useState('');
  const { data: Cities } = useGetCityQuery({
    country: countrySearch,
    city: citySearch,
  });
  const { data: Countries } = useGetCountryQuery(countrySearch);
  const { data: associationData } = useGetAssociationsTypeQuery();
  const cityOptions = Cities?.results.map((el) => ({
    label: el.name,
    value: el.id,
  }));
  const countryOptions = Countries?.results.map((el) => ({
    label: el.name,
    value: el.id,
  }));
  const associateOptions = associationData?.map((el) => ({
    label: el.name,
    value: el.id,
  }));
  const switchOptions = (field: string) => {
    switch (field) {
      case 'country':
        return countryOptions;
      case 'city':
        return cityOptions;
      case 'associate':
        return associateOptions;
      default:
        return [];
    }
  };

  return (
    <Autocomplete
      fullWidth
      disablePortal
      options={switchOptions(field.name) || []}
      value={{
        value: fieldsValue[field.name]?.id,
        label: fieldsValue[field.name]?.value,
      }}
      onChange={(_, value) =>
        setFieldsValue({
          ...fieldsValue,
          [field.name]: {
            value: value?.label || '',
            id: value?.value || null,
          },
        })
      }
      renderInput={(params) => (
        <Box display="flex">
          <TextField
            {...params}
            label={t(field.label)}
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
            size={size}
            InputLabelProps={{}}
          />
          {isIcon && (
            <Box display="flex" sx={{ backgroundColor: '#4A2352' }}>
              <Tooltip title={t(field.label)}>
                <IconButton>{field.icon}</IconButton>
              </Tooltip>
            </Box>
          )}
        </Box>
      )}
    />
  );
};

export default UniversalSelect;

import {
  Autocomplete,
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Tooltip,
} from '@mui/material';
import ErrorAlert from 'components/ErrorAlert';
import { MuiTelInput } from 'mui-tel-input';
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  useGetProfileDataQuery,
  useUpdateProfileMutation,
} from 'services/profileApi';
import { useGetCityQuery, useGetCountryQuery } from 'services/toolsApi';
import { toggleAddChange } from 'store/reducers/profileSlice';
import { PROFILE_EDIT_INPUTS } from './constants/inputs';

interface MutateResult {
  data?: any;
  error?: any;
}

interface IState {
  phone_number?: string;
  birthday?: Date;
  adress?: string;
  country?: { value: string; id: number | null };
  city?: { value: string; id: number | null };
  about?: string;
  first_name?: string;
  last_name?: string;
  instagram: string;
  facebook: string;
  pinterest: string;
  tiktok: string;
}

const ProfileEdit = ({ id }: { id: number }) => {
  const { data, refetch } = useGetProfileDataQuery(id);
  const dispatch = useDispatch();
  const [fieldsValue, setFieldsValue] = useState<IState>({
    phone_number: data?.phone_number,
    birthday: data?.birthday,
    adress: '',
    country: { value: '', id: null },
    city: { value: '', id: null },
    about: data?.about,
    first_name: data?.user?.first_name,
    last_name: data?.user?.last_name,
    instagram: '',
    facebook: '',
    pinterest: '',
    tiktok: '',
  });
  const { data: Countries } = useGetCountryQuery(fieldsValue.country?.value);
  const { data: Cities } = useGetCityQuery({
    country: fieldsValue.country?.value,
    city: fieldsValue.city?.value,
  });
  const cityOptions = Cities?.results.map((el) => ({
    label: el.name,
    value: el.id,
  }));
  const countryOptions = Countries?.results.map((el) => ({
    label: el.name,
    value: el.id,
  }));
  const [mutate, { error }] = useUpdateProfileMutation();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFieldsValue({ ...fieldsValue, [name]: value });
  };
  const onSubmit = async () => {
    try {
      const result: MutateResult = await mutate({
        id,
        formData: {
          birthday: fieldsValue.birthday,
          city: fieldsValue.city?.id ? fieldsValue.city.id : null,
          country: fieldsValue.country?.id ? fieldsValue.country.id : null,
          phone_number: fieldsValue.phone_number,
          about: fieldsValue.about,
          user: {
            first_name: fieldsValue.first_name,
            last_name: fieldsValue.last_name,
          },
          social_media_profile: [
            {
              social_media_type: {
                name: 'Instagram',
              },
              link: fieldsValue.instagram,
            },
            {
              social_media_type: {
                name: 'Facebook',
              },
              link: fieldsValue.facebook,
            },
            {
              social_media_type: {
                name: 'TikTok',
              },
              link: fieldsValue.tiktok,
            },
            {
              social_media_type: {
                name: 'Pinterest',
              },
              link: fieldsValue.pinterest,
            },
          ],
        },
      });
      if (result.data) {
        await refetch();
        dispatch(toggleAddChange());
      } else {
        console.log('Произошла ошибка при мутации:', result.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid item xs={12} md={12} padding={2} height="100vh">
      {error && <ErrorAlert error={error} />}
      <Grid container justifyContent="center" gap={4}>
        {PROFILE_EDIT_INPUTS.map((field) => (
          <Grid item xs={12} md={5} key={field.name}>
            {field.component === 'select' ? (
              field.name === 'country' ? (
                <Autocomplete
                  disablePortal
                  options={countryOptions || []}
                  onChange={(_, value) =>
                    setFieldsValue({
                      ...fieldsValue,
                      country: {
                        value: value?.label || '',
                        id: value?.value || null,
                      },
                    })
                  }
                  renderInput={(params) => (
                    <Box display="flex">
                      <TextField
                        {...params}
                        color="secondary"
                        variant="outlined"
                        name={field.name}
                        size="small"
                        InputLabelProps={{}}
                      />
                      <Box display="flex" sx={{ backgroundColor: '#4A2352' }}>
                        <Tooltip title={field.label}>
                          <IconButton>{field.icon}</IconButton>
                        </Tooltip>
                      </Box>
                    </Box>
                  )}
                />
              ) : (
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={cityOptions || []}
                  onChange={(_, value) =>
                    setFieldsValue({
                      ...fieldsValue,
                      city: {
                        value: value?.label || '',
                        id: value?.value || null,
                      },
                    })
                  }
                  renderInput={(params) => (
                    <Box display="flex">
                      <TextField
                        {...params}
                        color="secondary"
                        variant="outlined"
                        name={field.name}
                        onChange={onChange}
                        size="small"
                        InputLabelProps={{}}
                      />

                      <Box display="flex" sx={{ backgroundColor: '#4A2352' }}>
                        <Tooltip title={field.label}>
                          <IconButton>{field.icon}</IconButton>
                        </Tooltip>
                      </Box>
                    </Box>
                  )}
                />
              )
            ) : (
              <Box display="flex">
                {field.type === 'phone' ? (
                  <MuiTelInput
                    fullWidth
                    variant="outlined"
                    size="small"
                    name="phone_number"
                    value={fieldsValue.phone_number}
                    onChange={(newValue) =>
                      setFieldsValue({ ...fieldsValue, phone_number: newValue })
                    }
                  />
                ) : (
                  <TextField
                    color="secondary"
                    type={field.type}
                    name={field.name}
                    onChange={onChange}
                    value={fieldsValue[field.name as keyof IState]}
                    fullWidth
                    variant="outlined"
                    size="small"
                  />
                )}

                <Box display="flex" sx={{ backgroundColor: '#4A2352' }}>
                  <Tooltip title={field.label}>
                    <IconButton>{field.icon}</IconButton>
                  </Tooltip>
                </Box>
              </Box>
            )}
          </Grid>
        ))}
        <Grid item md={11} xs={12}>
          <TextField
            variant="outlined"
            color="secondary"
            label="About"
            name="about"
            value={fieldsValue.about}
            onChange={onChange}
            fullWidth
            multiline
            rows={7}
          />
          <Box display="flex" justifyContent="center" gap={2} mt={2}>
            <Button
              sx={{ width: '50%' }}
              variant="outlined"
              color="success"
              onClick={onSubmit}
            >
              Save
            </Button>
            <Button
              sx={{ width: '50%', borderRadius: '10px' }}
              variant="outlined"
              color="error"
              onClick={() => dispatch(toggleAddChange())}
            >
              Close
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileEdit;

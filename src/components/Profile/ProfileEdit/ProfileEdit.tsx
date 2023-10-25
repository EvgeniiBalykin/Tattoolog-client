import {
  Autocomplete,
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Tooltip,
} from '@mui/material';
import ErrorAlert from '@components/ErrorAlert';
import { MuiTelInput } from 'mui-tel-input';
import { ChangeEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  useGetProfileDataQuery,
  useUpdateProfileMutation,
} from '@services/profileApi';
import { useGetCityQuery, useGetCountryQuery } from '@services/toolsApi';
import {
  initialState,
  IState,
  MutateResult,
  PROFILE_EDIT_INPUTS,
} from './constants/inputs';
import { selectUser } from '@store/reducers/userSlice';
import { useNavigate } from 'react-router';

const ProfileEdit = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useSelector(selectUser);
  const { data, refetch } = useGetProfileDataQuery(id);
  const [fieldsValue, setFieldsValue] = useState<IState>(initialState);
  const currentDate = new Date().toJSON().slice(0, 10);
  const [countrySearch, setCountrySearch] = useState('');
  const [citySearch, setCitySearch] = useState('');
  const { data: Countries } = useGetCountryQuery(countrySearch);
  const [mutate] = useUpdateProfileMutation();
  const [alertMessage, setAlertMessage] = useState('');
  const { data: Cities } = useGetCityQuery({
    country: countrySearch,
    city: citySearch,
  });
  const cityOptions = Cities?.results.map((el) => ({
    label: el.name,
    value: el.id,
  }));
  const countryOptions = Countries?.results.map((el) => ({
    label: el.name,
    value: el.id,
  }));

  useEffect(() => {
    if (data) {
      setFieldsValue({
        phone_number: data?.phone_number,
        birthday: currentDate,
        adress: '',
        country: {
          value: data?.country?.name || '',
          id: data?.country?.id || null,
        },
        city: {
          value: data?.city?.name || '',
          id: data?.city?.id || null,
        },
        about: data?.about,
        first_name: data?.user?.first_name,
        last_name: data?.user?.last_name,
        instagram:
          data?.social_media_profile?.find(
            (profile) => profile?.social_media_type?.name === 'Instagram'
          )?.link || '',
        facebook:
          data?.social_media_profile?.find(
            (profile) => profile?.social_media_type?.name === 'Facebook'
          )?.link || '',
        pinterest:
          data?.social_media_profile?.find(
            (profile) => profile?.social_media_type?.name === 'Pinterest'
          )?.link || '',
        tiktok:
          data?.social_media_profile?.find(
            (profile) => profile?.social_media_type?.name === 'TikTok'
          )?.link || '',
      });
    }
  }, [data]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFieldsValue({ ...fieldsValue, [name]: value });
  };

  const onSubmit = async () => {
    try {
      const result: MutateResult = await mutate({
        id,
        formData: {
          birthday: fieldsValue.birthday || '',
          city: {
            name: fieldsValue.city?.value,
            id: fieldsValue.city?.id,
          },
          country: {
            name: fieldsValue.country?.value,
            id: fieldsValue.country?.id,
          },
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
        navigate(`/profile/${id}`);
      } else {
        setAlertMessage(result.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid item xs={12} md={12} padding={2} height="100%">
      {alertMessage && <ErrorAlert error={alertMessage} />}

      <Grid container justifyContent="center" gap={4}>
        {PROFILE_EDIT_INPUTS.map((field) => (
          <Grid item xs={12} md={5} key={field.name}>
            {field.component === 'select' ? (
              field.name === 'country' ? (
                <Autocomplete
                  disablePortal
                  options={countryOptions || []}
                  value={{
                    value: fieldsValue.country?.id,
                    label: fieldsValue.country?.value,
                  }}
                  onChange={(_, value) =>
                    setFieldsValue({
                      ...fieldsValue,
                      country: {
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
                        value={fieldsValue.country?.value}
                        onChange={(e) => {
                          setFieldsValue({
                            ...fieldsValue,
                            country: { value: e.target.value, id: null },
                          });
                          setCountrySearch(e.target.value);
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
              ) : (
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={cityOptions || []}
                  value={{
                    value: fieldsValue.city?.id,
                    label: fieldsValue.city?.value,
                  }}
                  onChange={(_, value) =>
                    setFieldsValue({
                      ...fieldsValue,
                      city: {
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
                        value={fieldsValue.city?.value}
                        onChange={(e) => {
                          setFieldsValue({
                            ...fieldsValue,
                            city: { value: e.target.value, id: null },
                          });
                          setCitySearch(e.target.value);
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
              )
            ) : (
              <Box display="flex">
                {field.type === 'phone' ? (
                  <MuiTelInput
                    fullWidth
                    variant="outlined"
                    size="small"
                    name="phone_number"
                    value={fieldsValue.phone_number || ''}
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
                  <Tooltip title={t(field.label)}>
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
            label={t('form.about')}
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
              {t('buttons.save')}
            </Button>
            <Button
              sx={{ width: '50%', borderRadius: '10px' }}
              variant="outlined"
              color="error"
              onClick={() => navigate(`/profile/${id}`)}
            >
              {t('buttons.close')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileEdit;

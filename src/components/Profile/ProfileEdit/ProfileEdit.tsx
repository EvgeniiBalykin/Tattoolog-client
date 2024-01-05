import {
  Box,
  Button,
  Checkbox,
  FormLabel,
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
import {
  useGetAssociationsTypeQuery,
  useGetCityQuery,
  useGetCountryQuery,
} from '@services/toolsApi';
import {
  initialState,
  IState,
  MutateResult,
  PROFILE_EDIT_INPUTS,
} from './constants/inputs';
import { selectUser } from '@store/reducers/userSlice';
import { useNavigate } from 'react-router';
import UniversalSelect from '@components/UnivesalSelect/UniversalSelect';
import { selectLogin } from '@store/reducers/loginSlice';

const ProfileEdit = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useSelector(selectUser);
  const { token } = useSelector(selectLogin);
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
  const { data: associationData } = useGetAssociationsTypeQuery();
  const associateOptions = associationData?.map((el) => ({
    label: el.name,
    value: el.id,
  }));

  const cityOptions = Cities?.results.map((el) => ({
    label: el.name,
    value: el.id,
  }));
  const countryOptions = Countries?.results.map((el) => ({
    label: el.name,
    value: el.id,
  }));
  const {
    phone_number,
    country,
    city,
    about,
    user,
    social_media_profile,
    moderation_profile_associate,
  } = data || {};

  useEffect(() => {
    if (data) {
      setFieldsValue({
        associate: {
          value:
            (moderation_profile_associate &&
              moderation_profile_associate[0]?.type?.name) ||
            '',
          id:
            (moderation_profile_associate &&
              moderation_profile_associate[0]?.type?.id) ||
            null,
        },
        phone_number,
        birthday: currentDate,
        adress: '',
        country: {
          value: country?.name || '',
          id: country?.id || null,
        },
        city: {
          value: city?.name || '',
          id: city?.id || null,
        },
        about: about,
        first_name: user?.first_name,
        last_name: user?.last_name,
        instagram:
          social_media_profile?.find(
            (profile) => profile?.social_media_type?.name === 'Instagram'
          )?.link || '',
        facebook:
          social_media_profile?.find(
            (profile) => profile?.social_media_type?.name === 'Facebook'
          )?.link || '',
        pinterest:
          social_media_profile?.find(
            (profile) => profile?.social_media_type?.name === 'Pinterest'
          )?.link || '',
        tiktok:
          social_media_profile?.find(
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
    if (token) {
      try {
        const result: MutateResult = await mutate({
          id,
          token,
          formData: {
            moderation_profile_associate:
              [
                {
                  name: fieldsValue.associate?.value,
                  id: fieldsValue.associate?.id,
                },
              ] || '',
            birthday: fieldsValue.birthday || '',
            city: {
              name: fieldsValue.city?.value,
              id: fieldsValue.city?.id,
            },
            country: {
              name: fieldsValue.country?.value,
              id: fieldsValue.country?.id,
            },
            phone_number: fieldsValue.phone_number || '',
            about: fieldsValue.about || '',
            user: {
              first_name: fieldsValue.first_name || '',
              last_name: fieldsValue.last_name || '',
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
    }
  };

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
    <Grid item xs={12} md={12} padding={2}>
      {alertMessage && <ErrorAlert error={alertMessage} />}
      <Grid container justifyContent="center" gap={4}>
        {PROFILE_EDIT_INPUTS.map((field) => (
          <Grid item xs={12} md={5} key={field.name}>
            <Box display="flex">
              {field.type === 'select' && (
                <UniversalSelect
                  field={field}
                  options={switchOptions(field.name)}
                  fieldsValue={fieldsValue}
                  setFieldsValue={setFieldsValue}
                  setCountrySearch={setCountrySearch}
                  setCitySearch={setCitySearch}
                />
              )}
              {field.type === 'phone' && (
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
              )}
              {field.type === 'checkbox' && (
                <FormLabel>
                  {field.label}
                  <Checkbox
                    color="success"
                    onChange={onChange}
                    title={field.name}
                  />
                </FormLabel>
              )}
              {(field.type === 'text' || field.type === 'date') && (
                <TextField
                  color="secondary"
                  type={field.type}
                  name={field.name}
                  onChange={onChange}
                  value={fieldsValue[field.name as keyof IState]}
                  fullWidth
                  size="small"
                />
              )}
              {field.icon && field.type !== 'select' && (
                <Box display="flex" sx={{ backgroundColor: '#4A2352' }}>
                  <Tooltip title={t(field.label)}>
                    <IconButton>{field.icon}</IconButton>
                  </Tooltip>
                </Box>
              )}
            </Box>
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

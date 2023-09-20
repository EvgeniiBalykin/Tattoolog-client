import {
  Facebook,
  Instagram,
  LocationCity,
  LocationOnRounded,
  Phone,
  PublicRounded,
} from '@mui/icons-material';
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
} from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import { ChangeEvent, ReactElement, useState } from 'react';
import {
  useGetProfileDataQuery,
  useUpdateProfileMutation,
} from 'services/profileApi';
import { useGetCityQuery, useGetCountryQuery } from 'services/toolsApi';

const INPUTS: {
  name: string;
  type: string;
  component?: string;
  icon: ReactElement;
  label: string;
}[] = [
  // {
  //   label: 'Name',
  //   type: 'text',
  //   icon: <Storefront />,
  //   name: 'first_name',
  // },
  // {
  //   label: 'Last name',
  //   type: 'text',
  //   icon: <Storefront />,
  //   name: 'last_name',
  // },
  {
    label: 'Phone Number',
    type: 'phone',
    icon: <Phone />,
    name: 'phone_number',
  },
  {
    label: 'Data of birth',
    type: 'text',
    icon: <Phone />,
    name: 'birthday',
  },
  {
    label: 'Country',
    type: 'text',
    component: 'select',
    icon: <PublicRounded />,
    name: 'country',
  },
  {
    label: 'City',
    type: 'text',
    component: 'select',
    icon: <LocationCity />,
    name: 'city',
  },
  {
    label: 'Adress',
    type: 'text',
    icon: <LocationOnRounded />,
    name: 'adress',
  },
  {
    label: 'Instagram',
    type: 'text',
    icon: <Instagram />,
    name: 'instagram',
  },
  {
    label: 'Facebook',
    type: 'text',
    icon: <Facebook />,
    name: 'facebook',
  },
];

interface IState {
  phone_number?: string;
  birthday?: Date;
  adress?: string;
  country?: { value: string; id: number | null };
  city?: { value: string; id: number | null };
  about?: string;
  // first_name?: string;
  // last_name?: string;
}

const ProfileEdit = ({ id }: { id: number }) => {
  const { data } = useGetProfileDataQuery(id);
  const [fieldsValue, setFieldsValue] = useState<IState>({
    phone_number: data?.phone_number,
    birthday: data?.birthday,
    adress: '',
    country: { value: '', id: null },
    city: { value: '', id: null },
    about: data?.about,
    // first_name: data?.user.first_name,
    // last_name: data?.user.last_name,
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
  const [mutate] = useUpdateProfileMutation();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFieldsValue({ ...fieldsValue, [name]: value });
  };

  const onSubmit = () => {
    mutate({
      id,
      formData: {
        birthday: fieldsValue.birthday,
        city: fieldsValue.city?.id ? fieldsValue.city.id : null,
        country: fieldsValue.country?.id ? fieldsValue.country.id : null,
        phone_number: fieldsValue.phone_number,
        about: fieldsValue.about,
        // user: {
        //   first_name: fieldsValue.first_name,
        //   last_name: fieldsValue.last_name,
        // },
      },
    }).then((res) => console.log(res));
  };

  return (
    <Grid item xs={12} md={8} height="100vh">
      <Grid container justifyContent="center" gap={4}>
        {INPUTS.map((field) => (
          <Grid item xs={12} md={5} key={field.name}>
            {field.component === 'select' ? (
              field.name === 'country' ? (
                <Autocomplete
                  disablePortal
                  options={countryOptions || []}
                  onChange={(e, value) =>
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
                        variant="filled"
                        label={field.label}
                        name={field.name}
                        size="small"
                      />
                      <Box display="flex" sx={{ backgroundColor: '#4A2352' }}>
                        <IconButton>{field.icon}</IconButton>
                      </Box>
                    </Box>
                  )}
                />
              ) : (
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={cityOptions || []}
                  onChange={(e, value) =>
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
                        variant="filled"
                        label={field.label}
                        name={field.name}
                        onChange={onChange}
                        size="small"
                      />
                      <Box display="flex" sx={{ backgroundColor: '#4A2352' }}>
                        <IconButton>{field.icon}</IconButton>
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
                    variant="filled"
                    size="small"
                    value={fieldsValue.phone_number}
                    onChange={(newValue) =>
                      setFieldsValue({ ...fieldsValue, phone_number: newValue })
                    }
                  />
                ) : (
                  <TextField
                    color="secondary"
                    type={field.type}
                    label={field.label}
                    name={field.name}
                    onChange={onChange}
                    value={fieldsValue[field.name]}
                    fullWidth
                    variant="filled"
                    size="small"
                  />
                )}

                <Box display="flex" sx={{ backgroundColor: '#4A2352' }}>
                  <IconButton>{field.icon}</IconButton>
                </Box>
              </Box>
            )}
          </Grid>
        ))}
        <Grid item md={11} xs={12}>
          <TextField
            variant="filled"
            color="secondary"
            label="About"
            value={fieldsValue.about}
            onChange={(e) =>
              setFieldsValue({ ...fieldsValue, about: e.target.value })
            }
            fullWidth
            multiline
            rows={7}
          />
          <Button type="submit" onClick={onSubmit}>
            Update Profile
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileEdit;

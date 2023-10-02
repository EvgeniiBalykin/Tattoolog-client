import {
  Cake,
  Facebook,
  Instagram,
  LocationCity,
  LocationOnRounded,
  MusicNote,
  Phone,
  Pinterest,
  PublicRounded,
  Storefront,
} from '@mui/icons-material';
import i18next from 'i18next';
import { ReactElement } from 'react';

export const PROFILE_EDIT_INPUTS: {
  name: string;
  type: string;
  component?: string;
  icon: ReactElement;
  label: string;
}[] = [
  {
    label: i18next.t('form.name'),
    type: 'text',
    icon: <Storefront />,
    name: 'first_name',
  },
  {
    label: i18next.t('form.surname'),
    type: 'text',
    icon: <Storefront />,
    name: 'last_name',
  },
  {
    label: i18next.t('form.phone'),
    type: 'phone',
    icon: <Phone />,
    name: 'phone_number',
  },
  {
    label: i18next.t('form.birthday'),
    type: 'text',
    icon: <Cake />,
    name: 'birthday',
  },
  {
    label: i18next.t('form.country'),
    type: 'text',
    component: 'select',
    icon: <PublicRounded />,
    name: 'country',
  },
  {
    label: i18next.t('form.city'),
    type: 'text',
    component: 'select',
    icon: <LocationCity />,
    name: 'city',
  },
  {
    label: i18next.t('form.adress'),
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
  {
    label: 'TikTok',
    type: 'text',
    icon: <MusicNote />,
    name: 'tiktok',
  },
  {
    label: 'Pinterest',
    type: 'text',
    icon: <Pinterest />,
    name: 'pinterest',
  },
];

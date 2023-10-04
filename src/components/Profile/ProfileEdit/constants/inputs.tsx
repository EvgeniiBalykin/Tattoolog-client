// import {
//   Cake,
//   Facebook,
//   Instagram,
//   LocationCity,
//   LocationOnRounded,
//   MusicNote,
//   Phone,
//   Pinterest,
//   PublicRounded,
//   Storefront,
// } from '@mui/icons-material';
import i18next from 'i18next';
// import { ReactElement } from 'react';

export const PROFILE_EDIT_INPUTS: {
  name: string;
  type: string;
  component?: string;
  icon: string;
  label: string;
}[] = [
  {
    label: i18next.t('form.name'),
    type: 'text',
    icon: '',
    name: 'first_name',
  },
  {
    label: i18next.t('form.surname'),
    type: 'text',
    icon: '',
    name: 'last_name',
  },
  {
    label: i18next.t('form.phone'),
    type: 'phone',
    icon: '',
    name: 'phone_number',
  },
  {
    label: i18next.t('form.birthday'),
    type: 'text',
    icon: '',
    name: 'birthday',
  },
  {
    label: i18next.t('form.country'),
    type: 'text',
    component: 'select',
    icon: '',
    name: 'country',
  },
  {
    label: i18next.t('form.city'),
    type: 'text',
    component: 'select',
    icon: '',
    name: 'city',
  },
  {
    label: i18next.t('form.adress'),
    type: 'text',
    icon: '',
    name: 'adress',
  },
  {
    label: 'Instagram',
    type: 'text',
    icon: '',
    name: 'instagram',
  },
  {
    label: 'Facebook',
    type: 'text',
    icon: '',
    name: 'facebook',
  },
  {
    label: 'TikTok',
    type: 'text',
    icon: '',
    name: 'tiktok',
  },
  {
    label: 'Pinterest',
    type: 'text',
    icon: '',
    name: 'pinterest',
  },
];

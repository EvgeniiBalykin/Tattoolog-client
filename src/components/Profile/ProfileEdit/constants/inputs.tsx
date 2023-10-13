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
import { ReactElement } from 'react';

export const PROFILE_EDIT_INPUTS: {
  name: string;
  type: string;
  component?: string;
  icon: ReactElement;
  label: string;
}[] = [
  {
    label: 'form.name',
    type: 'text',
    icon: <Storefront />,
    name: 'first_name',
  },
  {
    label: 'form.surname',
    type: 'text',
    icon: <Storefront />,
    name: 'last_name',
  },
  {
    label: 'form.phone',
    type: 'phone',
    icon: <Phone />,
    name: 'phone_number',
  },
  {
    label: 'form.birthday',
    type: 'text',
    icon: <Cake />,
    name: 'birthday',
  },
  {
    label: 'form.country',
    type: 'text',
    component: 'select',
    icon: <PublicRounded />,
    name: 'country',
  },
  {
    label: 'form.city',
    type: 'text',
    component: 'select',
    icon: <LocationCity />,
    name: 'city',
  },
  {
    label: 'form.adress',
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

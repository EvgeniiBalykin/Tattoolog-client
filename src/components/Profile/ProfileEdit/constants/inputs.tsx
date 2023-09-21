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
    label: 'Name',
    type: 'text',
    icon: <Storefront />,
    name: 'first_name',
  },
  {
    label: 'Last name',
    type: 'text',
    icon: <Storefront />,
    name: 'last_name',
  },
  {
    label: 'Phone Number',
    type: 'phone',
    icon: <Phone />,
    name: 'phone_number',
  },
  {
    label: 'Data of birth',
    type: 'text',
    icon: <Cake />,
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

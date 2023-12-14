import {
  Cake,
  CardMembership,
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
  icon?: ReactElement;
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
    type: 'date',
    icon: <Cake />,
    name: 'birthday',
  },
  {
    label: 'form.country',
    type: 'select',
    icon: <PublicRounded />,
    name: 'country',
  },
  {
    label: 'form.city',
    type: 'select',
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
    label: 'form.association',
    type: 'select',
    icon: <CardMembership />,
    name: 'associate',
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

export interface MutateResult {
  data?: any;
  error?: any;
}

export interface IState {
  associate?: { value?: string; id?: number | null };
  phone_number?: string;
  birthday?: Date | string;
  adress?: string;
  country?: { value: string; id?: number | null };
  city?: { value: string; id?: number | null };
  about?: string;
  first_name?: string;
  last_name?: string;
  instagram: string;
  facebook: string;
  pinterest: string;
  tiktok: string;
}

export const initialState: IState = {
  associate: { value: '', id: 0 },
  phone_number: '',
  birthday: '',
  adress: '',
  country: { value: '', id: 0 },
  city: { value: '', id: 0 },
  about: '',
  first_name: '',
  last_name: '',
  instagram: '',
  facebook: '',
  pinterest: '',
  tiktok: '',
};

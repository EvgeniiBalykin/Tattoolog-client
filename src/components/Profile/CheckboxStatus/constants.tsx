import {
  School,
  SchoolTwoTone,
  TravelExplore,
  TravelExploreTwoTone,
  Work,
  WorkOutlineTwoTone,
} from '@mui/icons-material';

export const CHECKBOXES_MASTER = [
  {
    label: 'Open to work',
    name: 'open_to_work',
    icon: <Work />,
    disabledIcon: <WorkOutlineTwoTone />,
  },
  {
    label: 'Mentor',
    name: 'mentor',
    icon: <School />,
    disabledIcon: <SchoolTwoTone />,
  },
  {
    label: 'Open to relocate',
    name: 'relocate',
    icon: <TravelExplore />,
    disabledIcon: <TravelExploreTwoTone />,
  },
];

export const CHECKBOXES_STUDIOS = [
  {
    label: 'Hiring',
    name: 'open_to_work',
    icon: <Work />,
    disabledIcon: <WorkOutlineTwoTone />,
  },
  {
    label: 'Education',
    name: 'mentor',
    icon: <School />,
    disabledIcon: <SchoolTwoTone />,
  },
];

export interface ICheckboxProps {
  isMentor: boolean;
  openToWork: boolean;
  isRelocate: boolean;
  id: number;
  userAccess: boolean;
  role?: 'master' | 'salon';
}

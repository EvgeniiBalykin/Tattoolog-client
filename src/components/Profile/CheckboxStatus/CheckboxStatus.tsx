import {
  School,
  SchoolTwoTone,
  TravelExplore,
  TravelExploreTwoTone,
  Work,
  WorkOutlineTwoTone,
} from '@mui/icons-material';
import { Checkbox, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useUpdateProfileMutation } from '@services/profileApi';
import { selectLogin } from '@store/reducers/loginSlice';
import { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';

const CHECKBOXES = [
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

const CheckboxStatus = ({
  isMentor,
  openToWork,
  isRelocate,
  id,
  userAccess,
}: {
  isMentor: boolean;
  openToWork: boolean;
  isRelocate: boolean;
  id: number;
  userAccess: boolean;
}) => {
  const [updateProfile] = useUpdateProfileMutation();
  const [checkboxValues, setCheckboxValues] = useState<{
    [key: string]: boolean;
  }>({
    open_to_work: openToWork,
    mentor: isMentor,
    relocate: isRelocate,
  });

  const { token } = useSelector(selectLogin);

  const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setCheckboxValues((prevValues: any) => {
      const updatedValues = {
        ...prevValues,
        [name]: checked,
      };
      if (token) {
        updateProfile({ id, formData: updatedValues, token });
      }
      return updatedValues;
    });
  };

  return (
    <Box display="flex" justifyContent="space-around">
      {CHECKBOXES.map((el) => (
        <Box display="flex" flexDirection="column" key={el.name}>
          <Checkbox
            size="small"
            icon={el.disabledIcon}
            checkedIcon={el.icon}
            color="warning"
            name={el.name}
            checked={checkboxValues[el.name]}
            onChange={userAccess ? onCheckboxChange : () => null}
            sx={{
              textAlign: 'center',
              '& .MuiSvgIcon-root': { fontSize: 28 },
              width: '40px',
              margin: '0 auto',
            }}
          />
          <Typography variant="body2">{el.label}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CheckboxStatus;

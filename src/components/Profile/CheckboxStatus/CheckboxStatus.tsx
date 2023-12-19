import { IProfileData } from '@interfaces/index';
import { School, TravelExplore, Work } from '@mui/icons-material';
import { Checkbox, Icon, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useUpdateProfileMutation } from '@services/profileApi';
import { ChangeEvent, useEffect, useState } from 'react';

const CHECKBOXES = [
  {
    label: 'Open to work',
    name: 'open_to_work',
    icon: <Work />,
  },
  {
    label: 'Mentor',
    name: 'mentor',
    icon: <School />,
  },
  {
    label: 'Open to relocate',
    name: 'relocate',
    icon: <TravelExplore />,
  },
];

const CheckboxStatus = ({
  profileData,
  id,
  userAccess,
}: {
  profileData: IProfileData | undefined;
  id: number;
  userAccess: boolean;
}) => {
  const [updateProfile] = useUpdateProfileMutation();
  const [checkboxValues, setCheckboxValues] = useState<{
    [key: string]: boolean | undefined;
  }>({
    open_to_work: false,
    mentor: false,
    relocate: false,
  });

  const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setCheckboxValues((prevValues: any) => {
      const updatedValues = {
        ...prevValues,
        [name]: checked,
      };
      updateProfile({ id, formData: updatedValues });
      return updatedValues;
    });
  };

  useEffect(() => {
    if (profileData) {
      setCheckboxValues({
        open_to_work: profileData.open_to_work,
        mentor: profileData.mentor,
        relocate: profileData.relocate,
      });
    }
  }, [profileData]);

  return (
    <Box display="flex" justifyContent="space-around">
      {CHECKBOXES.map((el) => (
        <Box display="flex" flexDirection="column">
          <Box display="flex" gap={1}>
            <Typography variant="body2">{el.label}</Typography>
            <Icon className="icon" color="warning">
              {el.icon}
            </Icon>
          </Box>
          <Checkbox
            color="secondary"
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
        </Box>
      ))}
    </Box>
  );
};

export default CheckboxStatus;

import CheckboxIcon from '@components/CheckboxIcon/CheckboxIcon';
import { Box } from '@mui/system';
import { useUpdateProfileMutation } from '@services/profileApi';
import { selectLogin } from '@store/reducers/loginSlice';
import { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  CHECKBOXES_MASTER,
  CHECKBOXES_STUDIOS,
  ICheckboxProps,
} from './constants';

const CheckboxStatus = ({
  isMentor,
  openToWork,
  isRelocate,
  id,
  userAccess,
  role,
}: ICheckboxProps) => {
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
    <>
      <Box display="flex" justifyContent="space-around">
        {(role === 'salon' ? CHECKBOXES_STUDIOS : CHECKBOXES_MASTER).map(
          (el) => (
            <CheckboxIcon
              key={el.name}
              icon={el.disabledIcon}
              checkedIcon={el.icon}
              name={el.name}
              checked={checkboxValues[el.name]}
              onChange={onCheckboxChange}
              userAccess={userAccess}
              label={el.label}
            />
          )
        )}
      </Box>
    </>
  );
};

export default CheckboxStatus;

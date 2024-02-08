import { Checkbox, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ChangeEvent, ReactNode } from 'react';

interface ICheckboxIconProps {
  key: string;
  name: string;
  icon: ReactNode;
  checkedIcon: ReactNode;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  userAccess: boolean;
}

const CheckboxIcon = ({
  name,
  icon,
  checkedIcon,
  checked,
  onChange,
  label,
  userAccess,
}: ICheckboxIconProps) => {
  return (
    <Box display="flex" flexDirection="column">
      <Checkbox
        size="small"
        icon={icon}
        checkedIcon={checkedIcon}
        color="warning"
        name={name}
        checked={checked}
        onChange={userAccess ? onChange : () => null}
        sx={{
          textAlign: 'center',
          '& .MuiSvgIcon-root': { fontSize: 28 },
          width: '40px',
          margin: '0 auto',
        }}
      />
      <Typography variant="body2">{label}</Typography>
    </Box>
  );
};

export default CheckboxIcon;

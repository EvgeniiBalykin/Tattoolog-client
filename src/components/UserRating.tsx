import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

interface IRatingProps {
  disabled?: boolean;
  readOnly?: boolean;
}

const BasicRating = ({ disabled, readOnly }: IRatingProps) => {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Box>
      <Rating
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
        disabled={disabled}
        readOnly={readOnly}
      />
    </Box>
  );
};

export default BasicRating;

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { StarBorder, StarRate } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import {
  useGetProfileDataQuery,
  useUpdateProfileRatingMutation,
} from '@services/profileApi';
import { Alert, Snackbar } from '@mui/material';

interface IRatingProps {
  readOnly?: boolean;
  id?: number;
  rating?: number;
}

const UserRating = ({ readOnly = false, id, rating }: IRatingProps) => {
  const [value, setValue] = useState<number | null | undefined>(rating);
  const [updateRating] = useUpdateProfileRatingMutation();
  const { refetch } = useGetProfileDataQuery(Number(id), { skip: !id });
  const [marked, setMarked] = useState(false);
  const isMarked = localStorage.getItem(String(id));
  const [markedMessage, setMarkedMessage] = useState('');

  const markProfile = async () => {
    if (id && value && !isMarked) {
      await updateRating({ profile: id, mark: value });
      await refetch();
      setMarked(true);
      setMarkedMessage('Thank you for mark');
      localStorage.setItem(String(id), 'true');
    } else {
      setMarkedMessage('You already marked this profile');
    }
  };

  const onRatingClick = () => !!isMarked && setMarked(true);

  useEffect(() => {
    markProfile();
  }, [id, value, refetch, updateRating]);

  return (
    <Box>
      {marked && (
        <Snackbar
          open={marked}
          autoHideDuration={3000}
          onClose={() => setMarked(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            severity={isMarked ? 'error' : 'success'}
            sx={{ width: '100%', top: '0' }}
          >
            {markedMessage}
          </Alert>
        </Snackbar>
      )}
      <Rating
        value={rating}
        onChange={(_, newValue) => setValue(newValue)}
        readOnly={readOnly}
        precision={0.5}
        size="large"
        onClick={onRatingClick}
        icon={
          <StarRate
            style={{ opacity: 1, color: '#cd7f32' }}
            fontSize="inherit"
          />
        }
        emptyIcon={
          <StarBorder
            style={{ opacity: 1, color: '#cd7f32' }}
            fontSize="inherit"
          />
        }
      />
    </Box>
  );
};

export default UserRating;

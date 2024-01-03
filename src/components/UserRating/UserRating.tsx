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
  rating: number | null;
}

const UserRating = ({ readOnly = false, id, rating }: IRatingProps) => {
  const [updateRating] = useUpdateProfileRatingMutation();
  const { refetch } = useGetProfileDataQuery(Number(id), { skip: !id });
  const [isMarked, setIsMarked] = useState(false);
  const [markedMessage, setMarkedMessage] = useState('');

  const markProfile = async (value: number | null) => {
    if (id && value) {
      await updateRating({ profile: id, mark: value });
      refetch();
      setMarkedMessage('Thank you for mark');
      setIsMarked(true);
      localStorage.setItem(String(id), 'true');
    }
  };

  useEffect(() => {
    setIsMarked(!!localStorage.getItem(String(id)));
  }, [localStorage, id]);

  return (
    <Box>
      {!!markedMessage && (
        <Snackbar
          open={!!markedMessage}
          autoHideDuration={3000}
          onClose={() => setIsMarked(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert severity={'success'} sx={{ width: '100%', top: '0' }}>
            {markedMessage}
          </Alert>
        </Snackbar>
      )}
      <Rating
        value={rating}
        onChange={(_, newValue) => markProfile(newValue)}
        readOnly={readOnly || !!isMarked}
        precision={0.5}
        size="large"
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

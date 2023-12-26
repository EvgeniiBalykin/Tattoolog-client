import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

const LoadingProcess = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
};

export default LoadingProcess;

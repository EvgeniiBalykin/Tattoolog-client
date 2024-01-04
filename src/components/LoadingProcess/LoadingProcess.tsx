import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

const LoadingProcess = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default LoadingProcess;

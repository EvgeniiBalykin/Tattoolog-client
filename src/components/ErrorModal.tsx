import { Alert, AlertTitle, Box } from '@mui/material';

interface ErrorAlertProps {
  title?: string;
  message: string;
  severity?: 'error' | 'warning' | 'info' | 'success';
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({
  title = 'Error',
  message,
  severity = 'error',
}) => {
  return (
    <Box mb={2}>
      <Alert severity={severity}>
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </Box>
  );
};

export default ErrorAlert;

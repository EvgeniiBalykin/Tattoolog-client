import { Alert, Snackbar } from '@mui/material';
import { useState } from 'react';

interface ErrorData {
  [key: string]: string[];
}

const ErrorAlert = ({ error }: { error: any }) => {
  const errorData = error?.data as ErrorData;
  const errorText = errorData && Object.entries(errorData)[0][0];
  const [alert, setAlert] = useState(!!errorText);

  return errorText ? (
    <Snackbar
      open={alert}
      autoHideDuration={6000}
      onClose={() => setAlert(false)}
    >
      <Alert
        onClose={() => setAlert(false)}
        severity="error"
        sx={{ width: '100%' }}
        variant="standard"
      >
        {errorText} should be changed!
      </Alert>
    </Snackbar>
  ) : null;
};

export default ErrorAlert;

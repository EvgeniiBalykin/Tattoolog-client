import { Alert } from '@mui/material';

interface ErrorData {
  [key: string]: string[];
}

const ErrorAlert = ({ error }: { error: any }) => {
  const errorData = error?.data as ErrorData;
  const errorText = errorData && Object.entries(errorData)[0]?.[1][0];

  return errorText ? <Alert severity="error">{errorText}</Alert> : null;
};

export default ErrorAlert;

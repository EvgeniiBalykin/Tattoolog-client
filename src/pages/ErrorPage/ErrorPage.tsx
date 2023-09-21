import { Box, Container, Typography, Button } from '@mui/material';
import './ErrorPage.scss';

const ErrorPage = () => {
  return (
    <Box className="error-container">
      <Container maxWidth="md" className="content">
        <Typography className="error">404</Typography>
        <Typography variant="h5" mb={1} textAlign="center">
          Попробуйте обновить страницу позже.
        </Typography>
        <Typography variant="h5" mb={2} textAlign="center">
          Если ошибка повторяется - напишите нам об этом на ...
        </Typography>
        <Button variant="outlined" size="large">
          Перейти на главную
        </Button>
      </Container>
    </Box>
  );
};

export default ErrorPage;

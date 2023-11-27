import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router';
import './ErrorPage.scss';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Box className="error-container">
      <Container maxWidth="md" className="content">
        <Typography className="error">404</Typography>
        <Typography pb={2} variant="h1" mb={1} textAlign="center">
          Not found
        </Typography>
        <Button variant="outlined" size="large" onClick={() => navigate('/')}>
          Перейти на главную
        </Button>
      </Container>
    </Box>
  );
};

export default ErrorPage;

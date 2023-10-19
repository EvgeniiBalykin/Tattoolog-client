import { Typography, Container, Button, Alert, Snackbar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectUser } from '@store/reducers/userSlice';
import './JoinNow.scss';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const JointNow = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useSelector(selectUser);
  const [alert, setAlert] = useState(false);
  const onJoinClick = () => (id ? setAlert(true) : navigate('/signin'));

  return (
    <Container
      data-testid="test-container"
      className="join-now-wrapper"
      maxWidth="lg"
    >
      {alert && (
        <Snackbar
          open={alert}
          autoHideDuration={6000}
          onClose={() => setAlert(false)}
        >
          <Alert
            onClose={() => setAlert(false)}
            severity="success"
            sx={{ width: '100%' }}
            variant="standard"
          >
            {t('registration.already_with_us')}
          </Alert>
        </Snackbar>
      )}
      <Typography variant="h1">{t(title)}</Typography>
      <Typography variant="h4" mb={4}>
        {t(subtitle)}
      </Typography>
      <Button color="info" variant="contained" onClick={onJoinClick}>
        {t('buttons.join')}
      </Button>
    </Container>
  );
};

export default JointNow;

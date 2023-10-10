import { Typography, Container, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './JoinNow.scss';

const JointNow = () => {
  const { t } = useTranslation();
  return (
    <Container
      data-testid="test-container"
      className="join-now-wrapper"
      maxWidth="lg"
    >
      <Typography variant="h1">{t('pages.ready_to_join')}</Typography>
      <Typography variant="h4" mb={4}>
        The cult of tattoo legends — where innovation meets inspiration and
        forever transforms your body canvas. Escape into the immersive realm of
        artistic odysseys and treasure the opportunity to adorn your skin with
        timeless masterpieces.
      </Typography>
      <Button color="info" variant="contained">
        {t('buttons.join')}
      </Button>
    </Container>
  );
};

export default JointNow;

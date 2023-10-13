import { Typography, Container, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './JoinNow.scss';

const JointNow = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const { t } = useTranslation();
  return (
    <Container
      data-testid="test-container"
      className="join-now-wrapper"
      maxWidth="lg"
    >
      <Typography variant="h1">{t(title)}</Typography>
      <Typography variant="h4" mb={4}>
        {t(subtitle)}
      </Typography>
      <Button color="info" variant="contained">
        {t('buttons.join')}
      </Button>
    </Container>
  );
};

export default JointNow;

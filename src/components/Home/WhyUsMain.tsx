import { Box, Container, Grid, Typography } from '@mui/material';
import DescriptionIcons from '@components/DescriptionIcons/DescriptionIcons';
import { WHY_US_ICONS } from '@pages/HomePage/contants';
import { useTranslation } from 'react-i18next';

const WhyUsMain = () => {
  const { t } = useTranslation();
  return (
    <Box className="wrapper">
      <Container maxWidth="lg">
        <Typography variant="h1" textAlign="center" textTransform="uppercase">
          {t('pages.why_us')}
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, sm: 8, md: 3 }}
          justifyContent="center"
        >
          {WHY_US_ICONS.map((el, index) => (
            <DescriptionIcons
              key={index}
              icon={el.icon}
              title={t(el.title)}
              subtitle={t(el.subtitle)}
              xs={14}
              sm={4}
              md={4}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyUsMain;

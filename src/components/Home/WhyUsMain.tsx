import { Box, Container, Grid, Typography } from '@mui/material';
import DescriptionIcons from '@components/DescriptionIcons/DescriptionIcons';
import { WHY_US_ICONS } from '@pages/HomePage/contants';
import { useTranslation } from 'react-i18next';

const WhyUsMain = () => {
  const { t } = useTranslation();
  return (
    <Box className="wrapper-reverse">
      <Container maxWidth="xl">
        <Typography variant="h1" textAlign="center" textTransform="uppercase">
          {t('pages.why_us')}
        </Typography>
        <Container maxWidth="lg" sx={{ mb: 10 }}>
          <Typography variant="h5" textAlign="center">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus.
          </Typography>
        </Container>
        <Grid
          container
          spacing={{ xs: 2, sm: 8, md: 3 }}
          justifyContent="center"
        >
          {WHY_US_ICONS.map((el, index) => (
            <DescriptionIcons
              key={index}
              icon={el.icon}
              subtitle={el.subtitle}
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

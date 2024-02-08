import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { AboutImg_2, AboutImg_1 } from '@images/index';
import theme from '@ui/theme/theme';

const AboutMain = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const reverseGrid = useMemo(
    () => (isMobile ? 'column-reverse' : undefined),
    [isMobile]
  );
  const { t } = useTranslation();

  return (
    <Box className="wrapper">
      <Container component="main">
        <Typography variant="h1" textAlign="center" textTransform="uppercase">
          {t('pages.about')}
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, sm: 8, md: 3 }}
          justifyContent="center"
        >
          <Grid item xs={12} sm={6} md={6}>
            <div className="img-wrapper">
              <img src={AboutImg_2} alt="about-img" loading="lazy" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className="text-wrapper">
              <Typography variant="h2">
                {t('pages.main.about_block.title_1')}
              </Typography>
              <Typography variant="h5" textAlign="start">
                {t('pages.main.about_block.subtitle_1')}
              </Typography>
              <Typography variant="h5" textAlign="start">
                {t('pages.main.about_block.subtitle_1_2')}
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid
          className="second-grid"
          container
          spacing={{ xs: 2, sm: 8, md: 3 }}
          justifyContent="center"
          flexDirection={reverseGrid}
        >
          <Grid item xs={12} sm={6} md={6}>
            <div className="text-wrapper">
              <Typography variant="h2">
                {t('pages.main.about_block.title_2')}
              </Typography>
              <Typography variant="h5" textAlign="start">
                {t('pages.main.about_block.subtitle_2')}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className="img-wrapper">
              <img src={AboutImg_1} loading="lazy" alt="about-img" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutMain;

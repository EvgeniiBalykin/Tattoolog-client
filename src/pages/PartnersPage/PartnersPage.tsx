import { Container, Grid, Icon, Tab, Tabs, Typography } from '@mui/material';
import PartnersCard from '@components/PartnersCard/PartnersCard';
import { useGetPartnersQuery } from '@services/toolsApi';
import { PARTNERS_DESCRIPTION } from './partnersDescription';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const PartnersPage = () => {
  const { data } = useGetPartnersQuery();
  const [value, setValue] = useState('project');
  const handleChange = (_: any, newValue: string) => {
    setValue(newValue);
  };
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="standard"
        textColor="secondary"
        indicatorColor="secondary"
        centered
        sx={{ width: '100%', mb: 5 }}
      >
        <Tab value="project" label={t('pages.shop.projects')} />
        <Tab value="store" label={t('pages.shop.shop')} />
      </Tabs>
      <Typography textAlign="center" variant="h1" mb={5}>
        {value === 'project'
          ? t('pages.shop.partners_title')
          : t('pages.shop.title')}
      </Typography>
      <Grid container mb={10} spacing={2} justifyContent="space-around">
        {value === 'project' ? (
          PARTNERS_DESCRIPTION.map((el) => (
            <Grid item xs={6} md={4} textAlign="center">
              <div
                style={{
                  backgroundColor: 'rgba(168, 168, 168, 0.2)',
                  borderRadius: '15px',
                  height: '100%',
                  maxHeight: '120px',
                }}
              >
                <Icon fontSize="large" color="secondary">
                  {el.title}
                </Icon>
                <Typography
                  mt={1}
                  p="0 5px 5px 5px"
                  textAlign="center"
                  variant="h6"
                >
                  {t(el.subtitle)}
                </Typography>
              </div>
            </Grid>
          ))
        ) : (
          <Grid
            item
            xs={11}
            md={11}
            textAlign="center"
            sx={{
              backgroundColor: 'rgba(168, 168, 168, 0.2)',
              borderRadius: '15px',
              padding: '20px',
              margin: '0 auto',
            }}
          >
            <Typography mt={1} textAlign="center" variant="h5">
              {t('pages.shop.subtitle')}
            </Typography>
          </Grid>
        )}
      </Grid>
      <Grid container gap={8} mb={8} justifyContent="space-around">
        {data
          ?.filter((el) => el.type === value)
          .map((el, index) => (
            <PartnersCard
              key={index}
              logo={el.logo}
              link={el.link}
              name={el.name}
            />
          ))}
      </Grid>
    </Container>
  );
};

export default PartnersPage;

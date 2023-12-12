import { Container, Grid, Icon, Typography } from '@mui/material';
import PartnersCard from '@components/PartnersCard/PartnersCard';
import { useGetPartnersQuery } from '@services/toolsApi';
import { PARTNERS_DESCRIPTION } from './partnersDescription';
import { useTranslation } from 'react-i18next';

const PartnersPage = () => {
  const { data } = useGetPartnersQuery();
  const { t } = useTranslation();
  return (
    <Container maxWidth="xl">
      <Typography textAlign="center" variant="h1" mb={5}>
        Our Partners
      </Typography>
      <Grid container mb={10} spacing={2} justifyContent="space-around">
        {PARTNERS_DESCRIPTION.map((el) => (
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
        ))}
      </Grid>
      <Grid container gap={8} mb={8} justifyContent="space-around">
        {data?.map((el, index) => (
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

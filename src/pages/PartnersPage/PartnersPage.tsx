import { Container, Grid, Typography } from '@mui/material';
import PartnersCard from '@components/PartnersCard/PartnersCard';
import { useGetPartnersQuery } from '@services/toolsApi';

const PartnersPage = () => {
  const { data } = useGetPartnersQuery();
  return (
    <Container maxWidth="xl">
      <Typography textAlign="center" variant="h1">
        Our Partners
      </Typography>
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

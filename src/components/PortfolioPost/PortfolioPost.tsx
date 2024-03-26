import { IProfilePost } from '@interfaces/index';
import { Container, Grid, Typography } from '@mui/material';
import { ReactElement, useMemo } from 'react';
import AliceCarousel from 'react-alice-carousel';

const PortfolioPost_2 = ({ data }: { data?: IProfilePost }) => {
  const SliderItems = useMemo((): ReactElement<string, string>[] => {
    if (data) {
      return data.photo_post.map((el) => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              backgroundImage: `url(${el.photo})`,
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              height: '30rem',
              width: '30rem',
            }}
          />
        </div>
      ));
    }
    return [];
  }, [data]);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <AliceCarousel mouseTracking items={SliderItems} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" marginBottom={5} color="pink">
            {' '}
            {data?.work_type?.name}
          </Typography>
          <Typography variant="h5" textAlign="justify">
            {data?.description}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PortfolioPost_2;

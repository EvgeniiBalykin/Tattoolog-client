import { Box, Grid } from '@mui/material';
import { IPartnersData } from 'types';

const PartnersCard = ({ logo, link }: IPartnersData) => {
  return (
    <Grid item sm={1} md={4}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <img
          src={logo}
          width="200px"
          height="100px"
          onClick={() => window.open(link)}
          style={{ cursor: 'pointer' }}
        />
      </Box>
    </Grid>
  );
};

export default PartnersCard;

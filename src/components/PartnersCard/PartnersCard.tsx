import { Box, Grid } from '@mui/material';
import { IPartnersData } from '@interfaces/index';

const PartnersCard = ({ logo, link }: IPartnersData) => {
  return (
    <Grid item sm={1} md={3}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <img
          src={logo}
          width="200px"
          height="200px"
          onClick={() => window.open(link)}
          style={{ cursor: 'pointer', backgroundColor: 'white' }}
        />
      </Box>
    </Grid>
  );
};

export default PartnersCard;

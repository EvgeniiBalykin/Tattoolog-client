import { Grid, Box, Container, Typography } from '@mui/material';
import { IDescriptionIcons } from '@interfaces/index';
import './DescriptionIcons.scss';

const DescriptionIcons = ({
  icon,
  title,
  subtitle,
  md,
  sm,
  xs,
}: IDescriptionIcons) => {
  return (
    <Grid item xs={xs} sm={sm} md={md}>
      <Box className="img-wrapper">
        <img src={icon} />
      </Box>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        {title && (
          <Typography variant="h2" fontWeight="bold" textAlign="center">
            {title}
          </Typography>
        )}
        <Typography variant="h5" textAlign="center">
          {subtitle}
        </Typography>
      </Container>
    </Grid>
  );
};

export default DescriptionIcons;

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
        <img src={icon} alt="icon-img" />
      </Box>
      <Container maxWidth="md" sx={{ mt: 2 }}>
        {title && (
          <Typography mb={2} variant="h3" fontWeight="bold" textAlign="center">
            {title}
          </Typography>
        )}
        <Typography variant="h5" textAlign="justify">
          {subtitle}
        </Typography>
      </Container>
    </Grid>
  );
};

export default DescriptionIcons;

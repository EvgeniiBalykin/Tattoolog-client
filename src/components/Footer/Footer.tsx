import { Instagram, Facebook, YouTube } from '@mui/icons-material';
import { Container, Box, Button, Typography, Grid } from '@mui/material';
import i18next from 'i18next';
import { Logo } from 'images/index';
import { Link } from 'react-router-dom';
import { HEADER_ROUTES } from 'routes/HeaderRoutes';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <Container maxWidth="lg" className="footer">
        <Box component={Link} to={'/'} mb={2}>
          <img src={Logo} />
        </Box>

        <Grid
          container
          spacing={{ xs: 1, sm: 1, md: 2 }}
          justifyContent="center"
          mb={2}
        >
          {HEADER_ROUTES.map((route) => (
            <Grid
              key={route.name}
              item
              xs={12}
              sm={12}
              md={2}
              textAlign="center"
            >
              <Button
                component={Link}
                to={route.path}
                key={route.path}
                variant="text"
                size="small"
              >
                {i18next.t(route.name)}
              </Button>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', gap: '25px' }} mb={2}>
          <Instagram color="action" fontSize="large" />
          <Facebook color="action" fontSize="large" />
          <YouTube color="action" fontSize="large" />
        </Box>
        <Container maxWidth="xs">
          <Typography variant="body2" textAlign="center">
            1717 Harrison St, San Francisco, CA 94103, USA
          </Typography>
          <Typography variant="body2" textAlign="center">
            © 2022 Your Company. All rights reserved.
          </Typography>
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;

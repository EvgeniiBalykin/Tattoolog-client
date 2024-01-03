import { Instagram, Facebook, Email } from '@mui/icons-material';
import {
  Container,
  Box,
  Button,
  Typography,
  Grid,
  IconButton,
} from '@mui/material';
import { LogoImg } from '@images/index';
import { Link } from 'react-router-dom';
import { HEADER_ROUTES } from '@routes/HeaderRoutes';
import './Footer.scss';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer-wrapper">
      <Container maxWidth="lg" className="footer">
        <Box component={Link} to={'/'} mb={2}>
          <img src={LogoImg} alt="company-logo" width="260px" height="60px" />
        </Box>

        <Grid
          container
          spacing={{ xs: 1, sm: 1, md: 2 }}
          justifyContent="center"
          mb={2}
        >
          {HEADER_ROUTES.map((route) => (
            <Grid
              data-testid="links-test"
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
                {t(route.name)}
              </Button>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', gap: '25px' }} mb={2}>
          <IconButton
            href="https://www.instagram.com/tattoolog_eu/"
            target="_blank"
          >
            <Instagram color="action" fontSize="large" />
          </IconButton>
          <IconButton
            href="https://www.facebook.com/people/Tattoolog-EU/61553526006018/?is_tour_completed=true"
            target="_blank"
          >
            <Facebook color="action" fontSize="large" />
          </IconButton>
          <IconButton href="mailto:tattoolog.eu@gmail.com" target="_blank">
            <Email color="action" fontSize="large" />
          </IconButton>
        </Box>
        <Container maxWidth="xs">
          <Typography variant="body2" textAlign="center">
            © 2023 Tattoolog. All rights reserved.
          </Typography>
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;

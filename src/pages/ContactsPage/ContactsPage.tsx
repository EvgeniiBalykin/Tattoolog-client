import transition from '@helpers/transitions/transitions';
import { Email, Facebook, Instagram } from '@mui/icons-material';
import { Box, Container, IconButton, Typography } from '@mui/material';
import './ContactsPage.scss';

const contacts = [
  {
    name: '@tattoolog_eu',
    link: 'https://www.instagram.com/tattoolog_eu/',
    icon: (
      <Instagram
        sx={{
          maxWidth: '2em',
          maxHeight: '2em',
          width: '100%',
          height: '100%',
        }}
      />
    ),
    onClick: () => window.open('https://www.instagram.com/tattoolog_eu/'),
  },
  {
    name: 'Tattoolog EU',
    link: 'https://www.facebook.com/people/Tattoolog-EU/61553526006018/?is_tour_completed=true',
    icon: (
      <Facebook
        sx={{
          maxWidth: '2em',
          maxHeight: '2em',
          width: '100%',
          height: '100%',
        }}
      />
    ),
    onClick: () =>
      window.open(
        'https://www.facebook.com/people/Tattoolog-EU/61553526006018/?is_tour_completed=true'
      ),
  },
  {
    name: 'tattoolog.eu@gmail.com',
    link: 'tattoolog.eu@gmail.com',
    icon: (
      <Email
        sx={{
          maxWidth: '2em',
          maxHeight: '2em',
          width: '100%',
          height: '100%',
        }}
      />
    ),
    onClick: () => window.open('mailto:tattoolog.eu@gmail.com'),
  },
];

const ContactsPage = () => {
  return (
    <Container maxWidth="xl" className="contacts">
      <Typography textAlign="center" variant="h1">
        Contact us
      </Typography>
      {contacts.map((el) => (
        <Box className="contacts__box" maxWidth={400}>
          <IconButton className="contacts__icon" onClick={el.onClick}>
            {el.icon}
          </IconButton>
          <Typography variant="h4" className="contacts__name">
            {el.name}
          </Typography>
        </Box>
      ))}
    </Container>
  );
};

export default transition(ContactsPage);

import { Box, Container, Grid, TextField, Typography } from '@mui/material';

const INPUTS: { name: string; type: string }[] = [
  {
    name: 'Phone Number',
    type: 'number',
  },
  {
    name: 'Age',
    type: 'text',
  },
  {
    name: 'Email',
    type: 'email',
  },
  {
    name: 'Country',
    type: 'text',
  },
  {
    name: 'City',
    type: 'text',
  },
  {
    name: 'Adress',
    type: 'text',
  },
  {
    name: 'My studio name',
    type: 'text',
  },
  {
    name: 'Instagram',
    type: 'text',
  },
  {
    name: 'Facebook',
    type: 'text',
  },
  {
    name: 'Pinterest',
    type: 'text',
  },
  {
    name: 'TikTok',
    type: 'text',
  },
];

const ProfileEdit = () => {
  return (
    <Grid item xs={12} md={8}>
      {INPUTS.map((field) => (
        <Container
          maxWidth="md"
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Box width={'30%'}>
            <Typography variant="h6">{field.name}</Typography>{' '}
          </Box>
          <Box width={'70%'}>
            <TextField
              variant="filled"
              type={field.type}
              fullWidth
              size="small"
            />
          </Box>
        </Container>
      ))}
    </Grid>
  );
};

export default ProfileEdit;

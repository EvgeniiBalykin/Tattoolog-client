import { createTheme } from '@mui/material/styles';
import { COLORS } from '@ui/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4A2352',
    },
  },
  typography: {
    fontFamily: 'PT Sans, sans-serif;',
    h1: {
      fontSize: '48px',
      fontWeight: 600,
      marginBottom: '60px',
      color: 'white',
    },
    h2: {
      fontSize: '36px',
      fontWeight: 500,
      color: 'white',
    },
    h3: {
      fontSize: '28px',
      fontWeight: 400,
      color: 'white',
    },
    h4: {
      fontSize: '20px',
      fontWeight: 400,
      color: 'white',
    },
    h5: {
      fontSize: '16px',
      fontWeight: 400,
      color: 'white',
    },
    h6: {
      fontSize: '14px',
      fontWeight: 500,
      color: 'white',
    },
    body1: {
      fontSize: '18px',
      fontWeight: 400,
      color: 'white',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      color: 'white',
    },
    caption: {
      fontSize: '12px',
      fontWeight: 400,
      color: 'white',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            backgroundColor: COLORS.PRIMARY,
            color: 'white',
            border: 'none',
            ':hover': {
              backgroundColor: '#6C3483',
            },
          },
        },
        {
          props: { variant: 'contained', color: 'info' },
          style: {
            backgroundColor: 'white',
            color: 'black',
            border: 'none',
            ':hover': {
              backgroundColor: '#6C3483',
              color: 'white',
            },
          },
        },
        {
          props: {
            variant: 'contained',
            color: 'primary',
            size: 'large',
          },
          style: {
            backgroundColor: COLORS.PRIMARY,
            color: 'white',
            border: 'none',
            padding: '10px 30%',
            borderRadius: '10px',
            fontWeight: 700,
            ':hover': {
              backgroundColor: '#6C3483',
            },
          },
        },
        {
          props: { variant: 'contained', color: 'primary', size: 'medium' },
          style: {
            backgroundColor: COLORS.PRIMARY,
            color: 'white',
            border: 'none',
            padding: '5px 10%',
            borderRadius: '10px',
            fontWeight: 500,
            ':hover': {
              backgroundColor: '#6C3483',
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'primary', size: 'large' },
          style: {
            backgroundColor: 'transparent',
            color: 'white',
            border: '1px solid white',
            ':hover': {
              backgroundColor: 'white',
              color: 'black',
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'primary', size: 'medium' },
          style: {
            backgroundColor: 'transparent',
            color: 'white',
            padding: '5px 10%',
            borderRadius: '10px',
            fontWeight: 500,
            border: '1px solid white',
            ':hover': {
              backgroundColor: 'white',
              color: 'black',
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'primary', size: 'small' },
          style: {
            backgroundColor: 'transparent',
            color: 'white',
            padding: '5px 15px',
            borderRadius: '10px',
            fontWeight: 500,
            border: '1px solid white',
            ':hover': {
              backgroundColor: 'white',
              color: 'black',
            },
          },
        },
        {
          props: { variant: 'text', color: 'primary', size: 'small' },
          style: {
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            fontWeight: 400,
            fontFamily: 'Roboto',
            ':hover': {
              backgroundColor: 'white',
              color: 'black',
            },
          },
        },
      ],
      styleOverrides: {
        containedPrimary: {
          color: 'white',
        },
        containedSecondary: {
          color: 'black',
        },
      },
    },
  },
});

const mobileFontSizes = {
  h1: '36px',
  h2: '32px',
  h3: '28px',
  h4: '20px',
  h5: '18px',
  h6: '16px',
  body1: '20px',
  body2: '14px',
  caption: '12px',
};

for (const key in mobileFontSizes) {
  const typographyKey = key as keyof typeof mobileFontSizes;
  theme.typography[typographyKey]['@media (max-width: 800px)'] = {
    fontSize: mobileFontSizes[typographyKey],
  };
}

export default theme;

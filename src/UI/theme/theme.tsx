import { createTheme } from '@mui/material/styles';
import { COLORS } from '@ui/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4A2352',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 990,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: 'PT Sans, sans-serif',
    h1: {
      fontSize: '3em',
      fontWeight: 600,
      marginBottom: '2em',
      color: 'white',
    },
    h2: {
      fontSize: '2.25em',
      fontWeight: 500,
      color: 'white',
    },
    h3: {
      fontSize: '1.75em',
      fontWeight: 400,
      color: 'white',
    },
    h4: {
      fontSize: '1.25em',
      fontWeight: 400,
      color: 'white',
    },
    h5: {
      fontSize: '1em',
      fontWeight: 400,
      color: 'white',
    },
    h6: {
      fontSize: '0.875em',
      fontWeight: 500,
      color: 'white',
    },
    body1: {
      fontSize: '1.125em',
      fontWeight: 400,
      color: 'white',
    },
    body2: {
      fontSize: '0.875em',
      fontWeight: 400,
      color: 'white',
    },
    caption: {
      fontSize: '0.75em',
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
            fontFamily: 'PT Sans, sans-serif;',
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
  h1: '2.25em',
  h2: '2em',
  h3: '1.75em',
  h4: '1.25em',
  h5: '1em',
  h6: '0.875em',
  body1: '1.25em',
  body2: '0.875em',
  caption: '0.75em',
};

for (const key in mobileFontSizes) {
  const typographyKey = key as keyof typeof mobileFontSizes;
  theme.typography[typographyKey]['@media (max-width: 800px)'] = {
    fontSize: mobileFontSizes[typographyKey],
  };
}

export default theme;

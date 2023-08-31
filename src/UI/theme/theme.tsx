import { createTheme } from '@mui/material/styles';
import { COLORS } from 'ui/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0B0B0B',
    },
  },
  typography: {
    fontFamily: 'Gotham Black',
    h1: {
      fontSize: '64px',
      fontWeight: 500,
      marginBottom: '60px',
      color: 'white',
    },
    h2: {
      fontSize: '48px',
      fontWeight: 500,
      color: 'white',
    },
    h3: {
      fontSize: '36px',
      fontWeight: 500,
      color: 'white',
    },
    h4: {
      fontSize: '20px',
      fontWeight: 500,
      color: 'white',
    },
    h5: {
      fontSize: '16px', // Размер для h5
      fontWeight: 400,
      color: 'white',
    },
    h6: {
      fontSize: '14px', // Размер для h6
      fontWeight: 500,
      color: 'white',
    },
    body1: {
      fontSize: '24px', // Размер для параграфов
      fontWeight: 400, // Обычный шрифт
      color: 'white',
    },
    body2: {
      fontSize: '14px', // Размер для меньших параграфов
      fontWeight: 400,
      color: 'white',
    },
    caption: {
      fontSize: '12px', // Размер для подписей или мелкого текста
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
          props: { variant: 'contained', color: 'primary', size: 'large' },
          style: {
            backgroundColor: COLORS.PRIMARY,
            color: 'white',
            border: 'none',
            fontSize: '24px',
            padding: '10px 115px',
            borderRadius: '10px',
            fontWeight: 700,
            ':hover': {
              backgroundColor: '#6C3483',
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'primary' },
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
          props: { variant: 'text', color: 'primary' }, // Применяется, когда вы используете variant="custom3"
          style: {
            backgroundColor: 'transparent', // Прозрачный фон для третьей кнопки
            color: 'white', // Цвет текста для третьей кнопки
            border: 'none', // Убрать границу для третьей кнопки
            ':hover': {
              backgroundColor: 'white', // Изменения при наведении
              color: 'black', // Изменение цвета текста при наведении
            },
          },
        },
      ],
      styleOverrides: {
        containedPrimary: {
          color: 'white', // Изменяет цвет текста для primary кнопок
        },
        containedSecondary: {
          color: 'black', // Изменяет цвет текста для secondary кнопок
        },
        // Другие стили по вашему выбору
      },
    },
  },
});

export default theme;

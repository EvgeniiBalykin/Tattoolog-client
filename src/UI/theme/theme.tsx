import { createTheme } from '@mui/material/styles';
import { COLORS } from 'ui/colors';

const theme = createTheme({
  typography: {
    fontFamily: 'Gotham Black',
    h1: {
      fontSize: '64px',
      fontWeight: 500,
      marginBottom: '60px',
    },
    h2: {
      fontSize: '48px',
      fontWeight: 500,
    },
    h3: {
      fontSize: '36px',
      fontWeight: 500,
    },
    h4: {
      fontSize: '20px',
      fontWeight: 500,
    },
    h5: {
      fontSize: '16px', // Размер для h5
      fontWeight: 500,
    },
    h6: {
      fontSize: '14px', // Размер для h6
      fontWeight: 500,
    },
    body1: {
      fontSize: '16px', // Размер для параграфов
      fontWeight: 400, // Обычный шрифт
    },
    body2: {
      fontSize: '14px', // Размер для меньших параграфов
      fontWeight: 400,
    },
    caption: {
      fontSize: '12px', // Размер для подписей или мелкого текста
      fontWeight: 400,
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

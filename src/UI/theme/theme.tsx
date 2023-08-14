import { blue, green, pink, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'dashed' },
          style: {
            textTransform: 'none',
            border: `2px dashed ${blue[500]}`,
            color: 'white',
          },
        },
        {
          props: { variant: 'dashed', color: 'secondary' },
          style: {
            border: `4px dashed ${red[500]}`,
            color: 'white',
          },
        },
        // Добавьте другие варианты кнопок с кастомными стилями и цветами
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            backgroundColor: pink[400],
            color: 'white',
            // Другие стили для primary кнопок
          },
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            backgroundColor: green[200],
            color: 'white',

            // Другие стили для secondary кнопок
          },
        },
        // Добавьте другие варианты кнопок и их стили
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

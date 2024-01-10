import { useGetFestivalPostQuery } from '@services/toolsApi';
import { useParams } from 'react-router';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useSelector } from 'react-redux';
import { selectLanguage } from '@store/reducers/langSlice';
import { IFestivalPost } from '@interfaces/index';
import { useCallback } from 'react';

const FestivalPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: festival } = useGetFestivalPostQuery(id || '');
  const { language } = useSelector(selectLanguage);

  const selectLang = useCallback(
    (festival: IFestivalPost | undefined) => {
      if (language === 'en') return festival?.about_en;
      if (language === 'de') return festival?.about_de;
      if (language === 'pl') return festival?.about_pl;
    },
    [language]
  );

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          backgroundImage: `url(${festival?.image})`,
          backgroundSize: 'cover',
          position: 'relative',
          borderRadius: '8px', // Округленные углы
          overflow: 'hidden', // Обрезка изображения, чтобы округленные углы были видны
        }}
        height="300px" // Увеличил высоту для лучшего эффекта
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          position="absolute"
          width="100%"
          height="100%"
          sx={{ backgroundColor: 'rgba(60, 60, 60, 0.5)' }}
        />
        <Typography variant="h1" position="relative" color="white" zIndex={1}>
          {festival?.title.toUpperCase()}
        </Typography>
      </Box>
      <Typography
        variant="h5"
        textAlign="justify"
        paddingTop="40px"
        color="white"
      >
        {selectLang(festival)}
      </Typography>
    </Container>
  );
};

export default FestivalPage;

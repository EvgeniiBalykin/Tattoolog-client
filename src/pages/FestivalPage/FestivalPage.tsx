import { useGetFestivalPostQuery } from '@services/toolsApi';
import { useParams } from 'react-router';
import { Box, Button, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useSelector } from 'react-redux';
import { selectLanguage } from '@store/reducers/langSlice';
import { IFestivalPost } from '@interfaces/index';
import { useCallback } from 'react';
import transition from '@helpers/transitions/transitions';

const FestivalPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: festival } = useGetFestivalPostQuery(slug as string);
  const { language } = useSelector(selectLanguage);

  const selectLangAbout = useCallback(
    (festival: IFestivalPost | undefined) => {
      if (language === 'en') return festival?.about_en;
      if (language === 'de') return festival?.about_de;
      if (language === 'pl') return festival?.about_pl;
      if (language === 'ua') return festival?.about_uk;
    },
    [language]
  );

  const selectRulesAbout = useCallback(
    (festival: IFestivalPost | undefined) => {
      if (language === 'en') return festival?.rules_en;
      if (language === 'de') return festival?.rules_de;
      if (language === 'pl') return festival?.rules_pl;
      if (language === 'ua') return festival?.rules_uk;
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
      <Box mt={4}>
        <div
          style={{ color: 'white' }}
          dangerouslySetInnerHTML={{ __html: selectLangAbout(festival) || '' }}
        ></div>
      </Box>
      <Box mt={4}>
        <div
          style={{ color: 'white' }}
          dangerouslySetInnerHTML={{ __html: selectRulesAbout(festival) || '' }}
        ></div>
      </Box>
      <Box textAlign="center" mt={4}>
        <Button color="secondary" variant="contained" href={festival?.form_url}>
          Link registration
        </Button>
      </Box>
    </Container>
  );
};

export default transition(FestivalPage);

import { Box, Button, Container, Typography } from '@mui/material';
import { IMainImageBox } from '@interfaces/index';
import { useTranslation } from 'react-i18next';
import { scrollToComponent } from '@helpers/scrollToComponents';
import { useNavigate } from 'react-router';

const MainImageBox = ({
  title,
  subtitle,
  buttons,
  img,
  extraSubtitle,
}: IMainImageBox) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Container
      className="main-slider"
      maxWidth="lg"
      sx={{
        marginBottom: 8,
        maxHeight: '85vh',
        backgroundImage: `url(${img})`,
      }}
    >
      <Container maxWidth="lg" sx={{ pb: '5%', pt: '5%', m: 0 }}>
        <Typography
          variant="h1"
          mb={2}
          textTransform="uppercase"
          textAlign="justify"
        >
          {title}
        </Typography>
        <Box maxWidth={700}>
          <Typography variant="h5" mb={2} textAlign="justify">
            {subtitle}
          </Typography>
        </Box>
        <Box maxWidth={800}>
          <Typography variant="h5" mb={2} textAlign="justify">
            {extraSubtitle}
          </Typography>
        </Box>
        <Box maxWidth={700} className="buttons-main-slider">
          {buttons?.map((el, index) => (
            <Button
              sx={{ width: '50%' }}
              key={index}
              variant="contained"
              size="medium"
              onClick={() =>
                el.link ? navigate(el.link) : scrollToComponent('catalog-card')
              }
            >
              {t(el.text)}
            </Button>
          ))}
        </Box>
      </Container>
    </Container>
  );
};

export default MainImageBox;

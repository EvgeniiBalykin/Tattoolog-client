import { Box, Button, Container, Typography } from '@mui/material';
import { IMainImageBox } from '@interfaces/index';
import { useTranslation } from 'react-i18next';
import { scrollToComponent } from '@helpers/scrollToComponents';
import { useNavigate } from 'react-router';
import './MainImageBox.scss';
import { memo } from 'react';

const MainImageBox = memo(
  ({ title, subtitle, buttons, img, extraSubtitle }: IMainImageBox) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    return (
      <Container
        className="main-slider"
        maxWidth="lg"
        sx={{
          backgroundImage: `url(${img})`,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h1">{title}</Typography>
          <Box maxWidth={700}>
            <Typography variant="h5">{subtitle}</Typography>
          </Box>
          <Box maxWidth={800}>
            <Typography variant="h5">{extraSubtitle}</Typography>
          </Box>
          <Box maxWidth={700} className="buttons-main-slider">
            {buttons?.map((el, index) => (
              <Button
                sx={{ width: '50%' }}
                key={index}
                variant="contained"
                size="medium"
                onClick={() =>
                  el.link
                    ? navigate(el.link)
                    : scrollToComponent('catalog-card')
                }
              >
                {t(el.text)}
              </Button>
            ))}
          </Box>
        </Container>
      </Container>
    );
  }
);

export default MainImageBox;

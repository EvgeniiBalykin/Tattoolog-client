import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { IMainImageBox } from '@interfaces/index';

const MainImageBox = ({ title, subtitle, buttons, img }: IMainImageBox) => {
  const navigate = useNavigate();
  return (
    <Container
      className="main-slider"
      maxWidth="lg"
      sx={{
        marginBottom: 8,
        height: '40vh',
        backgroundImage: `url(${img})`,
      }}
    >
      <Container maxWidth="lg" sx={{ p: 0, pt: '5%', m: 0 }}>
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
        <Box maxWidth={700} className="buttons-main-slider">
          {buttons.map((el, index) => (
            <Button
              sx={{ width: '50%' }}
              key={index}
              variant="contained"
              size="medium"
              onClick={() => navigate(el.link)}
            >
              {el.text}
            </Button>
          ))}
        </Box>
      </Container>
    </Container>
  );
};

export default MainImageBox;

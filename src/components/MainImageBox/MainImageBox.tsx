import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { IMainImageBox } from 'types';

const MainImageBox = ({ title, subtitle, buttons, img }: IMainImageBox) => {
  const navigate = useNavigate();
  return (
    <Container
      className="main-slider"
      maxWidth="lg"
      sx={{
        marginTop: 4,
        marginBottom: 8,
        height: '50vh',
        backgroundImage: `url(${img})`,
      }}
    >
      <Container maxWidth="sm" sx={{ p: 0, pt: 8, m: 0 }}>
        <Typography variant="h1" mb={2} textTransform="uppercase">
          {title}
        </Typography>
        <Box maxWidth={500}>
          <Typography variant="h5" mb={2} textAlign="start">
            {subtitle}
          </Typography>
        </Box>
        <div className="buttons-main-slider">
          {buttons.map((el, index) => (
            <Button
              key={index}
              variant="contained"
              size="medium"
              onClick={() => navigate(el.link)}
            >
              {el.text}
            </Button>
          ))}
        </div>
      </Container>
    </Container>
  );
};

export default MainImageBox;

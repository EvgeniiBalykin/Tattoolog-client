import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { AddMasterPhoto, AddStudioPhoto } from '@images/index';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { selectUser } from '@store/reducers/userSlice';

const JoinUsMain = () => {
  const navigate = useNavigate();
  const { id } = useSelector(selectUser);
  const { t } = useTranslation();

  return (
    <Box className="wrapper">
      <Container maxWidth="xl">
        <Typography variant="h1" textAlign="center" textTransform="uppercase">
          {t('pages.join')}
        </Typography>
        <Container maxWidth="lg" sx={{ mb: 12 }}>
          <Typography variant="h4" textAlign="justify">
            {t('pages.main.join_us_block.title')}
          </Typography>
        </Container>
        <Grid
          container
          spacing={{ xs: 2, sm: 8, md: 10 }}
          justifyContent="center"
          textAlign="center"
        >
          <Grid item xs={12} sm={6} md={4}>
            <Card
              className="card-shadow"
              sx={{
                borderRadius: '20px',
                '&:hover': {
                  boxShadow: '6px 6px 40px rgba(251, 143, 253, 0.7)',
                },
              }}
            >
              <CardContent className="card-content">
                <CardMedia
                  alt="master-photo"
                  loading="lazy"
                  component="img"
                  height="100%"
                  image={AddMasterPhoto}
                />
                <div className="card-text">
                  <Typography variant="h3" textTransform="uppercase">
                    {t('pages.masters')}
                  </Typography>
                </div>
                <div className="card-button">
                  <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    onClick={() =>
                      id ? navigate(`/profile/${id}`) : navigate('/signin')
                    }
                  >
                    {t('buttons.add')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: '20px',
                '&:hover': {
                  boxShadow: '6px 6px 40px rgba(251, 143, 253, 0.7)',
                },
              }}
            >
              <CardContent className="card-content">
                <CardMedia
                  component="img"
                  height="100%"
                  image={AddStudioPhoto}
                  loading="lazy"
                  alt="studio-img"
                />
                <div className="card-text">
                  <Typography variant="h3" textTransform="uppercase">
                    {t('pages.studios')}
                  </Typography>
                </div>
                <div className="card-button">
                  <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    onClick={() =>
                      id ? navigate(`/profile/${id}`) : navigate('/signin')
                    }
                  >
                    {t('buttons.add')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default JoinUsMain;

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
import { AddMasterPhoto, AddStudioPhoto } from 'images/index';

const JoinUsMain = () => {
  return (
    <Box className="wrapper">
      <Container maxWidth="xl">
        <Typography variant="h1" textAlign="center" textTransform="uppercase">
          Join us
        </Typography>
        <Container maxWidth="lg" sx={{ mb: 12 }}>
          <Typography variant="h5" textAlign="center">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus.
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
                boxShadow: '6px 6px 40px rgba(251, 143, 253, 0.7)',
              }}
            >
              <CardContent className="card-content">
                <CardMedia
                  component="img"
                  height="100%"
                  image={AddMasterPhoto}
                />
                <div className="card-text">
                  <Typography variant="h3" textTransform="uppercase">
                    tattoo artist
                  </Typography>
                </div>
                <div className="card-button">
                  <Button color="primary" variant="contained" size="large">
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: '20px',
                boxShadow: '6px 6px 40px rgba(251, 143, 253, 0.7)',
              }}
            >
              <CardContent className="card-content">
                <CardMedia
                  component="img"
                  height="100%"
                  image={AddStudioPhoto}
                />
                <div className="card-text">
                  <Typography variant="h3" textTransform="uppercase">
                    tattoo artist
                  </Typography>
                </div>
                <div className="card-button">
                  <Button color="primary" variant="contained" size="large">
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Container maxWidth="lg" sx={{ mt: 12 }}>
          <Typography variant="h5" textAlign="center">
            Help your customer imagine how life will be like when using your
            product. Paint a picture of the practical, emotional, or
            psychological benefits of purchasing. Nam libero tempore, cum soluta
            nobis est eligendi optio cumque nihil impedit quo minus id quod
            maxime placeat facere possimus, omnis. Help your customer imagine
            how life will be like when using your product. Paint a picture of
            the practical, emotional, or psychological benefits of purchasing.
          </Typography>
        </Container>
      </Container>
    </Box>
  );
};

export default JoinUsMain;

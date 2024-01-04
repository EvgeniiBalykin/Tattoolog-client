import {
  Box,
  Grid,
  IconButton,
  ImageList,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { useGetProfilePortfolioQuery } from '@services/profileApi';
import PortfolioCard from '@components/Profile/PortfolioCard/PortfolioCard';
import theme from '@ui/theme/theme';
import { useState } from 'react';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const ProfilePortfolio = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { data } = useGetProfilePortfolioQuery({
    userId: Number(id),
    page,
    pageSize: isMobile ? 10 : 9,
  });
  const portfolio = data?.results ?? [];

  const onHandleNext = () => {
    data?.next ? setPage((prev) => prev + 1) : setPage((prev) => prev);
  };

  const onHandlePrev = () => {
    data?.previous ? setPage((prev) => prev - 1) : setPage((prev) => prev);
  };

  return (
    <Grid item xs={12} md={7} marginLeft={isMobile ? 0 : 4}>
      {portfolio.length > 0 ? (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <ImageList
            variant="quilted"
            cols={isMobile ? 2 : 3}
            gap={5}
            sx={{ padding: 1 }}
            rowHeight={150}
          >
            {portfolio.map(
              (post, index) =>
                post.photo_post.length > 0 && (
                  <PortfolioCard post={post} key={index} />
                )
            )}
          </ImageList>
          <Box
            maxWidth={800}
            margin="15px auto 0"
            display="flex"
            justifyContent="space-around"
            width="100%"
          >
            <IconButton size="large" color="secondary" onClick={onHandlePrev}>
              <ArrowBack />
            </IconButton>
            <IconButton size="large" color="secondary" onClick={onHandleNext}>
              <ArrowForward />
            </IconButton>
          </Box>
        </Box>
      ) : (
        <Typography textAlign="center" width="100%">
          {t('pages.no_works')}
        </Typography>
      )}
    </Grid>
  );
};

export default ProfilePortfolio;

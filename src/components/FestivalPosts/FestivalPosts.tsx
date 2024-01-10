import { useGetFesivalPostsQuery } from '@services/toolsApi';
import { Grid, Box } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import BlogCard from '@components/BlogCard/BlogCard';
import SkeletonBlocks from '@components/SkeletonBlocks/SkeletonBlocks';
import { useSelector } from 'react-redux';
import { selectLanguage } from '@store/reducers/langSlice';
import { IFestivalPost } from '@interfaces/index';

const FestivalPosts = () => {
  const [limit, setLimit] = useState(18);
  const [desableButton, setDisableButton] = useState(false);
  const { data: festivals, isLoading } = useGetFesivalPostsQuery(limit);
  const { t } = useTranslation();
  const { language } = useSelector(selectLanguage);

  const loadMoreClick = () => {
    setLimit((prev) => prev + 3);
  };

  useEffect(() => {
    festivals?.next ? setDisableButton(false) : setDisableButton(true);
  }, [festivals]);

  const selectLang = useCallback(
    (festival: IFestivalPost) => {
      if (language === 'en') return festival.about_en;
      if (language === 'de') return festival.about_de;
      if (language === 'pl') return festival.about_pl;
    },
    [language]
  );

  return (
    <>
      <Grid
        container
        margin="0 auto"
        justifyContent="space-around"
        maxWidth="lg"
        mb={4}
        data-testid="blog-posts-test"
      >
        {isLoading ? (
          <SkeletonBlocks />
        ) : (
          festivals?.results.map((festival) => (
            <BlogCard
              slug={festival.slug}
              id={festival.id}
              date={festival.created_at}
              image={festival.image}
              title={festival.title}
              body={selectLang(festival) || festival.about_en}
              key={festival.id}
              isBlogPost={false}
            />
          )) || 'Empty'
        )}
      </Grid>
      <Box mb={4} display="flex" justifyContent="center">
        <LoadingButton
          data-testid="load-more-test"
          disabled={desableButton}
          loading={isLoading}
          variant="contained"
          color="primary"
          onClick={loadMoreClick}
        >
          {t('buttons.load_more')}
        </LoadingButton>
      </Box>
    </>
  );
};

export default FestivalPosts;

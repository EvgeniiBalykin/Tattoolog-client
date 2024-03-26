import BlogPosts from '@components/BlogPosts/BlogPosts';
import { MainImageBox } from '@components/Home';
import transition from '@helpers/transitions/transitions';
import { BlogPageImg } from '@images/index';
import { Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

const BlogPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <MainImageBox
        img={BlogPageImg}
        title={t('pages.blog_page.title')}
        subtitle={t('pages.blog_page.subtitle')}
      />
      <Container maxWidth="lg">
        <BlogPosts />
      </Container>
    </>
  );
};

export default transition(BlogPage);

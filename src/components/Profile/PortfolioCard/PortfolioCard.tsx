import { ImageListItem, ImageListItemBar } from '@mui/material';
import { IProfilePost } from '@interfaces/index';
import { useNavigate } from 'react-router';
import './PortfolioCard.scss';

const PortfolioCard = ({ post }: { post: IProfilePost }) => {
  const navigate = useNavigate();

  const redirectToPostPage = () => {
    navigate(`/post/${post.id}`);
  };
  return (
    <ImageListItem key={post.id} cols={1} rows={2} className="portfolio-img">
      <img
        src={`${post.photo_post[0]?.photo}?w=170&fit=crop&auto=format`}
        srcSet={`${post.photo_post[0]?.photo}?w=170&fit=crop&auto=format&dpr=2 2x`}
        alt={post?.work_type?.description}
        loading="lazy"
        onClick={redirectToPostPage}
      />
      <ImageListItemBar
        sx={{
          fontStyle: 'italic',
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        }}
        position="top"
        title={post?.work_type?.name}
      />
    </ImageListItem>
  );
};

export default PortfolioCard;

import { ImageListItem, ImageListItemBar } from '@mui/material';
import { IProfilePortfolio } from '@interfaces/index';
import { useNavigate } from 'react-router';

const PostCard = ({ post }: { post: IProfilePortfolio }) => {
  const navigate = useNavigate();

  const redirectToPostPage = () => {
    navigate(`/post/${post.id}`);
  };
  return (
    <ImageListItem key={post.id} cols={3} rows={4}>
      <img
        src={post.photo_post[0]?.photo}
        srcSet={`${post.photo_post[0]?.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
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

export default PostCard;

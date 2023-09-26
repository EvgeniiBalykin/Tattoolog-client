import { ImageListItem, ImageListItemBar } from '@mui/material';
import { useState } from 'react';
import { IProfilePortfolio } from 'types';
import PostModal from './PostModal';

const PostCard = ({ post }: { post: IProfilePortfolio }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <ImageListItem key={post.id} cols={3} rows={4}>
        <img
          src={post.photo_post[0]?.photo}
          srcSet={`${post.photo_post[0]?.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={post?.work_type?.description}
          loading="lazy"
          onClick={toggleModal}
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
      <PostModal post={post} isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
};

export default PostCard;

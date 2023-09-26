import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { IProfilePortfolio } from 'types';

//To do: Доделать стили и разобравться с post description

const PostModal = ({
  post,
  isOpen,
  onClose,
}: {
  post: IProfilePortfolio;
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth>
      <DialogTitle>{post?.work_type?.name}</DialogTitle>
      <DialogContent
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <AliceCarousel>
          {post.photo_post.map((photo, index) => (
            <div
              key={index}
              style={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
              }}
            >
              <img
                src={photo.photo}
                alt={post?.work_type?.description}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  width: 'auto',
                  height: 'auto',
                }}
              />
            </div>
          ))}
        </AliceCarousel>
        <Typography>{post?.description}</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default PostModal;

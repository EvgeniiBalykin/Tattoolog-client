import { Close } from '@mui/icons-material';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { IProfilePortfolio } from 'types';
import './PostModal.scss';

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
      <Box className="post-modal">
        <IconButton className="post-modal_close" onClick={onClose}>
          <Close />
        </IconButton>
        <DialogContent className="post-modal_content">
          <AliceCarousel>
            {post.photo_post.map((photo, index) => (
              <div className="post-modal_post" key={index}>
                <img
                  className="post-modal_image"
                  src={photo.photo}
                  alt={post?.work_type?.description}
                />
              </div>
            ))}
          </AliceCarousel>
        </DialogContent>
        <DialogTitle>
          <Typography variant="h5" textAlign="justify" maxWidth="200px">
            {post?.description}
          </Typography>
        </DialogTitle>
      </Box>
    </Dialog>
  );
};

export default PostModal;

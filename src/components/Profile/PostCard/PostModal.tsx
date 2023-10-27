import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  useMediaQuery,
} from '@mui/material';
import {
  ArrowLeftRounded,
  ArrowRightRounded,
  Close,
} from '@mui/icons-material';
import { useState } from 'react';
import { IProfilePortfolio } from '@interfaces/index';
import './PostModal.scss';
import { trimText } from '@helpers/trimText/trimText';
import theme from '@ui/theme/theme';

const PostModal = ({
  post,
  isOpen,
  onClose,
}: {
  post: IProfilePortfolio;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [switchImg, setSwitchImg] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const postImgCount = post.photo_post.length;
  const isDescriptionLarge = post.description.length > 150;
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const nextImgClick = () =>
    setSwitchImg((prev) => (prev === postImgCount - 1 ? 0 : prev + 1));

  const prevImgClick = () =>
    setSwitchImg((prev) => (prev !== 0 ? prev - 1 : postImgCount - 1));

  const onReadMoreClick = () => setReadMore((prev) => !prev);

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="dialog"
      fullWidth
      maxWidth="md"
    >
      <Box className="wrapper-box">
        <DialogTitle display="flex" justifyContent="flex-end">
          {' '}
          <IconButton
            onClick={onClose}
            sx={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent className="dialog-content">
          <Box className="img-block">
            <IconButton
              className="icon left"
              onClick={prevImgClick}
              size="large"
            >
              <ArrowLeftRounded color="secondary" fontSize="large" />
            </IconButton>
            <img
              src={post.photo_post[switchImg].photo}
              alt={`Post Image ${switchImg + 1}`}
              className="post-image"
            />
            <IconButton
              className="icon right"
              onClick={nextImgClick}
              size="large"
            >
              <ArrowRightRounded color="secondary" fontSize="large" />
            </IconButton>
          </Box>
          {isMobile ? (
            <Typography variant="h5" gutterBottom>
              {readMore ? post.description : trimText(post.description, 150)}
              {isDescriptionLarge && (
                <Button onClick={onReadMoreClick} variant="text" color="info">
                  {readMore ? 'Show less' : 'Show more'}
                </Button>
              )}
            </Typography>
          ) : (
            <Typography variant="h5" gutterBottom>
              {post.description}
            </Typography>
          )}
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default PostModal;

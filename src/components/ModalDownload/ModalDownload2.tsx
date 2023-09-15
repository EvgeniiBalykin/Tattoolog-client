import {
  TextField,
  Container,
  Backdrop,
  Box,
  Modal,
  Fade,
  Select,
  Button,
  ImageList,
  ImageListItem,
} from '@mui/material';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { useAddPhotoPortfolioMutation } from 'services/profileApi';
import { ISendPost } from 'types';
import './ModalDownload.scss';

interface IModalProps {
  isOpen: boolean;
  toggle: () => void;
}

const ModalDownload2 = ({ isOpen, toggle }: IModalProps) => {
  const { id } = useParams();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedImg, setSelectedImg] = useState<FileList | null>(null);
  const [mutate] = useAddPhotoPortfolioMutation<ISendPost>();
  const [postData, setPostData] = useState<ISendPost>({
    profile: id, // Убрано значение id из useParams
    description: '',
    photo_post: [],
    work_type: {
      name: 'classic',
      description: 'classic',
    },
  });

  const handleButtonClick = () =>
    fileInputRef.current && fileInputRef.current.click();

  useEffect(() => {
    if (selectedImg) {
      const urlsArray = [];
      for (let i = 0; i < selectedImg.length; i++) {
        urlsArray.push({ photo: selectedImg[i] });
      }
      setPostData({ ...postData, photo_post: urlsArray });
    }
  }, [selectedImg]);

  const onPostClick = () => {
    // Создаем объект для FormData
    const formData = new FormData();
    formData.append('profile', String(postData.profile));
    formData.append('description', postData.description);
    formData.append('work_type', JSON.stringify(postData.work_type));

    // Добавляем фотографии в FormData
    for (let i = 0; i < postData.photo_post.length; i++) {
      formData.append('photo_post', postData.photo_post[i].photo);
    }

    mutate(formData).then((res) => console.log(res));
    console.log(formData.getAll('work_type'));
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={toggle}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isOpen}>
        <Box className="modal">
          <Container className="modal-container">
            <TextField
              id="outlined-textarea"
              multiline
              fullWidth
              placeholder="Post description..."
              color="secondary"
              value={postData.description}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPostData({ ...postData, description: e.target.value })
              }
            />
            <Select fullWidth color="secondary" />
            <input
              accept="image/*"
              type="file"
              id="select-image"
              ref={fileInputRef}
              style={{ display: 'none' }}
              multiple
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSelectedImg(e.target.files)
              }
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleButtonClick}
            >
              Upload Images
            </Button>
            <ImageList
              sx={{ width: '100%', maxHeight: 250, height: '100%' }}
              cols={2}
            >
              {postData.photo_post.map((img, index) => (
                <ImageListItem key={index}>
                  <img
                    src={URL.createObjectURL(img.photo)}
                    alt={`img-${index}`}
                  />
                </ImageListItem>
              ))}
            </ImageList>

            <Button color="primary" variant="outlined" onClick={onPostClick}>
              Publish
            </Button>
          </Container>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalDownload2;

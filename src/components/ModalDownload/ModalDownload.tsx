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
  IconButton,
} from '@mui/material';
import { ChangeEvent, useRef, useState } from 'react';
import { useParams } from 'react-router';
import './ModalDownload.scss';
import CloseIcon from '@mui/icons-material/Close';
import { useAddPhotoPortfolioMutation } from 'services/profileApi';
import axios from 'axios';
import { ADD_POST, LOCAL_SERVER } from 'api/index';

interface IModalProps {
  isOpen: boolean;
  toggle: () => void;
}

const ModalDownload = ({ isOpen, toggle }: IModalProps) => {
  const { id } = useParams();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [mutate] = useAddPhotoPortfolioMutation();
  const [inputFiles, setInputFiles] = useState<File[] | null>(null);
  const [title, setTitle] = useState<string>('');

  const onChangeImgs = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const imgArr = [];
      for (let i = 0; i < e.target.files?.length; i++) {
        imgArr.push(e.target.files[i]);
      }
      setInputFiles(imgArr);
    }
  };

  const onUploadClick = () =>
    fileInputRef.current && fileInputRef.current.click();

  const onPostData = () => {
    if (inputFiles && id) {
      axios
        .post(LOCAL_SERVER + 'portfolio/post/create/', {
          profile: id,
          description: 'test',
          work_type: 1,
        })
        .then((res) =>
          inputFiles.map((el) =>
            axios.post(
              LOCAL_SERVER + 'portfolio/post-photo/create/',
              {
                photos: el,
                post: res.data.id,
              },
              { headers: { 'Content-Type': 'multipart/form-data' } }
            )
          )
        );
    }
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
          timeout: 800,
        },
      }}
    >
      <Fade in={isOpen}>
        <Box className="modal">
          <Container className="modal-container">
            <IconButton aria-label="close" onClick={toggle}>
              <CloseIcon fontSize="large" />
            </IconButton>
            <TextField
              id="outlined-textarea"
              multiline
              fullWidth
              placeholder="Post description..."
              color="secondary"
              value={title}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
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
              onChange={onChangeImgs}
            />
            <Button variant="contained" color="primary" onClick={onUploadClick}>
              Upload Images
            </Button>
            {inputFiles && (
              <ImageList
                sx={{ width: '100%', maxHeight: 250, height: '100%' }}
                cols={2}
              >
                {inputFiles.map((img, index) => (
                  <ImageListItem key={index}>
                    <img src={URL.createObjectURL(img)} alt="img" />
                  </ImageListItem>
                ))}
              </ImageList>
            )}
            <Button color="primary" variant="outlined" onClick={onPostData}>
              Publish
            </Button>
          </Container>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalDownload;

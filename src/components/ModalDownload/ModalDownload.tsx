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
  MenuItem,
  SelectChangeEvent,
  FormControl,
} from '@mui/material';
import { ChangeEvent, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import './ModalDownload.scss';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { ADD_POST, ADD_POST_PHOTO, LOCAL_SERVER } from 'api/index';
import {
  useGetProfilePortfolioQuery,
  useGetWorkTypesQuery,
} from 'services/profileApi';

interface IModalProps {
  isOpen: boolean;
  toggle: () => void;
}

interface IInputValues {
  files: File[] | null;
  title: string;
  workType: number | null;
}

const ModalDownload = ({ isOpen, toggle }: IModalProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useGetWorkTypesQuery();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [inputValues, setInputValues] = useState<IInputValues>({
    files: null,
    title: '',
    workType: null,
  });
  const { refetch } = useGetProfilePortfolioQuery(Number(id));

  const onChangeImgs = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const imgArr = [];
      for (let i = 0; i < e.target.files?.length; i++) {
        imgArr.push(e.target.files[i]);
      }
      setInputValues({ ...inputValues, files: imgArr });
    }
  };

  const onUploadClick = () =>
    fileInputRef.current && fileInputRef.current.click();

  const onPostData = async () => {
    try {
      if (inputValues.files && id) {
        const postResponse = await axios.post(LOCAL_SERVER + ADD_POST, {
          profile: id,
          description: inputValues.title,
          work_type: 1,
        });

        await Promise.all(
          inputValues.files.map(async (el) => {
            await axios.post(
              LOCAL_SERVER + ADD_POST_PHOTO,
              {
                photos: el,
                post: postResponse.data.id,
              },
              { headers: { 'Content-Type': 'multipart/form-data' } }
            );
          })
        );
        refetch();
        toggle();
        setInputValues({ workType: null, files: null, title: '' });
      }
    } catch (error) {
      navigate('error_page');
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
          timeout: 500,
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
              value={inputValues.title}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInputValues({ ...inputValues, title: e.target.value })
              }
            />
            <FormControl fullWidth>
              <Select
                color="secondary"
                inputProps={{ 'aria-label': 'Without label' }}
                displayEmpty
                value={String(inputValues.workType)}
                onChange={(event: SelectChangeEvent) =>
                  setInputValues({
                    ...inputValues,
                    workType: Number(event.target.value),
                  })
                }
              >
                {data?.map((el) => (
                  <MenuItem value={el.id} key={el.id}>
                    {el.name} ({el.description})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
            {inputValues.files && (
              <ImageList
                sx={{ width: '100%', maxHeight: 250, height: '100%' }}
                cols={2}
              >
                {inputValues.files.map((img, index) => (
                  <ImageListItem key={index}>
                    <img src={URL.createObjectURL(img)} alt="img" />
                  </ImageListItem>
                ))}
              </ImageList>
            )}
            <Button
              color="primary"
              variant="outlined"
              disabled={
                !inputValues.files ||
                !inputValues.title ||
                !inputValues.workType
              }
              onClick={onPostData}
            >
              Publish
            </Button>
          </Container>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalDownload;

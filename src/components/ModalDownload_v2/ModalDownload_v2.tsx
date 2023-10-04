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
  Grid,
} from '@mui/material';
import { ChangeEvent, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
// import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { ADD_POST, ADD_POST_PHOTO, LOCAL_SERVER } from '@api/index';
import {
  useGetProfilePortfolioQuery,
  useGetWorkTypesQuery,
} from '@services/profileApi';
import './ModalDownload_v2.scss';
import { useTranslation } from 'react-i18next';

interface IInputValues {
  files: File[] | null;
  title: string;
  workType: string;
}

interface IModalProps {
  isOpen: boolean;
  toggle: () => void;
}

const ModalDownload_v2 = ({ isOpen, toggle }: IModalProps) => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useGetWorkTypesQuery();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [inputValues, setInputValues] = useState<IInputValues>({
    files: null,
    title: '',
    workType: '',
  });
  const { refetch } = useGetProfilePortfolioQuery(Number(id));
  const onChangeImgs = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const imgArr = [...(inputValues.files || [])];
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
          work_type: inputValues.workType,
        });

        await Promise.all(
          inputValues.files.map(async (el) => {
            const formData = new FormData();
            formData.append('photos', el);
            formData.append('post', postResponse.data.id);
            await axios.post(LOCAL_SERVER + ADD_POST_PHOTO, formData, {
              headers: { 'Content-Type': 'multipart/form-data' },
            });
          })
        );
        refetch();
        toggle();
        setInputValues({ workType: '', files: null, title: '' });
      }
    } catch (error) {
      navigate('/error_page');
    }
  };

  const onRemoveClick = (indexToRemove: number) => {
    if (inputValues.files) {
      const updatedFiles = [...inputValues.files];
      updatedFiles.splice(indexToRemove, 1);
      setInputValues({ ...inputValues, files: updatedFiles });
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
        <Container className="modal-container">
          <Box textAlign="end" mb={2}>
            <IconButton aria-label="close" onClick={toggle}>
              {/* <CloseIcon fontSize="large" /> */}
            </IconButton>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <Box className="modal-upload" mb={2}>
                <input
                  accept="image/*"
                  type="file"
                  id="select-image"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  multiple
                  onChange={onChangeImgs}
                />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={onUploadClick}
                >
                  {t('buttons.upload_img')}
                </Button>
              </Box>
              <Box className="modal-img">
                {/* ImageList */}
                <ImageList
                  sx={{
                    width: '100%',
                    height: 350,
                    marginBottom: '20px',
                  }}
                  cols={2}
                >
                  {inputValues.files
                    ? inputValues.files.map((img, index) => (
                        <ImageListItem
                          key={index}
                          sx={{
                            position: 'relative',
                          }}
                        >
                          <IconButton
                            sx={{
                              position: 'absolute',
                              top: 0,
                              right: 0,
                              zIndex: 1,
                            }}
                            onClick={() => onRemoveClick(index)}
                          >
                            {/* <CloseIcon /> */}
                          </IconButton>
                          <img
                            src={URL.createObjectURL(img)}
                            alt="img"
                            style={{
                              width: '100%',
                              height: '250px',
                              objectFit: 'cover',
                            }}
                          />
                        </ImageListItem>
                      ))
                    : ''}
                </ImageList>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} alignContent="center" alignItems="center">
              <FormControl fullWidth>
                <Select
                  variant="filled"
                  color="secondary"
                  inputProps={{ 'aria-label': 'Without label' }}
                  displayEmpty
                  value={inputValues.workType}
                  onChange={(event: SelectChangeEvent) =>
                    setInputValues({
                      ...inputValues,
                      workType: event.target.value || '',
                    })
                  }
                >
                  <MenuItem value="">
                    <em>Select Work Type</em>
                  </MenuItem>
                  {data?.map((el) => (
                    <MenuItem value={el.id} key={el.id}>
                      {el.name} ({el.description})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                id="outlined-textarea"
                rows={5}
                sx={{ mt: 4 }}
                multiline
                fullWidth
                variant="filled"
                placeholder="Post description..."
                color="secondary"
                value={inputValues.title}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setInputValues({ ...inputValues, title: e.target.value })
                }
              />
            </Grid>
          </Grid>
          <Box mt={2} textAlign="center">
            <Button
              fullWidth
              color="primary"
              variant="outlined"
              disabled={
                !inputValues.files ||
                !inputValues.title ||
                !inputValues.workType
              }
              onClick={onPostData}
            >
              {t('buttons.publish')}
            </Button>
          </Box>
        </Container>
      </Fade>
    </Modal>
  );
};

export default ModalDownload_v2;

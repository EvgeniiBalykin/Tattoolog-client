// Import necessary components and libraries
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
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { ADD_POST, ADD_POST_PHOTO, API_BASE_URL } from '@api/index';
import {
  useGetProfilePortfolioQuery,
  useGetWorkTypesQuery,
} from '@services/profileApi';
import './ModalDownload_v2.scss'; // Add your styling here
import { useTranslation } from 'react-i18next';

// Define input values and modal props interfaces
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
  const [currentStep, setCurrentStep] = useState<number>(1);
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
        const postResponse = await axios.post(API_BASE_URL + ADD_POST, {
          profile: id,
          description: inputValues.title,
          work_type: inputValues.workType,
        });

        await Promise.all(
          inputValues.files.map(async (el) => {
            const formData = new FormData();
            formData.append('photos', el);
            formData.append('post', postResponse.data.id);
            await axios.post(API_BASE_URL + ADD_POST_PHOTO, formData, {
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

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <Modal
      className="modal"
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
              <CloseIcon fontSize="large" />
            </IconButton>
          </Box>
          <Grid container spacing={2}>
            {currentStep === 1 && (
              <Grid item xs={12} md={12}>
                <>
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
                      variant="outlined"
                      color="primary"
                      onClick={onUploadClick}
                    >
                      {t('buttons.upload_img')}
                    </Button>
                  </Box>
                  <Box className="modal-img">
                    <ImageList className="image-list" cols={2}>
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
                                <CloseIcon />
                              </IconButton>
                              <img src={URL.createObjectURL(img)} alt="img" />
                            </ImageListItem>
                          ))
                        : ''}
                    </ImageList>
                  </Box>
                </>
              </Grid>
            )}
            {currentStep === 2 && (
              <Grid
                item
                xs={12}
                md={12}
                alignContent="center"
                alignItems="center"
              >
                <>
                  <FormControl fullWidth>
                    <Select
                      variant="outlined"
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
                    className="text-modal"
                    id="outlined-textarea"
                    rows={10}
                    sx={{ mt: 2 }}
                    multiline
                    fullWidth
                    variant="outlined"
                    placeholder="Post description..."
                    color="secondary"
                    value={inputValues.title}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setInputValues({ ...inputValues, title: e.target.value })
                    }
                  />
                </>
              </Grid>
            )}
          </Grid>
          <Grid display="flex" gap={5}>
            {currentStep === 2 && (
              <Button
                fullWidth
                variant="outlined"
                color="error"
                onClick={prevStep}
              >
                Back
              </Button>
            )}
            <Button
              fullWidth
              color="secondary"
              variant="contained"
              disabled={
                (!inputValues.files && currentStep === 1) ||
                (!inputValues.title &&
                  !inputValues.workType &&
                  currentStep === 2)
              }
              onClick={currentStep === 1 ? nextStep : onPostData}
            >
              {currentStep === 1 ? 'Next step' : 'publish'}
            </Button>
          </Grid>
        </Container>
      </Fade>
    </Modal>
  );
};

export default ModalDownload_v2;

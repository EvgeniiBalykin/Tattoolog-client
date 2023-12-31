import { useCallback } from 'react';
import {
  TextField,
  Select,
  IconButton,
  MenuItem,
  SelectChangeEvent,
  FormControl,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { ADD_POST, ADD_POST_PHOTO, API_BASE_URL } from '@api/index';
import {
  useGetProfilePortfolioQuery,
  useGetWorkTypesQuery,
} from '@services/profileApi';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@mui/lab';
import { ListElem } from './ListElem';
import imageCompression from 'browser-image-compression';
import {
  IInputValues,
  IOptionsCompress,
  IUploadProps,
  optionsCompress,
} from './constrants';
import { useSelector } from 'react-redux';
import { selectLogin } from '@store/reducers/loginSlice';

const UploadWorks = ({ isOpen, toggle }: IUploadProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useGetWorkTypesQuery();
  const [files, setFiles] = useState<[] | File[]>([]);
  const updateFiles = useCallback((newFiles: File[]) => {
    setFiles(newFiles);
  }, []);
  const [inputValues, setInputValues] = useState<IInputValues>({
    title: '',
    workType: '',
  });
  const { refetch } = useGetProfilePortfolioQuery({ userId: Number(id) });
  const [sendLoad, setSendLoad] = useState<boolean>(false);
  const { t } = useTranslation();
  const { token } = useSelector(selectLogin);

  const onPostData = async () => {
    setSendLoad(true);

    if (token) {
      try {
        if (files && id) {
          const postResponse = await createPost(
            id,
            inputValues.title,
            inputValues.workType
          );

          await uploadPhotos(postResponse.data.id, files, token);
          refetch();
          toggle();
          setInputValues({ workType: '', title: '' });
          setSendLoad(false);
        }
      } catch (error) {
        navigate('/error_page');
      }
    }
  };

  const createPost = async (
    profileId: string,
    description: string,
    workType: string
  ) => {
    return axios.post(
      API_BASE_URL + ADD_POST,
      {
        profile: profileId,
        description: description,
        work_type: workType,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  const uploadPhotos = async (postId: string, files: File[], token: string) => {
    await Promise.all(
      files.map(async (el) => {
        try {
          const compressedImage = await compressImage(el, optionsCompress);
          await sendPhoto(postId, compressedImage, el.name, token);
        } catch (compressionError) {
          console.error('Image compression error:', compressionError);
        }
      })
    );
  };

  const compressImage = async (image: File, options: IOptionsCompress) => {
    return imageCompression(image, options);
  };

  const sendPhoto = async (
    postId: string,
    compressedImage: string | Blob,
    fileName: string,
    token: string
  ) => {
    const formData = new FormData();
    formData.append('post', postId);
    formData.append('photos', compressedImage, fileName);

    return axios.post(API_BASE_URL + ADD_POST_PHOTO, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const onHandleClose = () => {
    setInputValues({ title: '', workType: '' });
    setFiles([]);
    toggle();
  };

  return (
    <Dialog
      onClose={toggle}
      fullWidth
      maxWidth="xl"
      open={isOpen}
      aria-labelledby="responsive-dialog-title"
    >
      <>
        <DialogTitle
          sx={{ m: 0, p: 2, backgroundColor: '#4A2352' }}
          id="customized-dialog-title"
        >
          {t('form.upload_post')}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={onHandleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers sx={{ backgroundColor: '#4A2352' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <ListElem updateFiles={updateFiles} />
            </Grid>
            <Grid item xs={12} md={5} alignContent="center" alignItems="center">
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
                    <em> {t('form.select_type')}</em>
                  </MenuItem>
                  {data?.map((el) => (
                    <MenuItem value={el.id} key={el.id}>
                      {el.name} {el.description ? `(${el.description})` : ''}
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
                placeholder={`${t('form.post_desc')}...`}
                color="secondary"
                value={inputValues.title}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setInputValues({ ...inputValues, title: e.target.value })
                }
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: '#4A2352' }}>
          <LoadingButton
            fullWidth
            loading={sendLoad}
            color="secondary"
            variant="contained"
            disabled={!inputValues.title || !inputValues.workType}
            onClick={onPostData}
          >
            {t('buttons.publish')}
          </LoadingButton>
        </DialogActions>
      </>
    </Dialog>
  );
};

export default UploadWorks;

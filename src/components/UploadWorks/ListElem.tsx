import {
  Box,
  Button,
  IconButton,
  ImageList,
  ImageListItem,
  useMediaQuery,
} from '@mui/material';
import theme from '@ui/theme/theme';
import CloseIcon from '@mui/icons-material/Close';
import React, {
  ChangeEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';

interface IProps {
  updateFiles: (files: File[]) => void;
}

export const ListElem = React.memo(({ updateFiles }: IProps) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [localFiles, setLocalFiles] = useState<[] | File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { t } = useTranslation();

  const memoFiles = useMemo(() => localFiles, [localFiles]);

  const onChangeImgs = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const imgArr = [...localFiles];
      for (let i = 0; i < e.target.files?.length; i++) {
        imgArr.push(e.target.files[i]);
      }
      setLocalFiles(imgArr);
      updateFiles(imgArr);
    }
  };

  const onUploadClick = () =>
    fileInputRef.current && fileInputRef.current.click();

  const onRemoveClick = useCallback(
    (indexToRemove: number) => {
      if (localFiles) {
        const updatedFiles = [...localFiles];
        updatedFiles.splice(indexToRemove, 1);
        setLocalFiles(updatedFiles);
      }
    },
    [localFiles]
  );

  return (
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
          {t('form.choose_files')}
        </Button>
      </Box>
      <Box className="modal-img">
        <ImageList
          className="image_list"
          variant="quilted"
          sx={{ overflowY: 'scroll' }}
          cols={!isMobile ? 4 : 2}
        >
          {memoFiles.map((img: Blob | MediaSource, index: number) => (
            <ImageListItem
              key={index}
              style={{
                position: 'relative',
                height: '12rem',
                width: 'auto',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundImage: `url(${URL.createObjectURL(img)})`,
              }}
            >
              <IconButton
                className="close_btn"
                size="medium"
                color="error"
                onClick={() => onRemoveClick(index)}
              >
                <CloseIcon />
              </IconButton>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
});

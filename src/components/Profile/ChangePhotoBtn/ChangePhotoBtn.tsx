import { token } from '@helpers/getToken';
import { Button } from '@mui/material';
import { useUpdateProfileMutation } from '@services/profileApi';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ChangePhotoBtn = ({
  id,
  refetch,
}: {
  id: number;
  refetch: () => void;
}) => {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedImg, setSelectedImg] = useState<File | null>(null);
  const [updateProfile] = useUpdateProfileMutation();

  useEffect(() => {
    if (selectedImg) {
      const formData = new FormData();
      formData.append('avatar', selectedImg);
      if (token) {
        updateProfile({ id, formData, token }).then(() => refetch());
      }
    }
  }, [selectedImg, id, updateProfile, refetch]);

  const handleButtonClick = useCallback(
    () => fileInputRef.current && fileInputRef.current.click(),
    [fileInputRef]
  );

  return (
    <>
      <Button
        className="change-avatar"
        variant="contained"
        color="warning"
        size="small"
        onClick={handleButtonClick}
      >
        {t('buttons.change_photo')}
      </Button>
      <input
        accept="image/*"
        type="file"
        id="select-image"
        ref={fileInputRef}
        style={{ display: 'none' }}
        multiple
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSelectedImg(e.target.files && e.target.files[0])
        }
      />
    </>
  );
};

export default ChangePhotoBtn;

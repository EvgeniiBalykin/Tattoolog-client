import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {
  useGetMasterCatalogQuery,
  useUpdateProfileMutation,
} from '@services/profileApi';
import { IProfileData } from '@interfaces/index';
import { selectUser } from '@store/reducers/userSlice';
import { useSelector } from 'react-redux';
import { selectLogin } from '@store/reducers/loginSlice';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const WorkersSelect = ({
  profile,
  userAccess,
}: {
  profile: IProfileData;
  userAccess: any;
}) => {
  const [open, setOpen] = useState(false);
  const [company, setCompany] = useState<number[]>([]);
  const { data: salons } = useGetMasterCatalogQuery({
    role: 'salon',
    limit: '',
  });
  const [mutate] = useUpdateProfileMutation();
  const { id } = useSelector(selectUser);
  const { token } = useSelector(selectLogin);

  useEffect(() => {
    profile.salons_and_masters && setCompany(profile.salons_and_masters);
  }, [profile]);

  const handleChange = (event: SelectChangeEvent) => {
    setCompany([Number(event.target.value)]);
    if (token) {
      mutate({
        id,
        token,
        formData: { salons_and_masters: [Number(event.target.value)] },
      });
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const nameOfCompany = (id: number) => {
    if (id) {
      const salon = salons?.results.filter((salon) => salon.user?.id === id);
      if (salon) {
        return `${salon[0]?.user?.first_name} ${salon[0]?.user?.last_name}`;
      }
    } else {
      return '';
    }
  };

  return (
    <Box width={400}>
      {userAccess ? (
        <Button
          fullWidth
          color="primary"
          variant="outlined"
          onClick={handleClickOpen}
        >
          Place of work: {nameOfCompany(company[0])}
        </Button>
      ) : (
        <Typography textAlign="center">
          {company[0] && `Place of work: ${nameOfCompany(company[0])}`}
        </Typography>
      )}

      <Dialog disableEscapeKeyDown open={open} onClose={handleClose} fullWidth>
        <DialogTitle sx={{ backgroundColor: '#4A2352' }}>
          Fill the form
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: '#4A2352' }}>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1 }} fullWidth>
              <InputLabel color="secondary" htmlFor="demo-dialog-native">
                Place of work
              </InputLabel>
              <Select
                color="secondary"
                fullWidth
                native
                value={String(company[0])}
                onChange={handleChange}
                input={
                  <OutlinedInput
                    label="Place of work"
                    id="demo-dialog-native"
                  />
                }
              >
                <option aria-label="None" value="" />
                {salons?.results.map((salon) => (
                  <option key={salon.user?.id} value={salon.user?.id}>
                    {salon.user?.first_name} {salon.user?.last_name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: '#4A2352' }}>
          <Button color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="secondary" onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default WorkersSelect;

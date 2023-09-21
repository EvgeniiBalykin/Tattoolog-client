import { Box, Button, Container, Grid, TextField } from '@mui/material';
import CatalogCard from 'components/CatalogCard/CatalogCard';
import { ChangeEvent, useState } from 'react';
import { useGetMasterCatalogQuery } from 'services/profileApi';
import { IProfileData } from 'types';

interface IStateProps {
  name: string;
  city: string;
  country: string;
}

const Catalog = ({ role }: { role: string }) => {
  const [searchValues, setSearchValues] = useState<IStateProps>({
    name: '',
    city: '',
    country: '',
  });

  const { data: MasterCatalog } = useGetMasterCatalogQuery({
    role,
    name: searchValues.name,
    city: searchValues.city,
    country: searchValues.country,
  });

  const resetFilters = () =>
    setSearchValues({ name: '', city: '', country: '' });

  const onChangeFilters = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchValues({ ...searchValues, [e.target.name]: e.target.value });

  return (
    <Container maxWidth="xl" sx={{ mb: 10 }}>
      <Grid container gap={2} justifyContent="center">
        <Grid item xs={8} md={3}>
          <TextField
            fullWidth
            label="Name"
            color="secondary"
            value={searchValues.name}
            name="name"
            onChange={onChangeFilters}
          />
        </Grid>
        <Grid item xs={8} md={3}>
          <TextField
            fullWidth
            label="City"
            color="secondary"
            value={searchValues.city}
            name="city"
            onChange={onChangeFilters}
          />
        </Grid>
        <Grid item xs={8} md={3}>
          <TextField
            fullWidth
            label="Country"
            color="secondary"
            value={searchValues.country}
            name="country"
            onChange={onChangeFilters}
          />
        </Grid>
      </Grid>
      <Box textAlign="center" margin={'10px 0'}>
        <Button variant="text" color="secondary" onClick={resetFilters}>
          Reset filters
        </Button>
      </Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {MasterCatalog?.map((master: IProfileData) => (
          <CatalogCard
            key={master.user.id}
            firstName={master.user.first_name}
            lastName={master.user.last_name}
            avatar={master.avatar}
            id={master.user.id}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Catalog;

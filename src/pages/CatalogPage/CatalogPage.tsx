import { LoadingButton } from '@mui/lab';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import CatalogCard from '@components/CatalogCard/CatalogCard';
import DescriptionIcons from '@components/DescriptionIcons/DescriptionIcons';
import { MainImageBox } from '@components/Home';
import JointNow from '@components/JoinNow/JoinNow';
import { ChangeEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useGetMasterCatalogQuery } from '@services/profileApi';
import { IProfileData } from '@interfaces/index';
import {
  MASTER_CATALOGUE_MAIN,
  MASTER_CATALOG_ICONS,
  SALON_CATALOGUE_MAIN,
} from './constansts';

interface IStateProps {
  name: string;
  city: string;
  country: string;
}

const FILTERS: { name: keyof IStateProps; label: string }[] = [
  {
    name: 'name',
    label: 'Name',
  },
  {
    name: 'city',
    label: 'City',
  },
  {
    name: 'country',
    label: 'Country',
  },
];

const Catalog = ({ role }: { role: string }) => {
  const location = useLocation();
  const [limit, setLimit] = useState<number>(6);
  const [desableButton, setDisableButton] = useState(false);
  const [searchValues, setSearchValues] = useState<IStateProps>({
    name: '',
    city: '',
    country: '',
  });
  const isMasterCatalogue = location.pathname === '/master_catalog';
  const { data: MasterCatalog, isLoading } = useGetMasterCatalogQuery({
    role,
    name: searchValues.name,
    city: searchValues.city,
    country: searchValues.country,
    limit,
  });

  const loadMoreClick = () => {
    setLimit((prev) => prev + 3);
  };

  useEffect(() => {
    MasterCatalog?.next === null && setDisableButton(true);
  }, [MasterCatalog]);

  const resetFilters = () =>
    setSearchValues({ name: '', city: '', country: '' });

  const onChangeFilters = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchValues({ ...searchValues, [e.target.name]: e.target.value });

  return (
    <Container maxWidth="xl" sx={{ mb: 10 }}>
      <MainImageBox
        title={
          isMasterCatalogue
            ? MASTER_CATALOGUE_MAIN.title
            : SALON_CATALOGUE_MAIN.title
        }
        subtitle={
          isMasterCatalogue
            ? MASTER_CATALOGUE_MAIN.subtitle
            : SALON_CATALOGUE_MAIN.subtitle
        }
        buttons={
          isMasterCatalogue
            ? MASTER_CATALOGUE_MAIN.buttons
            : SALON_CATALOGUE_MAIN.buttons
        }
        img={
          isMasterCatalogue
            ? MASTER_CATALOGUE_MAIN.img
            : SALON_CATALOGUE_MAIN.img
        }
      />
      <Typography
        variant="h1"
        textAlign="center"
        textTransform="uppercase"
        mb={4}
      >
        Spotlight Features
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, sm: 8, md: 3 }}
        justifyContent="center"
        mb={8}
      >
        {MASTER_CATALOG_ICONS.map((el, index) => (
          <DescriptionIcons
            key={index}
            icon={el.icon}
            title={el.title}
            subtitle={el.subtitle}
            xs={14}
            sm={5}
            md={3}
          />
        ))}
      </Grid>
      <JointNow />
      <Grid container gap={2} justifyContent="center">
        {FILTERS.map((el) => (
          <Grid key={el.name} item xs={8} md={3}>
            <TextField
              fullWidth
              key={el.name}
              label={el.label}
              color="secondary"
              value={searchValues[el.name]}
              name={el.name}
              onChange={onChangeFilters}
            />
          </Grid>
        ))}
      </Grid>
      <Box textAlign="center" margin={'30px 0'}>
        <Button variant="outlined" color="secondary" onClick={resetFilters}>
          Reset filters
        </Button>
      </Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {MasterCatalog?.results.map((master: IProfileData) => (
          <CatalogCard
            key={master.user.id}
            firstName={master.user.first_name || ''}
            lastName={master.user.last_name || ''}
            avatar={master.avatar || ''}
            id={master.user.id || 0}
            city={master.city}
            country={master.country}
          />
        ))}
      </Grid>
      <Box mt={4} display="flex" justifyContent="center">
        <LoadingButton
          disabled={desableButton}
          loading={isLoading}
          variant="contained"
          color="primary"
          onClick={loadMoreClick}
        >
          Load more
        </LoadingButton>
      </Box>
    </Container>
  );
};

export default Catalog;

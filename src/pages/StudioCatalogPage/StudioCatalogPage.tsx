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
import { useGetMasterCatalogQuery } from '@services/profileApi';
import { IProfileData } from '@interfaces/index';
import { SALON_CATALOGUE_MAIN, STUDIO_CATALOG_ICONS } from './constants';
import { useTranslation } from 'react-i18next';

interface IStateProps {
  name: string;
  city: string;
  country: string;
}

const FILTERS: { name: keyof IStateProps; label: string }[] = [
  {
    name: 'name',
    label: 'form.name',
  },
  {
    name: 'city',
    label: 'form.city',
  },
  {
    name: 'country',
    label: 'form.country',
  },
];

const StudioCatalogPage = () => {
  const { t } = useTranslation();
  const [limit, setLimit] = useState<number>(6);
  const [desableButton, setDisableButton] = useState(false);
  const [searchValues, setSearchValues] = useState<IStateProps>({
    name: '',
    city: '',
    country: '',
  });
  const { data: MasterCatalog, isLoading } = useGetMasterCatalogQuery({
    role: 'salon',
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
    <>
      <MainImageBox
        title={t(SALON_CATALOGUE_MAIN.title)}
        extraSubtitle={t(SALON_CATALOGUE_MAIN.extraSubtitle)}
        subtitle={t(SALON_CATALOGUE_MAIN.subtitle)}
        buttons={SALON_CATALOGUE_MAIN.buttons}
        img={SALON_CATALOGUE_MAIN.img}
      />
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Typography
          variant="h1"
          textAlign="center"
          textTransform="uppercase"
          mb={4}
        >
          {t('pages.artists_page.info.title')}
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, sm: 8, md: 3 }}
          justifyContent="center"
          mb={8}
        >
          {STUDIO_CATALOG_ICONS.map((el, index) => (
            <DescriptionIcons
              key={index}
              icon={el.icon}
              title={t(el.title)}
              subtitle={t(el.subtitle)}
              xs={14}
              sm={5}
              md={3}
            />
          ))}
        </Grid>
        <JointNow
          title={t(SALON_CATALOGUE_MAIN.joinTitle)}
          subtitle={t(SALON_CATALOGUE_MAIN.joinSubtitle)}
        />
        <Grid container gap={2} justifyContent="center">
          {FILTERS.map((el) => (
            <Grid key={el.name} item xs={8} md={3}>
              <TextField
                fullWidth
                key={el.name}
                label={t(el.label)}
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
            {t('buttons.reset_filters')}
          </Button>
        </Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {MasterCatalog?.results
            .filter((master) => master.status === 'approved')
            .map((master: IProfileData) => (
              <CatalogCard
                key={master?.user?.id}
                firstName={master?.user?.first_name || ''}
                lastName={master?.user?.last_name || ''}
                avatar={master.avatar || ''}
                id={master?.user?.id || 0}
                city={master.city}
                country={master.country}
                about={master.about || ''}
                avg_rating={master.average_rating || ''}
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
            {t('buttons.load_more')}
          </LoadingButton>
        </Box>
      </Container>
    </>
  );
};

export default StudioCatalogPage;

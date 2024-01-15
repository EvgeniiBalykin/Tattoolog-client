import { LoadingButton } from '@mui/lab';
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import CatalogCard from '@components/CatalogCard/CatalogCard';
import DescriptionIcons from '@components/DescriptionIcons/DescriptionIcons';
import { MainImageBox } from '@components/Home';
import JointNow from '@components/JoinNow/JoinNow';
import { ChangeEvent, useEffect, useState } from 'react';
import {
  useGetMasterCatalogQuery,
  useGetWorkTypesQuery,
} from '@services/profileApi';
import { ICatalogueProps, IProfileData } from '@interfaces/index';
import { MASTER_CATALOGUE_MAIN, MASTER_CATALOG_ICONS } from './constants';
import { useTranslation } from 'react-i18next';
import { FILTERS_CATALOGUE_ARTISTS } from '@constants/index';
import { Helmet } from 'react-helmet-async';
import UniversalSelect from '@components/UnivesalSelect/UniversalSelect';

const MasterCatalogPage = () => {
  const { t } = useTranslation();
  const [limit, setLimit] = useState<number>(18);
  const { data: workTypes } = useGetWorkTypesQuery();
  const [desableButton, setDisableButton] = useState(false);
  const [searchValues, setSearchValues] = useState<ICatalogueProps>({
    name: '',
    country: { value: '', id: 0 },
    city: { value: '', id: 0 },
    mentor: '',
    relocate: '',
    open_to_work: '',
    work_type: '',
    rating: 'desc',
  });
  const { data: MasterCatalog, isLoading } = useGetMasterCatalogQuery({
    role: 'master',
    name: searchValues.name,
    country: searchValues.country.value,
    city: searchValues.city.value,
    limit,
    open_to_work: searchValues.open_to_work,
    relocate: searchValues.relocate,
    mentor: searchValues.mentor,
    work_type: searchValues.work_type,
    rating_order: searchValues.rating,
  });

  const loadMoreClick = () => {
    setLimit((prev) => prev + 10);
  };

  useEffect(() => {
    MasterCatalog?.next ? setDisableButton(false) : setDisableButton(true);
  }, [MasterCatalog]);

  const resetFilters = () =>
    setSearchValues({
      name: '',
      city: { value: '', id: null },
      country: { value: '', id: null },
      open_to_work: '',
      mentor: '',
      relocate: '',
      rating: 'desc',
      work_type: '',
    });

  const onChangeFilters = (e: ChangeEvent<HTMLInputElement> | any) =>
    setSearchValues({ ...searchValues, [e.target.name]: e.target.value });

  return (
    <>
      <Helmet prioritizeSeoTags>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tattoo artists catalogue</title>
        <meta name="description" content="catalogue of tattoo artists" />
        <meta name="keywords" content="catalogue tattoo artists worlwide" />
        <meta property="og:title" content="Tattoo artists tattoolog" />
        <meta
          property="og:description"
          content="Global catalogue of tattoo artists"
        />
      </Helmet>
      <MainImageBox
        title={t(MASTER_CATALOGUE_MAIN.title)}
        extraSubtitle={t(MASTER_CATALOGUE_MAIN.extraSubtitle)}
        subtitle={t(MASTER_CATALOGUE_MAIN.subtitle)}
        buttons={MASTER_CATALOGUE_MAIN.buttons}
        img={MASTER_CATALOGUE_MAIN.img}
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
          {MASTER_CATALOG_ICONS.map((el, index) => (
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
          title={t(MASTER_CATALOGUE_MAIN.joinTitle)}
          subtitle={t(MASTER_CATALOGUE_MAIN.joinSubtitle)}
        />
        <Grid
          container
          gap={1}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 4, md: 14 }}
          justifyContent="center"
        >
          {FILTERS_CATALOGUE_ARTISTS.map((el) => (
            <Grid key={el.name} item xs={8} md={3}>
              {el.type === 'text' && (
                <TextField
                  fullWidth
                  key={el.name}
                  label={t(el.label)}
                  color="secondary"
                  value={searchValues[el.name]}
                  name={el.name}
                  onChange={onChangeFilters}
                />
              )}
              {el.isLocation && (
                <UniversalSelect
                  field={el}
                  fieldsValue={searchValues}
                  setFieldsValue={setSearchValues}
                  isIcon={false}
                  size="medium"
                />
              )}
              {el.type === 'select' && !el.isLocation && (
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    {el.label}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={searchValues[el.name]}
                    name={el.name}
                    label={el.label}
                    onChange={onChangeFilters}
                  >
                    {el.name === 'work_type'
                      ? workTypes?.map((workType) => (
                          <MenuItem value={workType.name}>
                            {workType.name}
                          </MenuItem>
                        ))
                      : el?.options?.map((option) => (
                          <MenuItem value={option.value}>
                            {t(option.name)}
                          </MenuItem>
                        ))}
                  </Select>
                </FormControl>
              )}
            </Grid>
          ))}
        </Grid>
        <Box textAlign="center" margin={'30px 0'}>
          <Button variant="outlined" color="secondary" onClick={resetFilters}>
            {t('buttons.reset_filters')}
          </Button>
        </Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {MasterCatalog?.results.map((master: IProfileData) => (
            <CatalogCard
              key={master?.user?.id}
              firstName={master?.user?.first_name || ''}
              lastName={master?.user?.last_name || ''}
              avatar={master.avatar || ''}
              id={master?.user?.id || 0}
              city={master.city}
              country={master.country}
              about={master.about || ''}
              rating={master.rating}
              openToWork={master.open_to_work || false}
              relocate={master.relocate || false}
              mentor={master.mentor || false}
              association={master.moderation_profile_associate || []}
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

export default MasterCatalogPage;

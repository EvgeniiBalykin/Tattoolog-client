import { Container, Grid } from '@mui/material';
import CatalogCard from 'components/CatalogCard/CatalogCard';
import { useGetMasterCatalogQuery } from 'services/profileApi';
import { IProfileData } from 'types';

const Catalog = ({ role }: { role: string }) => {
  const { data: MasterCatalog } = useGetMasterCatalogQuery(role);

  return (
    <Container maxWidth="xl" sx={{ mb: 10 }}>
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

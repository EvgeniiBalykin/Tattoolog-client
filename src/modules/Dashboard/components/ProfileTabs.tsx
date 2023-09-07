import { Box, Container, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import ProfilePortfolio from './ProfilePortfolio/ProfilePortfolio';

const ProfileTabs = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_: unknown, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="md">
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        indicatorColor="secondary"
        textColor="secondary"
        centered
      >
        <Tab value={0} label="Portfolio" />
        <Tab value={1} label="Liked inks" />
        <Tab value={2} label="Flashes" />
        <Tab value={3} label="Followed Artists" />
      </Tabs>
      <Box padding={2} minHeight="calc(100vh - 64px)">
        {tabValue === 0 && <ProfilePortfolio />}
        {tabValue === 1 && <div>Liked inks</div>}
        {tabValue === 2 && <div>Flashes</div>}
        {tabValue === 3 && <div>Followed Artists</div>}
      </Box>
    </Container>
  );
};

export default ProfileTabs;

import { Box, Container, Tab, Tabs } from '@mui/material';
import { useState } from 'react';

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
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Inks" />
        <Tab label="Liked inks" />
        <Tab label="Flashes" />
        <Tab label="Followed Artists" />
      </Tabs>
      <Box padding={2} minHeight="calc(100vh - 64px)">
        {tabValue === 0 && <div>Inks</div>}
        {tabValue === 1 && <div>Liked inks</div>}
        {tabValue === 2 && <div>Flashes</div>}
        {tabValue === 3 && <div>Followed Artists</div>}
      </Box>
    </Container>
  );
};

export default ProfileTabs;

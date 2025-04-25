import React from "react";
import { Box, Tabs, Tab } from "@mui/material";

const ProfileSections = ({ selectedSection, setSelectedSection }) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", marginBottom: 2 }}>
      <Tabs value={selectedSection} onChange={(e, value) => setSelectedSection(value)} centered>
        <Tab label="Posts" value="posts" />
        <Tab label="Saved" value="saved" />
      </Tabs>
    </Box>
  );
};

export default ProfileSections;

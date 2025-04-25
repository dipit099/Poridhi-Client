import React, { useState } from "react";
import { Box, Avatar, Typography, Button } from "@mui/material";
import EditProfileModal from "./EditProfileModal";

const ProfileHeader = ({ userData, setUserData }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // ✅ Stack on small screens, row on larger screens
        alignItems: { xs: "center", md: "flex-start" }, // ✅ Center on mobile
        justifyContent: "space-between",
        padding: 3,
        backgroundColor: "background.paper",
        borderRadius: 2,
        boxShadow: 2,
        width: "100%",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      {/* ✅ Left Side - Profile Picture & Username */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: { xs: "100%", md: "30%" },
        }}
      >
        <Avatar src={userData.profilePic} sx={{ width: 100, height: 100, mb: 1 }} />
        <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>
          {userData.username}
        </Typography>
      </Box>

      {/* ✅ Right Side - User Details */}
      <Box
        sx={{
          flex: 1,
          paddingLeft: { md: 3 }, // ✅ Add space on larger screens
          textAlign: { xs: "center", md: "left" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body1" color="text.secondary">{userData.bio}</Typography>
        <Typography variant="body2" color="text.secondary">DOB: {userData.dateOfBirth}</Typography>
        <Typography variant="body2" color="text.secondary">Joined: {userData.joinedDate}</Typography>
      </Box>

      {/* ✅ Bottom-Right Edit Button */}
      <Button
        variant="outlined"
        color="text.secondary"
        onClick={() => setOpen(true)}
        sx={{
          alignSelf: { xs: "center", md: "flex-end" },
          marginTop: { xs: 2, md: 0 },
        }}
      >
        Edit Profile
      </Button>

      {/* Edit Profile Modal */}
      <EditProfileModal open={open} setOpen={setOpen} userData={userData} setUserData={setUserData} />
    </Box>
  );
};

export default ProfileHeader;

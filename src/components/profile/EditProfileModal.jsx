import React, { useState } from "react";
import { Box, Modal, TextField, Button, Typography } from "@mui/material";

const EditProfileModal = ({ open, setOpen, userData, setUserData }) => {
  const [editedData, setEditedData] = useState({ ...userData });

  const handleChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUserData(editedData);
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box sx={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: { xs: "90%", md: "50%" },
        bgcolor: "background.paper",
        boxShadow: 24,
        borderRadius: 2,
        p: 3
      }}>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>Edit Profile</Typography>
        <TextField fullWidth name="username" label="Username" value={editedData.username} onChange={handleChange} sx={{ marginBottom: 2 }} />
        <TextField fullWidth name="bio" label="Bio" value={editedData.bio} onChange={handleChange} sx={{ marginBottom: 2 }} />
        <TextField fullWidth name="dateOfBirth" label="Date of Birth" type="date" value={editedData.dateOfBirth} onChange={handleChange} sx={{ marginBottom: 2 }} />
        <Button variant="contained" color="primary" fullWidth onClick={handleSave}>Save</Button>
      </Box>
    </Modal>
  );
};

export default EditProfileModal;

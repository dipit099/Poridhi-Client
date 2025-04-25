import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const SavedSection = ({ savedPosts }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {savedPosts.length > 0 ? savedPosts.map((post) => (
        <Paper key={post.id} sx={{ padding: 2 }}>
          <Typography variant="h6">{post.title}</Typography>
          <Typography variant="body1">{post.content}</Typography>
          <Typography variant="body2" color="text.secondary">Saved on {post.date}</Typography>
        </Paper>
      )) : <Typography>No saved posts yet.</Typography>}
    </Box>
  );
};

export default SavedSection;

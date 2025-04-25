import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const PostsSection = ({ posts }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 2 ,flexWrap: "wrap"}}>
      {posts.length > 0 ? posts.map((post) => (
        <Paper key={post.id} sx={{ padding: 2, width: { xs: "100%", sm: "48%", md: "30%" } , boxSizing: "border-box",}}>
          <Typography variant="h6">{post.title}</Typography>
          <Typography variant="body1">{post.content}</Typography>
          <Typography variant="body2" color="text.secondary">Posted on {post.date}</Typography>
        </Paper>
      )) : <Typography>No posts yet.</Typography>}
    </Box>
  );
};

export default PostsSection;

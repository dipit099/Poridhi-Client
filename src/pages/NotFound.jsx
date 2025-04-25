// src/pages/NotFound.jsx
import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
    >
      <Typography variant="h3" color="primary" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        Oops! The page you're looking for does not exist.
      </Typography>
      <Link to="/">
        <Button variant="contained" color="primary">
          Go Back to Home
        </Button>
      </Link>
    </Box>
  );
}

export default NotFound;

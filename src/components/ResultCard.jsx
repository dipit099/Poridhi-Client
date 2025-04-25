import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const ResultCard = ({ title, description, category }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description || "No description available."}
        </Typography>
        <Box mt={1}>
          <Typography variant="caption" color="text.secondary">
            Category: {category}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ResultCard;

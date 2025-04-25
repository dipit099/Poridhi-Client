import React from "react";
import { Pagination, Stack } from "@mui/material";

const ResultsPagination = ({ page, setPage, totalPages }) => {
  return (
    <Stack spacing={2} alignItems="center" mt={4}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={(_, value) => setPage(value)}
        color="primary"
      />
    </Stack>
  );
};

export default ResultsPagination;

import React from "react";
import { TextField, Button, Stack } from "@mui/material";

const SearchBar = ({ query, setQuery, onSearch, onClear }) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <TextField
        label="Search"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        fullWidth
      />
      <Button variant="contained" onClick={onSearch}>
        Search
      </Button>
      <Button variant="outlined" onClick={onClear}>
        Clear
      </Button>
    </Stack>
  );
};

export default SearchBar;

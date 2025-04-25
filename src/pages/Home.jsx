import React, { useState, useEffect } from "react";
import { Container, Typography, Box, CircularProgress } from "@mui/material";
import SearchBar from "../components/SearchBar";
import ResultCard from "../components/ResultCard";
import ResultsPagination from "../components/ResultsPagination";
import { BASE_URL } from "../config/baseUrl";

const Home = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchResults = async () => {
    if (!query) return;

    setLoading(true);
    console.log(`Searching for: "${query}" on page ${page}`);

    try {
      const res = await fetch(`${BASE_URL}?query=${query}&page=${page}`);
      const data = await res.json();

      if (typeof data === "string" && data.toLowerCase().includes("no products")) {
        setResults([]);
        setTotalPages(1);
        setError("No products found");
      } else {
        setResults(data);
        setTotalPages(data.length === 10 ? page + 1 : page);
        setError("");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    setPage(1);
    fetchResults();
  };

  const handleClear = () => {
    setQuery("");
    setResults([]);
    setPage(1);
    setError("");
  };

  useEffect(() => {
    if (query) fetchResults();
  }, [page]);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Semantic Search
      </Typography>
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} onClear={handleClear} />

      <Box mt={4}>
        {loading ? (
          <Box display="flex" justifyContent="center" mt={4}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            {error && (
              <Typography variant="body1" color="error" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}
            {results.length > 0 && results.map((item) => (
              <ResultCard
                key={item.id}
                title={item.title}
                description={item.description}
                category={item.category}
              />
            ))}
            {results.length > 0 && totalPages > 1 && (
              <ResultsPagination page={page} setPage={setPage} totalPages={totalPages} />
            )}
          </>
        )}
      </Box>
    </Container>
  );
};

export default Home;

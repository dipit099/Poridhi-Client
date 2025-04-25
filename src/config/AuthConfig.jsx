import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
// API Endpoint for verifying authentication
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "./baseUrl";
import { Box, CircularProgress, Typography } from "@mui/material";

const VERIFY_AUTH_URL = `${BASE_URL}/auth/verify`;

const AuthConfig = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifyUser = async () => {
      const sessionKey = localStorage.getItem("sessionKey"); // Get session key from storage
      if (!sessionKey) {
        setIsAuthenticated(false);
        toast.error("You are not logged in")
        return;
      }
      toast.success("You are logged in")
      // try {
      //   const response = await axios.post(VERIFY_AUTH_URL, {}, {
      //     headers: {
      //       Authorization: `Bearer ${sessionKey}`, // Send session key to server
      //     },
      //   });

      //   if (response.data.success) {
      //     setIsAuthenticated(true); // User is authenticated
      //   } else {
      //     setIsAuthenticated(false);
      //   }
      // } catch (error) {
      //   console.error("Authentication failed:", error);
      //   setIsAuthenticated(false);
      // }
    };

    verifyUser();
  }, []);

  if (isAuthenticated === null) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <CircularProgress color="primary" size={60} />
        <Typography variant="h6" sx={{ marginTop: "1rem", color: "text.primary" }}>
          Verifying authentication, please wait...
        </Typography>
      </Box>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />; // Redirect if not authenticated
};

export default AuthConfig;

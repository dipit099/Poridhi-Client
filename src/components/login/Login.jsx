import React, { useState } from "react";
import { Box, TextField, Button, Typography, Container, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../config/baseUrl";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Please fill in all fields!");
      return;
    }

    // try {
    //   const response = await axios.post(`${BASE_URL}/login`, { email, password });

    //   if (response.data.success) {
    //     toast.success("Login successful!");
    //     localStorage.setItem("sessionKey", response.data.sessionKey); // Save session key
    //     navigate("/feed"); // Redirect after login
    //   } else {
    //     toast.error(response.data.message || "Login failed!");
    //   }
    // } catch (error) {
    //   toast.error("Error logging in!");
    //   console.error("Login Error:", error);
    // }
  };

  return (
    <Container maxWidth="sm"  sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // ✅ Full viewport height to center vertically
        
      }}>
      <Paper elevation={3} sx={{ padding: 4, textAlign: "center", backgroundColor: "background.paper" }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Login to Prohori
        </Typography>

        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }} onClick={handleLogin}>
          Login
        </Button>

        <Typography variant="body2" sx={{ marginTop: 2 }}>
          Don't have an account?{" "}
          <Link to="/register" style={{ color: "#1976d2", textDecoration: "none", fontWeight: "bold" }}>
            Sign up now
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Login;

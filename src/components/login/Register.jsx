import React, { useState } from "react";
import { Box, TextField, Button, Typography, Container, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../config/baseUrl";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!username || !email || !password) {
      toast.error("Please fill in all fields!");
      return;
    }

    // try {
    //   const response = await axios.post(`${BASE_URL}/register`, { username, email, password });

    //   if (response.data.success) {
    //     toast.success("Registration successful! Redirecting to login...");
    //     setTimeout(() => navigate("/login"), 2000);
    //   } else {
    //     toast.error(response.data.message || "Registration failed!");
    //   }
    // } catch (error) {
    //   toast.error("Error registering!");
    //   console.error("Register Error:", error);
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
        <Typography variant="h4" color="text.primary" gutterBottom>
          Create an Account
        </Typography>

        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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

        <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }} onClick={handleRegister}>
          Register
        </Button>

        <Typography variant="body2" sx={{ marginTop: 2 }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#1976d2", textDecoration: "none", fontWeight: "bold" }}>
            Login now
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Register;

import React from "react";
import { useState } from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid"; // ✅ Correct import for Grid2
import Button from "@mui/material/Button"; // ✅ Correct import for Button

const Footer = () => {
  const theme = useTheme(); // Get theme to apply correct colors
  const [isLogged, setIsLogged] = useState(false);

  const navItems = [
    { text: "Home", path: "/" },
    // { text: "Feed", path: "/feed" },
    // ...(isLogged ? [{ text: "Profile", path: "/profile" }] : [{ text: "Login", path: "/login" }]), // ✅ Show Profile if logged in, otherwise show Login
  ];

  return (
    <Box
      sx={{
        backgroundColor: "footer.main",
        padding: "2rem",
        textAlign: "center",
        marginTop: "2rem",
        color: "text.primary",
      }}
    >
      {/* ✅ Project Description */}
      <Typography variant="h6" color="primary" gutterBottom>
        About Prohori
      </Typography>
      <Typography variant="body2" color="text.theme" sx={{ maxWidth: "600px", margin: "auto", marginBottom: "1rem" }}>
        Prohori is a crime reporting and community verification platform dedicated to ensuring security and trust.
        Join us in making our communities safer by reporting and staying informed.
      </Typography>

      {/* ✅ Navigation Links */}
      <Grid container spacing={2} justifyContent="center" sx={{ marginBottom: "1rem" }}>
        {navItems.map((item, index) => (
          <Grid item key={index}>
            <Link href={item.path} color="primary" underline="hover">
              {item.text}
            </Link>
          </Grid>
        ))}
      </Grid>
      {/* ✅ Social Media Icons */}
      

      {/* ✅ Copyright */}
      <Typography variant="body2" color="text.theme">
        © 2025 Prohori. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;

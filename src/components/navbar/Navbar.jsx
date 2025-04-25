import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, useTheme } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false); // ✅ Simulating login state (Change to `false` to test)
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // ✅ Define navigation items dynamically
  const navItems = [
    { text: "Home", path: "/" },
    // { text: "Feed", path: "/feed" },
    // ...(isLogged ? [{ text: "Profile", path: "/profile" }] : [{ text: "Login", path: "/login" }]), // ✅ Show Profile if logged in, otherwise show Login
  ];

  return (
    <>
      {/* ✅ Navbar for Larger Screens */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "background.paper",
          color: "text.primary",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // ✅ Added shadow here
        }}
>

        <Toolbar>
          {/* ✅ Mobile Menu Button */}
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle} sx={{ display: { xs: "block", md: "none" } }}>
            <MenuIcon />
          </IconButton>

          {/* ✅ Logo */}
          <Typography variant="h5" color="universalAccent" sx={{ flexGrow: 1, textDecoration: "none" }} component={Link} to="/">
            XFactor Engine
          </Typography>

          {/* ✅ Navigation Links (Hidden on Mobile) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "1rem" }}>
            {navItems.map((item, index) => (
              <Button key={index} color="inherit" component={Link} to={item.path}>
                {item.text}
              </Button>
            ))}
          </Box>

          {/* ✅ Theme Toggle Button */}
          <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
            {darkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* ✅ Mobile Drawer (Sidebar Menu) */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle} sx={{ display: { xs: "block", md: "none" } }}>
        <List sx={{ width: 250 }}>
          {navItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton component={Link} to={item.path} onClick={handleDrawerToggle}>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;

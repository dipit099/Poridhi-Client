import React, { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { lightMuiTheme, darkMuiTheme } from "./theme";
import AuthConfig from "./config/AuthConfig";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Profile from "./pages/Profile";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import NotFound from "./pages/NotFound";  // You might want a NotFound page

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkMuiTheme : lightMuiTheme}>
      <CssBaseline />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/feed" element={<Feed />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/demo" element={<Demo />} /> */}

        {/* Add auth-protected routes */}
        <Route element={<AuthConfig />}>

          {/* <Route path="/profile" element={<Profile />} /> */}
          {/* Add your protected routes here */}
        </Route>

        {/* Catch-all for undefined paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default App;

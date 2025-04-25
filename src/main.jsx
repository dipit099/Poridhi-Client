import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { lightMuiTheme } from "./theme"; // ✅ Import the default theme
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider theme={lightMuiTheme}>
    <CssBaseline />
    <BrowserRouter>
      <ToastContainer />
      <App />
    </BrowserRouter>
  </ThemeProvider>
);

import { createTheme } from "@mui/material/styles";

const typography = {
  fontFamily: "Inter, sans-serif",
  h4: { fontSize: "clamp(1.25rem, 3vw, 2rem)", fontWeight: 500 },
  h5: { fontSize: "clamp(1rem, 2vw, 1.25rem)", fontWeight: 500 },
  body: { fontSize: "clamp(0.875rem, 1.5vw, 1rem)" }, 
  body1: { fontSize: "clamp(0.875rem, 1.5vw, 1rem)" },
  body2: { fontSize: "clamp(0.75rem, 1.25vw, 0.875rem)" },
 

};

const lightTheme = {
  palette: {
    mode: "light",

    background: { default: "#E6EFF8", paper: "#F2F7FD" }, // use whole background name
    primary: { main: "#6EB5C0" }, // Blue
    secondary: { main: "#5B8FD3" }, // Orange
    accent: { main: "#6021A8" }, // Green (Custom accent)
    universalAccent: { main: "#0147A8" }, // Universal Blue Accent

    success: { main: "#2e7d32" }, // Green for success messages
    error: { main: "#f44336" }, // Red for errors
    footer: { main: "#1B2836" }, // Footer color
    text: { primary: "#000000", secondary: "#333333",theme:"#FFFFFF" }, // Darker text

  },
  typography,
};

const darkTheme = {
  palette: {
    mode: "dark",
    
    background: { default: "#1A102A", paper: "#2B1B3D" }, // Dark background
    primary: { main: "#6A0DAD" }, // Light Blue
    secondary: { main: "#8A2BE2" }, // Softer Orange
    accent: { main: "#B97ADB" }, // Light Green
    universalAccent: { main: "#9365b8" }, // Universal Blue Accent

    success: { main: "#4caf50" }, // Green for success
    error: { main: "#f44336" }, // Red for errors
    warning: { main: "#ffa726" }, // Warning
    info: { main: "#29b6f6" }, // Info blue
    footer: { main: "#D8CFF5" }, // Footer color
    text: { primary: "#ffffff", secondary: "#bdbdbdff",theme:"#000000" }, // White text for contrast
  },
  typography,
};

export const lightMuiTheme = createTheme(lightTheme);
export const darkMuiTheme = createTheme(darkTheme);

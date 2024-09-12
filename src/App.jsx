import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "./App.css";

function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <Suspense>
      <Navbar />
      <Outlet />
      <Footer />
    </Suspense>
  );
}

export default App;

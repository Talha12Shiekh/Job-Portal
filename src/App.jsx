import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "./App.css";
import Loader from "../Components/Loader";

function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;

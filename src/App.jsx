import {lazy,Suspense} from "react";
import Navbar from '../Components/Navbar'
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import './App.css'
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
const Categories = lazy(() => import("../Screens/Categories"))

function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <Suspense>
     <Navbar/>
     <Outlet/>
     <Footer/>
    </Suspense>
  )
}

export default App

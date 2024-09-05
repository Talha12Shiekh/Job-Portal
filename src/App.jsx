import {lazy,Suspense} from "react";
import Navbar from '../Components/Navbar'
const Home = lazy(() => import("../Screens/Home"))
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import './App.css'
import JobSearchSection from "../Components/JobSearchSection";
const Categories = lazy(() => import("../Screens/Categories"))
const Jobs = lazy(() => import("../Screens/Jobs"))

function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <Suspense>
     <Navbar/>
     <Home/>
     <JobSearchSection/>
     <Categories/>
     <Jobs/>
    </Suspense>
  )
}

export default App

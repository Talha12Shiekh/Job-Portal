import {lazy,Suspense} from "react";
import Navbar from '../Components/Navbar'
const Home = lazy(() => import("../Screens/Home"))
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import './App.css'
import JobSearchSection from "../Components/JobSearchSection";

function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <Suspense>
     <Navbar/>
     <Home/>
     <JobSearchSection/>
    </Suspense>
  )
}

export default App

import {lazy,Suspense} from "react";
import Navbar from '../Components/Navbar'
const Home = lazy(() => import("../Screens/Home"))
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import './App.css'

function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <Suspense>
     <Navbar/>
     <Home/>
    </Suspense>
  )
}

export default App

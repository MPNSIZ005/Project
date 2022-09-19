
import './App.css';

import HomeAppBar from './Components/HomeTopBar';
import Booking from './Components/Booking';
 
import Appointment from './Components/Appointment';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

import IconButton from '@mui/material/IconButton';
import { alpha,styled } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate,Link as RouterLink, } from "react-router-dom";
 
import RouterBar from './Components/RouterBar';


export default function App() {
 

  return (
    <div className="App">
      <RouterBar/>
      
      {/**<Booking/>  
       * <Appointment/>
      <Booking/>
       * <HomeAppBar/>
      */}
      

      
    </div>
  );
}



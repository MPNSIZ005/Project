import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { CssBaseline, Button } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate,Link as RouterLink, } from "react-router-dom";
import Services from '../RouterLinks/Services';
import Home from '../RouterLinks/Home';
import BookAppointment from '../RouterLinks/BookAppointment';
import About from '../RouterLinks/About';
import CustomerReviews from '../RouterLinks/CustomerReviews';
import HomeResearcher from '../RouterLinks/HomeResearchers';

function RouterBar() {
  return (
    <div>
        <Router >

                <AppBar position="fixed" >
                    <CssBaseline />
                    <Toolbar>

                    
                    
                        <Typography variant="h5"   sx={{ flex:1 }}>
                        SA AI Research Community
                        </Typography>

                        
                         
                        
                      

                        <Button component={RouterLink} to="/">
                            <Typography variant="p" color="white">
                                Home
                            </Typography>
                        </Button>
                        <Button component={RouterLink} to="/visuals">
                            <Typography variant="p" color="white">
                                Visuals
                            </Typography>
                        </Button>

                        {/* <Button component={RouterLink} to="/services">
                            <Typography variant="p" color="white">
                                Services
                            </Typography>
                        </Button> */}

                        <Button component={RouterLink} to="/about">
                            <Typography variant="p" color="white">
                                About
                            </Typography>
                        </Button>
                        
                    
                    </Toolbar>
                </AppBar>

    
                <Routes>
                    <Route path="/"  element={<HomeResearcher/>}  />
                    <Route path="/services"  element={<Services/>}   />
                    <Route path="/visuals"  element={<BookAppointment/>}/>
                    <Route path="/about"  element={<About/>}/>
                    <Route path="/customer-reviews"  element={<CustomerReviews/>}/>
                </Routes>
        </Router>

    </div>
  )
}

export default RouterBar
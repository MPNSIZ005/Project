import React , {useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { CssBaseline, Button } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate,Link as RouterLink, } from "react-router-dom"; 
import Home from '../RouterLinks/Home';
import Visuals from '../RouterLinks/Visuals'; 
import SearchComponent from '../RouterLinks/Search'; 
import AllResearchers from '../RouterLinks/AllResearchers';


/**
 * RouterBar contains the Router component which 
 * allows the user to navigate between different features
 * such as Advanced Search, Visuals, etc.
 * 
 * It contains url paths to navigate the user
 * 
 */

function RouterBar() {

    const [person, setPerson] = useState("person");

   
  return (
    <div>
        <Router>

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
 
                         <Button component={RouterLink} to="/search">
                            <Typography variant="p" color="white">
                                Search
                            </Typography>
                        </Button>

                        <Button component={RouterLink} to="/all-researchers">
                            <Typography variant="p" color="white">
                                all researchers
                            </Typography>
                        </Button>
                    
                    </Toolbar>
                </AppBar>

    
                <Routes>
                    
                     


                    <Route path="/"  element={<Home setPerson={setPerson}/>}  />
                    
                    <Route path="/search"  element={<SearchComponent/>}/>
                    <Route path="/visuals"  element={<Visuals/>}/>  
                    <Route path="/all-researchers"  element={<AllResearchers/>}/>

                </Routes>
        </Router>

    </div>
  )
}

export default RouterBar
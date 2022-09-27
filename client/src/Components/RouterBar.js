import React , {useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { CssBaseline, Button } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate,Link as RouterLink, } from "react-router-dom";
import Services from '../RouterLinks/Services';
import Home from '../RouterLinks/Home';
import Visuals from '../RouterLinks/Visuals';
import About from '../RouterLinks/About';
import CustomerReviews from '../RouterLinks/CustomerReviews';
import SearchComponent from '../RouterLinks/Search';
import Person from '../RouterLinks/Person';

function RouterBar() {

    const [person, setPerson] = useState("person");

    // this.state = {
    //     person:"person"
    // }
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

                        {/* <Button component={RouterLink} to="/services">
                            <Typography variant="p" color="white">
                                Services
                            </Typography>
                        </Button> */}

                        {/* <Button component={RouterLink} to="/about">
                            <Typography variant="p" color="white">
                                About
                            </Typography>
                        </Button> */}
                         <Button component={RouterLink} to="/search">
                            <Typography variant="p" color="white">
                                Search
                            </Typography>
                        </Button>
                    
                    </Toolbar>
                </AppBar>

    
                <Routes>
                    
                    <Route
                    exact
                    path={"/person"}
                    render={props => (
                        <Person {...props} status={person}/>
                    )}
                    element={<Person status={person}/>}
                    />


                    <Route path="/"  element={<Home setPerson={setPerson}/>}  />
                    <Route path="/services"  element={<Services/>}   />
                    <Route path="/search"  element={<SearchComponent/>}/>
                    <Route path="/visuals"  element={<Visuals/>}/>
                    <Route path="/about"  element={<About/>}/>
                    <Route path="/customer-reviews"  element={<CustomerReviews/>}/>
                </Routes>
        </Router>

    </div>
  )
}

export default RouterBar
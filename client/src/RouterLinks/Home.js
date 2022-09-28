import React from 'react'
import { Box,Button } from '@mui/material'  
import ResearchersGrid from '../cardsComponents/ResearchersGrid';
import TrendinList from '../cardsComponents/TrendingList';
import Axios from 'axios';
import Paper from '@mui/material/Paper';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

/**
 * Home component is what the user sees when the web app starts
 * it contains the chosen researchers and articles for that particular session
 * 
 * It displays a subset of researchers in a grid
 * 
 */

function Home({setPerson}) { 
  const [articles,setArticles] = React.useState([]);

  Axios.get("http://localhost:4000/recordarticle").then((response) => {
  
    console.log(response.data);
    setArticles(response.data.slice(0,6));
 
  })
  return (
    <>
    <Box sx={{padding:5,marginTop:0}}>
       
       
     <Box sx={{padding:5,marginBottom:1}}>
          <Item  elevation={3} >
                       

                        <h2>Our Chosen articles & researchers to watch out for...</h2>
                      </Item>
     </Box>

  

 <TrendinList articleList={articles}/>

 


      <Box sx={{padding:5,marginBottom:1,marginTop:-4}}>
          <Item  elevation={3} >
                      

                        <h2>Our Community Subset</h2> 
                      </Item>
     </Box>


      <ResearchersGrid searchValue={""}/>
    
      
    </Box>
    
 
    
    
    </>
  )
}

export default Home;
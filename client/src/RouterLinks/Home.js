import React from 'react'
import { Box,Button } from '@mui/material'
import Reviews from '../Components/Reviews'
import allReviews from '../Data/reviews';
import RegionCard from '../RegionComponent/RegionCard';
import RegionDisplay from '../RegionComponent/RegionDisplay';
import HorizontalListTest from '../RegionComponent/HorizontalList';
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



function Home({setPerson}) {
  const reviews = allReviews.reviews;
  const [articles,setArticles] = React.useState([]);

  Axios.get("http://localhost:4000/recordarticle").then((response) => {
  //setListOfResearchers(response.data)
    console.log(response.data);
    setArticles(response.data.slice(0,6));

 
  //console.log(response.data)
  })
  return (
    <>
    <Box sx={{padding:5,marginTop:0}}>
       
       
     <Box sx={{padding:5,marginBottom:1}}>
          <Item  elevation={3} >
                        {/* {`elevation=${3}`} */}

                        <h2>Our Chosen articles & researchers to watch out for...</h2>
                      </Item>
     </Box>

    
      {/* <TrendingList/> */}
      {/* <RegionDisplay regionList={["WC","KZN","GP","EC","NW","LIM","NC","FS","MP"]}/> */}
      {/* <HorizontalListTest/> */}

      {/* Axios.get("http://localhost:4000/recordarticle").then((response) => {
  
         console.log(response.data)
 
       }) */}


      
      
      {/* <TrendinList articleList={["Sentence analysis using a concept lattice","A Monte Carlo simulation based approach for stochastic semi-infinite mathematical programming problems"]}/> */}


 <TrendinList articleList={articles}/>



      {/* <h2>Community Subset</h2>  */}


      <Box sx={{padding:5,marginBottom:1,marginTop:-4}}>
          <Item  elevation={3} >
                        {/* {`elevation=${3}`} */}

                        <h2>Our Community Subset</h2> 
                      </Item>
     </Box>


      <ResearchersGrid searchValue={""}/>
      {/* <HorizontalListTest/> */}
      
    </Box>
    
    {/* <Reviews reviews_prop={reviews.slice(0, 3)}/>
    <Button sx = {{marginTop:-10}} href="/customer-reviews" variant="contained">Read more Reviews</Button>
     */}
    
    
    </>
  )
}

export default Home;
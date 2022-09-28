import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ResearcherCard from '../cardsComponents/ResearcherCard';
import {useState, useEffect } from 'react'
import Axios from 'axios'
import people from '../Data/records.json';
 
 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


/**
 * ResearchersGrid component displays a grid for the ResearchersCard when user performs queries
 * This component ensures that the ResearcherCards are displayed in a grid form
 * 
 */

export default function ResearcherSearchGrid({url,params}) {
  //console.log(searchValue)
   const [listOfResearchers, setListOfResearchers] = useState([])
    console.log(params)
     const [searchString,setSearchString] = useState('');
    var searchTemp = "Search results for ";
    if(params.query !== " "){
      searchTemp += params.query + ",";
    }
    if(params.gender !== " "){
      searchTemp += " a " + params.gender + ",";
    }
    if(params.region !== " "){
      searchTemp += " from " + params.region + ", ";
    }
    if(params.uni !== " "){
      searchTemp += " based in " + params.uni + " ";
    }

    if (params.gender == " " && params.query == " " && params.region == " " && params.uni == " "){
      searchTemp += "all researchers";
    } 
   
 console.log(url)
 Axios.get(url).then((response) => {
  setListOfResearchers(response.data)
  console.log(response.data)
 
})
  const [listOfResearchersSearched, setListOfResearchersSearched] = useState([])
 
 


  return (
    <Box sx={{ flexGrow: 1 , padding:5,marginTop:-5}} >
        
         

        <Card variant="outlined" sx={{ marginBottom:2}}>

                <React.Fragment>
            <CardContent>
             
              <Typography variant="h5" component="div">
              {searchTemp}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              { `${listOfResearchers.length} search results...`  }
              </Typography>
               
            </CardContent>
             
          </React.Fragment>
        </Card>
        
      <Grid container spacing={2}>
        
     

        {listOfResearchers.filter(
          (val) => {
             
            return val;
 
          }).map((val,key) => {
            return(
              <Grid item xs={3} key={key}>
                 <ResearcherCard researcher={val}/>
             </Grid>
            );
        })}

        { listOfResearchers.length==0 ? <h2>No results</h2> : <></> }
        
 
      </Grid>

      
    </Box>



    
  );
}

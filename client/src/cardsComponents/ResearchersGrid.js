import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ResearcherCard from './ResearcherCard';
import {useState, useEffect } from 'react'
//import Axios from 'axios'
import people from '../Data/records.json';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


/**
 * ResearchersGrid component displays a grid for the ResearchersCard
 * This component ensures that the ResearcherCards are displayed in a grid form
 * 
 */

export default function ResearchersGrid({searchValue}) {
  console.log(searchValue)
  const [listOfResearchers, setListOfResearchers] = useState([])
  const [listOfResearchersSearched, setListOfResearchersSearched] = useState([])
  useEffect(() => {
    setListOfResearchers(people.slice(1, 29))
     
  },[])

 

  return (
    <Box sx={{ flexGrow: 1 , padding:5,marginTop:-5}}>
        
      <Grid container spacing={2}>
        
          
       

        {listOfResearchers.filter(
          (val) => {
            if(searchValue==""){
              return val;
            }else if(val.Surname.toLowerCase().includes(searchValue.toLowerCase())){
              return val;
            }

            //itemFilter.Surname.toLowerCase().includes(searchValue.toLowerCase())
          }).map((val,key) => {
            return(
              <Grid item xs={3} key={key}>
                 <ResearcherCard researcher={val} key={key}/>
             </Grid>
            );
        })}


        

      
      </Grid>

      
    </Box>



    
  );
}

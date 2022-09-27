import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ResearcherCard from '../cardsComponents/ResearcherCard';
import {useState, useEffect } from 'react'
import Axios from 'axios'
import people from '../Components/records.json';
 
 
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
      searchTemp += " enrolling in " + params.uni + " ";
    }

    if (params.gender == " " && params.query == " " && params.region == " " && params.uni == " "){
      searchTemp += "all researchers";
    } 
    // console.log(searchTemp)
    //setSearchString(searchTemp)


   //const [researchers,setResearchers] = React.useState([]);
  //const researchers = listOfResearchers;
 // setResearchers(listOfResearchers);
 console.log(url)
 Axios.get(url).then((response) => {
  setListOfResearchers(response.data)
  console.log(response.data)

 
  //console.log(response.data)
})
  const [listOfResearchersSearched, setListOfResearchersSearched] = useState([])
  // useEffect(() => { 
  //   console.log("getting the information...")
  //   Axios.get(url).then((response) => {
  //     setListOfResearchers(response.data)
  //     console.log(response.data)
       
  //   })
  // },[])

 


  return (
    <Box sx={{ flexGrow: 1 , padding:5,marginTop:-5}} >
        
         

        <Card variant="outlined" sx={{ marginBottom:2}}>

                <React.Fragment>
            <CardContent>
              {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {searchTemp}
              </Typography> */}
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
        
          
        

        {
          /*listOfResearchers.filter(itemFilter => itemFilter.Surname.toLowerCase().includes(searchValue.toLowerCase())).map(researcherItem => (
            <Grid item xs={3} key={researcherItem.title}>
            <ResearcherCard researcher={researcherItem}/>
          </Grid>
        ))
        
        */}

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
        

        

        {
          /* 

            <Grid item xs={4}>
        <ResearcherCard/>
        </Grid>
        <Grid item xs={4}>
        <ResearcherCard/>
        </Grid>
        <Grid item xs={4}>
        <ResearcherCard/>
        </Grid>
        <Grid item xs={4}>
        <ResearcherCard/>
        </Grid>
        <Grid item xs={4}>
        <ResearcherCard/>
        </Grid>


          */
        }
      </Grid>

      
    </Box>



    
  );
}

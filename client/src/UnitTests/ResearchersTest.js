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
 * This components is for performing api unit tests...
 * 
 */

export default function UnitTests() {
  
  
 
    const articlesUnitTest = () => {
        Axios.get("http://localhost:4000/record").then((response) => {
            
            console.log(response.data)
            if(response.data.length === 1475){
                console.log("All Researchers api test Passed ")
            }else{
                console.log("All Researchers api test Failed ")
            }

            
          })
    }

    articlesUnitTest();

    const queryUnitTest = () => {
        Axios.get("http://localhost:4000/search/MARWALA%2C%20T,Male,Gauteng,University%20of%20Johannesburg").then((response) => {
             
            console.log(response.data)
            var obj = response.data[0];
             

            if(obj.nameAndSurname==="MARWALA, T" &&  obj.institution==="University of Johannesburg" && obj.gender==="Male" && obj.email === "tmarwala@uj.ac.za"){
                console.log("queryUnitTest test Passed ")
            }else{
                console.log("queryUnitTest test Failed ")
            }

            
          })
    }

    queryUnitTest();

    const institutionUnitTest = () => {
        Axios.get("http://localhost:4000/institution/University%20of%20Cape%20Town ").then((response) => {
             
            console.log(response.data)
          
            if(response.data.length === 39){
                console.log("All Researchers api test Passed ")
            }else{
                console.log("All Researchers api test Failed ")
            }

            
          })
    }

    institutionUnitTest()


  return (
    <Box sx={{ flexGrow: 1 , padding:5,marginTop:-5}} >
        
         

        

      
    </Box>



    
  );
}

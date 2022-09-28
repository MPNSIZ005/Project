 import Axios from 'axios'

import * as React from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box'; 

import {useState, useEffect } from 'react'
 

import AllTable from '../ResearchersTable.js/AllTable';

/**
 * AllResearchers component is the component that holds the table for
 * all researchers...
 * 
 */

export default function AllResearchers() {

  const [allReseachers, setAllResearchers] = React.useState([])



        useEffect(() => {
          
          Axios.get("http://localhost:4000/record").then((response) => {
              
              setAllResearchers(response.data.slice(0,15))
              console.log(allReseachers.length)
            })
         
        },[])

        console.log(allReseachers.length)

  return (
   <Box sx={{padding:2,marginTop:10}}>
      
            <AllTable/>
   
   </Box>
  );
}

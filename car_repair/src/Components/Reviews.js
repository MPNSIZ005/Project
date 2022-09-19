 
import ReviewCard from './ReviewCard'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Reviews({reviews_prop}) {
  const reviews = reviews_prop;
  return (
    <>
        <h1>Some of our Satisfied Customers</h1>
        <h3>See why our customers love Thabiso's Auto Clinic</h3>

      <Box sx={{ flexGrow: 1, padding:10,marginTop:-10 }}>
        <Grid container spacing={2}>
            
            {
              
              reviews.map((rev) => ( 
                
                <Grid key={rev.name} item xs={12} md={6}>
                  <Item  >
                    <ReviewCard  reviews={rev}/>
                  </Item>
                </Grid>
              ))
            }


            
        </Grid>
        
        
        
      </Box>

    </>
  )
}

export default Reviews
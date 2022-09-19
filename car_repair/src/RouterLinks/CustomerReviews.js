import React from 'react';
import { Box } from '@mui/material';
import Reviews from '../Components/Reviews';
import allReviews from '../Data/reviews';
export default function CustomerReviews(){
    const reviews = allReviews.reviews;
    return(
        <Box sx={{marginTop:15}}>
           
            <Reviews reviews_prop={reviews}/>
        </Box>
    );
}
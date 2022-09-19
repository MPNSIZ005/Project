import React from 'react'
import { Box,Button } from '@mui/material'
import Reviews from '../Components/Reviews'
import allReviews from '../Data/reviews';


function Home() {
  const reviews = allReviews.reviews;
  return (
    <>
    <Box sx={{padding:5,marginTop:5}}>
      <h1>AUTO REPAIR & CAR SERVICE, MAINTENANCE CENTRE</h1>
      <h2>Protea Glen's leading high tech service centre</h2>
      <p>If you are searching for a trusted and professional auto repair and service centre in Soweto, rely on the best in the business for assistance. Thabiso's Auto Clinic has built an outstanding reputation amongst our clients as a top choice when it comes to auto repair and auto service centres in Soweto.</p>

      <p>Thabiso's Auto Clinic has been in the auto repair and car service industry for many years, during which we gained extensive experience in all bakkie/vehicle related services – this includes car service and maintenance, auto repair and performance enhancement. Thabiso's Auto Clinic employs well trained mechanics for the task at hand. With Thabiso's Auto Clinic network of mechanics in many towns in Soweto, there is no reason why you too can’t take your bakkie/vehicle to Thabiso's Auto Clinic branches for a service.</p>
    </Box>
    
    <Reviews reviews_prop={reviews.slice(0, 3)}/>
    <Button sx = {{marginTop:-10}} href="/customer-reviews" variant="contained">Read more Reviews</Button>
    </>
  )
}

export default Home
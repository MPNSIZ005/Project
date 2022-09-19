 
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarReviewStack from './StarReviewStack'
import FiveStarImage from '../Images/five_star.png';
import { Icon } from '@mui/material';
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
);

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

export default function ReviewCard({reviews}){
    return(
        <Card variant="text" sx={{ minWidth: 275 , elevation:3}}>
            <CardContent>
                
                <Typography variant="h5" component="div">
                 {bull}{reviews.name}
                </Typography>
                

                <Icon  sx={{width:100}}>
                    <img  src={FiveStarImage} height={20} width={100}/>
                
                </Icon>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Review from Google
                </Typography>
                <ColoredLine color="grey" />
                <Typography variant="body1">
                {reviews.review_words}
                <br />
                
                
                </Typography>
            </CardContent>
            
        </Card>
    );
}
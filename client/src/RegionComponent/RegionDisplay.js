import React from 'react'
import { Box,Button } from '@mui/material'
import Reviews from '../Components/Reviews'
import allReviews from '../Data/reviews';
import RegionCard from '../RegionComponent/RegionCard';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {Typography} from '@mui/material';
function RegionDisplay(props) {

    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
        flexWrap: "nowrap"
      };
      
      return (
        <List style={flexContainer}>
          {/* <ListItem
            primaryText="foo1"
            secondaryText="bar1"/>
          <ListItem
            primaryText="foo2"
            secondaryText="bar2"/> */}

            {
                props.regionList.map( (item) => {
                    return (<ListItem>
                        <RegionCard  name={item}/>
                    </ListItem>)
                } )
            }

            
            

                            
        </List>
      );


 
//   return (
//     <>
//     <Box sx={{padding:5,marginTop:5}}>
       
//       <h2>Regions</h2> 
//       <RegionCard name={"Western Cape"}/>
      
//     </Box>
    
//     </>
//   )
}

export default RegionDisplay
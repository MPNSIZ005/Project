import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button ,Grid,Paper,Box,Typography} from '@mui/material';
import AutoElectricalImage from '../Images/auto_electrical.jpg'
import CarPartsImage from '../Images/car_parts.jpg'
import CarRepairImage from '../Images/car_repair.jpg'
import CarServiceImage from '../Images/car_service.jfif'
import SafetyCheckImage from '../Images/safety_check.jpg'
import VehicleInspectionImage from '../Images/vehicle_inspection.jfif'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Booking() {
  return (
    <Box sx={{ flexGrow: 1, marginTop:4, padding:3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
           <Item sx={{ backgroundImage:`url(${CarServiceImage})` }} >
                <Typography style={{color: "#FFFFFF"}}><h3>CAR SERVICING</h3></Typography>
                
                <Button variant="contained" style={{textTransform: 'none'}} >Service Now</Button>
            </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
            
            <Item sx={{ backgroundImage:`url(${CarRepairImage})` }} >
                <Typography style={{color: "#FFFFFF"}}><h3>CAR REPAIRS</h3></Typography>
                
                <Button variant="contained" style={{textTransform: 'none'}}>Book Now</Button>
            </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Item sx={{ backgroundImage:`url(${CarPartsImage})` }} >
                <Typography style={{color: "#FFFFFF"}}><h3> PREMIUM PARTS</h3></Typography>
                
                <Button variant="contained" style={{textTransform: 'none'}}>Our Suppliers</Button>
            </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Item sx={{ backgroundImage:`url(${SafetyCheckImage})` }} >
                <Typography style={{color: "#FFFFFF"}}> <h3>Vehicle Safety Checks</h3> </Typography>
                 
                <Button variant="contained" style={{textTransform: 'none'}}>Book a Safety Check</Button>
            </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Item sx={{ backgroundImage:`url(${VehicleInspectionImage})` }} >  
                <Typography style={{color: "#FFFFFF"}}> <h3>Vehicle Inspection</h3> </Typography>
                <Button variant="contained" style={{textTransform: 'none'}}>Book a Vehicle Inspection</Button>
            </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Item sx={{ backgroundImage:`url(${AutoElectricalImage})` }} >       
                <Typography style={{color: "#FFFFFF"}}> <h3>Auto Electrical</h3> </Typography>
                <Button variant="contained" style={{textTransform: 'none'}}>Book a Electrical Check</Button>
            </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

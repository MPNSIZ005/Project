import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button ,Grid,Paper,Box,Typography,Card,CardActionArea,CardContent} from '@mui/material';
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

export default function Services() {
  return (
    <Box sx={{ flexGrow: 1, marginTop:10, padding:3 }}>
      <Grid container spacing={2}  >

        <Grid style={{marginBottom:0}}  item xs={12} sm={6}>
            
                <Card variant="text" sx={{ height:300,minWidth: 275 , elevation:3,backgroundImage:`url(${CarServiceImage})`}}>
                    <CardContent>
                        <Typography variant="h5" style={{color: "#FFFFFF"}}>CAR SERVICING</Typography>
                
                        <Button variant="contained" style={{textTransform: 'none'}} >Service Now</Button>
                    </CardContent>
                </Card> 
             
        </Grid>

         
        <Grid item xs={12} sm={6}>
            <Card variant="text" sx={{ height:300,minWidth: 275 , elevation:3,backgroundImage:`url(${CarRepairImage})`}}>
                    <CardContent>
                        <Typography variant="h5" style={{color: "#FFFFFF"}}>CAR REPAIRS</Typography>
                
                        <Button variant="contained" style={{textTransform: 'none'}} >Book Now</Button>
                    </CardContent>
             </Card> 

 
        </Grid>
        <Grid item xs={12} sm={6}>
            
            <Card variant="text" sx={{ height:300,minWidth: 275 , elevation:3,backgroundImage:`url(${CarPartsImage})`}}>
                    <CardContent>
                        <Typography variant="h5" style={{color: "#FFFFFF"}}>PREMIUM PARTS</Typography>
                
                        <Button variant="contained" style={{textTransform: 'none'}} >Our Suppliers</Button>
                    </CardContent>
            </Card> 

             
        </Grid>
        <Grid item xs={12} sm={6}>

            <Card variant="text" sx={{ height:300,minWidth: 275 , elevation:3,backgroundImage:`url(${SafetyCheckImage})`}}>
                    <CardContent>
                        <Typography variant="h5" style={{color: "#FFFFFF"}}>Vehicle Safety Checks</Typography>
                
                        <Button variant="contained" style={{textTransform: 'none'}} >Book a Safety Check</Button>
                    </CardContent>
            </Card> 
 
        </Grid>
        <Grid item xs={12} sm={6}>

            <Card variant="text" sx={{ height:300,minWidth: 275 , elevation:3,backgroundImage:`url(${VehicleInspectionImage})`}}>
                    <CardContent>
                        <Typography variant="h5" style={{color: "#FFFFFF"}}>Vehicle Inspection</Typography>
                
                        <Button variant="contained" style={{textTransform: 'none'}} >Book a Vehicle Inspection</Button>
                    </CardContent>
            </Card> 

            
        </Grid>
        <Grid item xs={12} sm={6}>

            <Card variant="text" sx={{ height:300,minWidth: 275 , elevation:3,backgroundImage:`url(${AutoElectricalImage})`}}>
                    <CardContent>
                        <Typography variant="h5" style={{color: "#FFFFFF"}}>Auto Electrical </Typography>
                
                        <Button variant="contained" style={{textTransform: 'none'}} >Book a Electrical Check</Button>
                    </CardContent>
            </Card>

            
        </Grid>
      </Grid>
    </Box>
  )
}


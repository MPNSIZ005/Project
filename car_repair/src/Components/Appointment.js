import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"
import renderChart from "../Graphs/YearLineGraph";
import {Bar } from 'react-chartjs-2';
import React , {useState, useEffect} from "react";

import { Button } from '@mui/material'
//import Appyy from '../Graphs/LineGraphy'
 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//import RESEARCHERS from './records.json'
import GenderGraph from '../Graphs/GenderGraph';

import { styled } from '@mui/material/styles';
//import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import YearGraph from "../Graphs/YearLineGraph";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

 
 

export default function Appointment() {

    const [chartData, setChartData] = useState({
        datasets:[],
    })

    const [chartOptions, setChartOptions] = useState({
        
    })

    //getGenderData();

    useEffect( () => {
        setChartData({
            labels:["male","female"],
            datasets : [
                {
                    label : "Researcher Gender",

                    data:[58,49],
                    borderColor : "rgb(53, 162, 235)",
                    backgroundColor : "rgb(53, 162, 235, 0.4)",


                }
            ]
        });
        setChartOptions({
            responsive:true,
            plugins: {
                legend:{position:"top"},
                title:{
                    display : true,text : "Genders of AI Researchers in SA"
                }
            }
        })
    } )

  // <a href="//api.whatsapp.com/send?phone=27613496686&text=WHATEVER_LINK_OR_TEXT_YOU_WANT_TO_SEND" title="Share on whatsapp">WhatsApp</a>
    return (
        <Box
        sx={{
          
            marginTop:10,
            padding:5
        }}  
        >
        <div>
{/*         
        <iframe style={{background: "#FFFFFF",borderRadius: 2,padding:10}} width="940" height="680" src="https://charts.mongodb.com/charts-project-0-qwzco/embed/charts?id=632392dd-af2d-40cb-8180-849622f8f5c8&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
     */}
        </div>
            {/* <GenderGraph/>
            <GenderGraph/> */}
            <Grid container spacing={2}>
  <Grid item xs={12}>
    <Item sx={{padding:2}}>

    <iframe style={{background: "#FFFFFF",borderRadius: 2,padding:2}} width="70%" height="450" src="https://charts.mongodb.com/charts-project-0-qwzco/embed/charts?id=632392dd-af2d-40cb-8180-849622f8f5c8&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
    
    </Item>
  </Grid>
  <Grid item xs={12}>
  <Item sx={{padding:2}}>

      <iframe style={{background: "#FFFFFF",borderRadius: 2,padding:2}} width="70%" height="450" src="https://charts.mongodb.com/charts-project-0-qwzco/embed/charts?id=632433e3-af2d-4e3d-8010-8496221d7fda&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
</Item>
  </Grid>

  <Grid item xs={12}>
  <Item sx={{padding:2}}>

  <iframe style={{background: "#FFFFFF",borderRadius: 2,padding:2}} width="70%" height="450" src="https://charts.mongodb.com/charts-project-0-qwzco/embed/charts?id=63244057-d773-44a6-8677-22e545f75ac4&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
      
 
</Item>
  </Grid>

  
  
   
</Grid>
{/* 
<iframe style={background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2); width="940" height="680" src="https://charts.mongodb.com/charts-project-0-qwzco/embed/charts?id=632392dd-af2d-40cb-8180-849622f8f5c8&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
         */}
        
        </Box>
    );
}

  
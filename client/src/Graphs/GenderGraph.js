import { Button } from '@mui/material'
 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import RESEARCHERS from './records.json'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"

import {Bar } from 'react-chartjs-2';
import React , {useState, useEffect} from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

function getGenderData(){
    const genderLabels = ["Male","Female"];
    //console.log(RESEARCHERS)
    for(var i=0;i<300;i++){
    //    console.log(RESEARCHERS)
    }
   // for(var i=0;)

}

export default function Gender() {

    const [chartData, setChartData] = useState({
        datasets:[],
    })

    const [chartOptions, setChartOptions] = useState({
        
    })

    getGenderData();

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
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            marginTop:2,
            padding:1
        }}
        noValidate
        autoComplete="off"
        >
         
            <Bar options={chartOptions} data={chartData}/>
            {/* <TextField id="outlined-basic" label="Name" placeholder='Name' variant="outlined" />
            <TextField id="outlined-basic" label="Company Name" placeholder='Company Name' variant="outlined" />
            <TextField id="outlined-basic" label="Email" placeholder='email' variant="outlined" />
            <TextField id="outlined-basic" label="Name" placeholder='Name' variant="outlined" /> */}
        </Box>
    );
}

  
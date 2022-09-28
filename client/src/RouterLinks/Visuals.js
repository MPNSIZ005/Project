import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


/**
 *  The Visuals component is for users to be able to interact with
 *  the data in the database through visual graphs...
 * 
 *  It contains html links to the graphs we have built using other software...
 * 
 */

function Visuals() {
  return (
      <Box sx={{marginTop:6,padding:2}}>

          <Stack spacing={2}>
          
       
            <iframe width="100%" height="550" src="https://datastudio.google.com/embed/reporting/d848dced-dc18-468b-ad3b-70f415d228c7/page/1Ud3C" frameborder="0"  style={{border:0}} allowfullscreen></iframe>

       
            <iframe width="100%" height="550" src="https://datastudio.google.com/embed/reporting/90eb9200-6414-460a-8456-307e06338756/page/t0e3C" frameborder="0"  style={{border:0}} allowfullscreen></iframe>
          
          </Stack>


      </Box>
  )
}

export default Visuals
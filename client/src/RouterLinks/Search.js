import { Box, Button } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ListItem ,List, Stack,Paper} from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete';
import ResearchersGrid from '../cardsComponents/ResearchersGrid';
import { styled } from '@mui/material/styles';
import ResearcherCard from '../cardsComponents/ResearcherCard';
import ResearcherSearchGrid from '../SearchComponents/ResearcherSearchGrid';
import {useState, useEffect } from 'react'
import Axios from 'axios'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function SearchComponent() {






  // From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries = [
  { code: 'AD', label: 'Andorra', phone: '376' },
  {
    code: 'AE',
    label: 'United Arab Emirates',
    phone: '971',
  },
  
];

const genders = [

{gender: "male"},
{gender: "female"}
 
  
];

const regions = [
  {value: ' ', region: '--Choose a region--'},
  {region: "Western Cape",value: "Western Cape"},
  {region: "Gauteng",value: "Gauteng"},
  {region: "North West",value: "North West"},
  {region: "Limpopo",value: "Limpopo"},

  {region: "Northern Cape",value: "Northern Cape"},
  {region: "Kwazulu Natal",value: "Kwazulu Natal"},
  {region: "Eastern Cape",value: "Eastern Cape"},
  {region: "Free State",value: "Free State"},
  {region: "Mpumalanga",value: "Mpumalanga"}
   
    
  ];

  const institutions = [
    {value: ' ', uni: '--Choose a uni--'},
    {uni: "University of Cape Town",value: "University of Cape Town"},
    {uni: "University of KwaZulu Natal",value: "University of KwaZulu Natal"},
    {uni: "University of Johannesburg",value: "University of Johannesburg"},
    {uni: "University of Pretoria",value: "University of Pretoria"},
    {uni: "Tshwane University of Technology",value: "Tshwane University of Technology"},
    {uni: "Nelson Mandela University",value: "Nelson Mandela University"},
    {uni: "Durban University of Technology",value: "Durban University of Technology"},
    {uni: "North-West University",value: "North-West University"},
    {uni: "Stellenbosch University",value: "Stellenbosch University"},

    {uni: "CSIR",value: "CSIR"},
    {uni: "University of Witwatersrand",value: "University of Witwatersrand"},
    {uni: "Rhodes University",value: "Rhodes University"},
    {uni: "University of Zululand",value: "University of Zululand"},
    {uni: "South African National Biodiversity Institute",value: "South African National Biodiversity Institute"},
    {uni: "University of Western Cape",value: "University of Western Cape"},

    {uni: "Cape Peninsula University of Technology",value: "Cape Peninsula University of Technology"},
    {uni: "Walter Sisulu University",value: "Walter Sisulu University"},
    {uni: "University of Venda",value: "University of Venda"},
    {uni: "Sasol Group Technology Research & Technology",value: "Sasol Group Technology Research & Technology"},
    {uni: "MINTEK",value: "MINTEK"},
    {uni: "AIMS",value: "AIMS"},
    {uni: "Mangosuthu University of Technology",value: "Mangosuthu University of Technology"},
    {uni: "South African Institute for Aquatic Biodiversity",value: "South African Institute for Aquatic Biodiversity"},
    {uni: "Sol Plaatje University",value: "Sol Plaatje University"},
    {uni: "Masakhane NLP",value: "Masakhane NLP"},

    {uni: "University of South Africa",value: "University of South Africa"}

 








     
      
    ];

const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  padding: 0,
};


const [listOfResearchers,setListOfResearchers] = useState({});



const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(age + " is the age")
  };


  const [gender, setGender] = React.useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    console.log(gender)
  };


  const genderOptions = [
    {value: ' ', text: '--Choose a sex--'},
    {value: 'Female', text: 'Female 🍏'},
    {value: 'Male', text: 'Male 🍌'} 
  ];

  const [selectedGender, setSelectedGender] = useState(genderOptions[0].value);

  const handleGenderOnChange = event => {
    console.log(event.target.value + " is the gender...");
    setSelectedGender(event.target.value);
  };

  const [selectedUni, setSelectedUni] = useState(institutions[0].value);

  const handleUniOnChange = event => {
    console.log(event.target.value + " is the uni...");
    setSelectedUni(event.target.value);
  };

  const [selectedRegion, setSelectedRegion] = useState(regions[0].value);

  const handleRegionOnChange = event => {
    console.log(event.target.value + " is the region...");
    setSelectedRegion(event.target.value);
  };


  const [url, setUrl] = React.useState('');


 
  const [querySearch, setQuerySearch] = React.useState(' ');
  const handleBtnSubmit = event => {
     
 
    var tempUrl =  `http://localhost:4000/search/${escape(querySearch)},${selectedGender},${selectedRegion},${escape(selectedUni)}`  
    setUrl(tempUrl);
     
  };

  const queryOnChange = event => {
    console.log("new :"+escape(event.target.value) ); // var tempUrl =  `http://localhost:4000/search/${encode(querySearch)},${selectedGender},${selectedRegion},${encode(selectedUni)}`  
    setQuerySearch(event.target.value);
  };
  

  useEffect(() => {
    //setListOfResearchers(people.slice(1, 29))
  
    if(url!==''){
          Axios.get(url).then((response) => {
          setListOfResearchers(response.data)
          console.log(response.data)
        })
    }
   
  },[])

  return (
    
    <Box sx={{marginTop:10}}>
        
        <Box sx={{padding:2,marginTop:-3}}>
        <h2>Advanced Search</h2>





        <TextField fullWidth label="search" id="fullWidth" sx={{background:'white'}} onChange={queryOnChange} />
        
       

       

<Stack direction="row" spacing={2}   sx={{marginTop:2 }} >

<select value={selectedRegion} onChange={handleRegionOnChange}>
{regions.map(option => (
          <option key={option.value} value={option.value}>
            {option.region}
          </option>
        ))}
      </select>

<select value={selectedGender} onChange={handleGenderOnChange}>
{genderOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>

      <select value={selectedUni} onChange={handleUniOnChange}>
{institutions.map(option => (
          <option key={option.value} value={option.value}>
            {option.uni}
          </option>
        ))}
      </select>




    
</Stack>



<Button variant="contained" sx={{marginTop:1,marginBottom:3}} onClick={handleBtnSubmit}>Search</Button>





{ url.length!==0 ? <ResearcherSearchGrid url={url} params={{"region":selectedRegion,"uni":selectedUni,"gender":selectedGender,"query":querySearch}}/> : <></> }
 




        </Box>

    </Box>
  )
}

export default SearchComponent
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link,useLocation } from "react-router-dom";
import { useNavigate,Link as RouterLink, } from "react-router-dom";
 
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';  
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';


import { CardActionArea } from '@mui/material'


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



/**
 *  ResearcherCard component contains a card to display information about a researcher such 
 * as specialisation, nameAndSurname, gender,etc
 * 
 * This component also contains a dialog component that appears when a ResearcherCard is clicked
 * The dialog contains more information about a researcher.
 * 
 */


export default function ResearcherCard(props) {

  const surname  = props.researcher.nameAndSurname;
  const Province  = props.researcher.Province;
  const publications  = props.researcher.publications;
  const institution  = props.researcher.institution;
  const rating  = props.researcher.rating;
  const specialisations  = props.researcher.specialisation;
  const email  = props.researcher.email;
  const gender  = props.researcher.gender;
  const slicedSpecialisatons = specialisations.slice(0,120);
  const pubArray = publications.split(";");

  const specialisationsList = specialisations.split(";");


  console.log(pubArray)
  //alert(pubArray.length)
  //console.log(specialisations)
  const [expanded, setExpanded] = React.useState(false);
 
  const [clickedResearcher, setClickedResearcher] = React.useState({});
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const cardClicked =  () => {
    alert(surname);
  }

  const mailResearcher = () => {
    alert("emailing researcher")
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

    <>
       {/* <Router>

       </Router> */}
       {/* <QueryParamsDemo /> */}

       <Card sx={{ maxWidth: 345 }} onClick={handleClickOpen}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            {surname.slice(0,1)}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={`${surname}`}
        subheader={institution}
      />
      {/*  
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      
      */}
      {
       
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            <strong>Specialisation : </strong>{slicedSpecialisatons}...
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <strong>Email : </strong>{email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <strong>Gender : </strong>{gender}
        </Typography>
      </CardContent>

      
      }
      <CardActions disableSpacing>
        {/* <Button onClick={mailResearcher}>email researcher</Button> */}
 
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      {   
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h5">Specialisations:</Typography>
          <Typography paragraph>
            {specialisations}
          </Typography>
           
        </CardContent>
      </Collapse>
         }
    </Card>

    <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {surname}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              edit
            </Button>
          </Toolbar>
        </AppBar>


        

        <Box sx={{ padding: 7 }}>
        {/* <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Researcher
        </Typography>
        <Typography variant="h5" component="div">
           
          {surname}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {gender}
        </Typography>
        <Typography variant="body2">
          <strong>I specialise in </strong> {specialisations}
          <br />
           
        </Typography>
        <Typography variant="body2">
          <strong>My email is </strong> {email}
          <br />
           
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Email Me</Button>
      </CardActions>
    </Card> */}

    <Card sx={{ minWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require('../Images/ai.jpg')}
          alt="green iguana"
        />
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Researcher
        </Typography>
        <Typography variant="h5" component="div">
           {/* {bull}  */}
          {surname}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {gender} Researcher
        </Typography>
        {/* <Typography variant="body2">
          <strong>I specialise in </strong> {specialisations}
          <br />
           
        </Typography> */}
        <Typography variant="body2">
          <strong>Email : </strong> {email}
          <br />
           
        </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Contact Researcher
        </Button>
      </CardActions>
    </Card>
        </Box>


      
 

        <Box sx={{ padding: 7,marginTop:-10 }}>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Articles
        </Typography> */}
        <Typography variant="h5" component="div">
            
            Specialisations
        </Typography>

        <List>
          {/* <ListItem button>
            <ListItemText primary="Mammogram content-based image retrieval based on malignancy classification" secondary="2019" />
          </ListItem>
          <Divider /> */}

          {specialisationsList.map(item =>  {
            
          return(<>
            <ListItem button>
              <ListItemText primary={item} secondary= {surname}/>
            </ListItem>
             
            <Divider />
            </>);


          })}


          {/* <ListItem button>
            <ListItemText
              primary="Rethink means clastering in the age of massive dataset;"
              secondary="2022"
            />
          </ListItem> */}
        </List>
         
      </CardContent>
      {/* <CardActions>
        <Button size="small">Email Me</Button>
      </CardActions> */}
    </Card>
        </Box>

        <Box sx={{ padding: 7,marginTop:-10 }}>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Articles
        </Typography> */}
        <Typography variant="h5" component="div">
            
            Articles
        </Typography>

        <List>
          {/* <ListItem button>
            <ListItemText primary="Mammogram content-based image retrieval based on malignancy classification" secondary="2019" />
          </ListItem>
          <Divider /> */}

          {pubArray.map(item =>  {
            
          return(<>
            <ListItem button>
              <ListItemText primary={item} secondary="year" />
            </ListItem>
             
            <Divider />
            </>);


          })}


          {/* <ListItem button>
            <ListItemText
              primary="Rethink means clastering in the age of massive dataset;"
              secondary="2022"
            />
          </ListItem> */}
        </List>
         
      </CardContent>
      {/* <CardActions>
        <Button size="small">Email Me</Button>
      </CardActions> */}
    </Card>
        </Box>

        <Box sx={{ padding: 7,marginTop:-10 }}>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Articles
        </Typography> */}
        <Typography variant="h5" component="div">
            
            Frequent Collaborators
        </Typography>

        <List>
          <ListItem button>
            <ListItemText primary="Viriri, S" secondary="Univ KwaZulu Natal" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Tapamo, JR"
              secondary="Univ S Africa"
            />
          </ListItem>
        </List>
         
      </CardContent>
      {/* <CardActions>
        <Button size="small">Email Me</Button>
      </CardActions> */}
    </Card>
        </Box>


      </Dialog>
    </>


    
  );
}

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function QueryParamsDemo() {
  let query = useQuery();

  return (
    <div>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/account?name=netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/account?name=tshepo">tshepo</Link>
          </li>
          <li>
            <Link to="/account?name=zillow-group">Zillow Group</Link>
          </li>
          <li>
            <Link to="/account?name=yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/account?name=modus-create">Modus Create</Link>
          </li>
        </ul>

        <Child name={query.get("name")} />
      </div>
    </div>
  );
}

function Child({ name }) {
  return (
    <Box style={{marginTop:10}}>

      {
      //  alert(name)
      console.log(name)
      }
      {
      
      name ? (
        <h3>
          The <code>name</code> in the query string is &quot;{name}
          &quot;
        </h3>
      ) : (
        <h3>There is no name in the query string</h3>
      )}
    </Box>
  );
}

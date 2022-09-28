import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import Axios from 'axios';


/**
 * TrendinList component contains a list of chosen(the first 6) articles and researchers
 * that we want to show the user, and their collaborators/a
 * 
 */
export default function TrendinList(props) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const articleList = props.articleList;
  return (
    <List
      sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' ,marginTop:-4}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Top 6 hand picked articles & researchers
        </ListSubheader>
      }
    >
       

      {articleList.map( item => {
        return (
          <>
          <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ArticleIcon />
        </ListItemIcon>
        <ListItemText primary= {item.title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={item.author}   />
          </ListItemButton>
         
        </List>
      </Collapse>
          </>
        );
      })}

 
    </List>
  );
}

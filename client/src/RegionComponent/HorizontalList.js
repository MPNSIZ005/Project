import * as React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "row",
//     padding: 0
//   }
// }));

export default function HorizontalListTest() {
 // const classes = useStyles();

  return (
    <div>
      <List style={{
    display: "flex",
    flexDirection: "row",
    padding: 0
  }}>
        <ListItem>
          <ListItemText primary="foo1" secondary="bar1" />
        </ListItem>
        <ListItem>
          <ListItemText primary="foo2" secondary="bar2" />
        </ListItem>
        
      </List>
    </div>
  );
}
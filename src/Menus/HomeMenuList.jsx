import React, { Fragment } from "react";
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import HomeIcon from "material-ui-icons/Home";

const HomeFolderListItems = () => (
  <Fragment>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
  </Fragment>
);

export default HomeFolderListItems;

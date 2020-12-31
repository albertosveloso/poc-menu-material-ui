import React, { Fragment } from "react";
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import PollIcon from "material-ui-icons/Poll";

const pollFolderListItems = () => (
  <Fragment>
    <ListItem disabled button>
      <ListItemIcon>
        <PollIcon />
      </ListItemIcon>
      <ListItemText primary="Polls" />
    </ListItem>
  </Fragment>
);

export default pollFolderListItems;

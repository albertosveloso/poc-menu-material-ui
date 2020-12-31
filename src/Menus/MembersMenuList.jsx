import React, { Fragment } from "react";
import Collapse from "material-ui/transitions/Collapse";
import IconButton from "material-ui/IconButton";
import List, {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from "material-ui/List";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import ExpandLessIcon from "material-ui-icons/ExpandLess";
import GroupIcon from "material-ui-icons/Group";
import GroupAddIcon from "material-ui-icons/GroupAdd";
import HistoryIcon from "material-ui-icons/History";

const membersFolderListItems = ({
  classes,
  open,
  onMenuItemClick,
  toggleSubmenu
}) => (
  <Fragment>
    <ListItem button onClick={() => onMenuItemClick("/members")}>
      <ListItemIcon>
        <GroupIcon />
      </ListItemIcon>
      <ListItemText primary="Members" />
      <ListItemSecondaryAction>
        <IconButton onClick={toggleSubmenu}>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="nav" disablePadding>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <GroupAddIcon />
          </ListItemIcon>
          <ListItemText primary="Invite" />
        </ListItem>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary="Pending" />
        </ListItem>
      </List>
    </Collapse>
  </Fragment>
);

export default membersFolderListItems;

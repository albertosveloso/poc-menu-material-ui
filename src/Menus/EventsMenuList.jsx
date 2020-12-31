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
import EventIcon from "material-ui-icons/Event";
import EventNoteIcon from "material-ui-icons/EventNote";
import EventAvailableIcon from "material-ui-icons/EventAvailable";

const eventsFolderListItems = ({
  classes,
  open,
  onMenuItemClick,
  toggleSubmenu
}) => (
  <Fragment>
    <ListItem button onClick={() => onMenuItemClick("/events")}>
      <ListItemIcon>
        <EventIcon />
      </ListItemIcon>
      <ListItemText primary="Events" />
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
            <EventAvailableIcon />
          </ListItemIcon>
          <ListItemText primary="Going" />
        </ListItem>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <EventNoteIcon />
          </ListItemIcon>
          <ListItemText primary="My Events" />
        </ListItem>
      </List>
    </Collapse>
  </Fragment>
);

export default eventsFolderListItems;

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
import LabelIcon from "material-ui-icons/Label";
import LabelOutlineIcon from "material-ui-icons/LabelOutline";

const subgroups = ["Group 1", "Group 2", "Group 3"];

const subgroupsFolderListItems = ({ classes, open, toggleSubmenu }) => (
  <Fragment>
    <ListItem button disabled>
      <ListItemIcon>
        <LabelIcon />
      </ListItemIcon>
      <ListItemText primary="Subgroups" />
      <ListItemSecondaryAction>
        <IconButton onClick={toggleSubmenu}>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="nav" disablePadding>
        {subgroups.map(s => (
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <LabelOutlineIcon />
            </ListItemIcon>
            <ListItemText primary={s} />
          </ListItem>
        ))}
      </List>
    </Collapse>
  </Fragment>
);

export default subgroupsFolderListItems;

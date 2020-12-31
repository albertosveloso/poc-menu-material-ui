import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Collapse from "material-ui/transitions/Collapse";
import IconButton from "material-ui/IconButton";
import List, {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from "material-ui/List";
import ArchiveIcon from "material-ui-icons/Archive";
import EmailIcon from "material-ui-icons/Email";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import ExpandLessIcon from "material-ui-icons/ExpandLess";
import DraftsIcon from "material-ui-icons/Drafts";
import SendIcon from "material-ui-icons/Send";
import StarIcon from "material-ui-icons/Star";

const mailFolderListItems = ({
  classes,
  open,
  onMenuItemClick,
  toggleSubmenu
}) => (
  <Fragment>
    <ListItem button onClick={() => onMenuItemClick("/")}>
      <ListItemIcon>
        <EmailIcon />
      </ListItemIcon>
      <ListItemText primary="Produtos" />
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
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Produtos" />
        </ListItem>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText inset primary="Compras" />
        </ListItem>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText inset primary="Descontos" />
        </ListItem>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <ArchiveIcon />
          </ListItemIcon>
          <ListItemText inset primary="Archive" />
        </ListItem>
      </List>
    </Collapse>
  </Fragment>
);

export default mailFolderListItems;

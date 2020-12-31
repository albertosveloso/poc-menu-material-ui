import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import Drawer from "material-ui/Drawer";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Divider from "material-ui/Divider";
import SettingsIcon from "material-ui-icons/Settings";

import homeFolderListItems from "../Menus/HomeMenuList";
import eventsFolderListItems from "../Menus/EventsMenuList";
import mailFolderListItems from "../Menus/MailMenuList";
import pollFolderListItems from "../Menus/PollMenuList";
import subgroupsFolderListItems from "../Menus/SubgroupsMenuList";
import membersFolderListItems from "../Menus/MembersMenuList";

const drawerWidth = 240;
const switcherWidth = 60;

const styles = theme => ({
  drawerPaper: {
    position: "relative",
    height: "100%",
    width: drawerWidth,
    // Drawer - opening
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
      // duration: 2000
    })
  },
  drawerPaperClose: {
    width: 60,
    overflowX: "hidden",
    // Drawer - closing
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
      // duration: 2000
    })
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth,
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  flexGrow: {
    flexGrow: 1
  },
  list: {
    flexGrow: 0
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  },
  listSubheader: {
    textAlign: "left",
    fontWeight: "bold"
  }
});

class MiniDrawer extends React.Component {
  state = {
    subMenus: {
      mail: { open: false },
      events: { open: false },
      subgroups: { open: false },
      members: { open: false }
    }
  };

  onMenuItemClick = path => {
    const { history } = this.props;

    if (!Boolean(history)) return;

    history.push(path);
  };

  onMenuToggle = menu => {
    const { open } = this.props;
    const { subMenus } = this.state;
    const toggledMenu = subMenus[menu];

    // Only open submenu if drawer is open
    if (!Boolean(toggledMenu) || !open) return;

    this.setState({
      subMenus: {
        ...this.state.subMenus,
        [menu]: {
          ...toggledMenu,
          open: !toggledMenu.open
        }
      }
    });
  };

  render() {
    const { classes, open } = this.props;
    const { subMenus } = this.state;

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(
            classes.drawerPaper,
            !open && classes.drawerPaperClose
          )
        }}
        open={open}
      >
        <div className={classes.drawerInner}>
          {/* Empty div for App bar spacing */}
          <div className={classes.drawerHeader} />
          <Divider />
          <List className={classes.list} component="nav">
            {homeFolderListItems({
              classes,
              open: open && subMenus["mail"].open,
              onMenuItemClick: this.onMenuItemClick,
              toggleSubmenu: () => this.onMenuToggle("mail")
            })}
            {mailFolderListItems({
              classes,
              open: open && subMenus["mail"].open,
              onMenuItemClick: this.onMenuItemClick,
              toggleSubmenu: () => this.onMenuToggle("mail")
            })}
            {eventsFolderListItems({
              classes,
              open: open && subMenus["events"].open,
              onMenuItemClick: this.onMenuItemClick,
              toggleSubmenu: () => this.onMenuToggle("events")
            })}
            {pollFolderListItems()}
          </List>
          <Divider />
          <List className={classes.list} component="nav">
            {subgroupsFolderListItems({
              classes,
              open: open && subMenus["subgroups"].open,
              onMenuItemClick: this.onMenuItemClick,
              toggleSubmenu: () => this.onMenuToggle("subgroups")
            })}
            {membersFolderListItems({
              classes,
              open: open && subMenus["members"].open,
              onMenuItemClick: this.onMenuItemClick,
              toggleSubmenu: () => this.onMenuToggle("members")
            })}
          </List>
          {/* Spacer-div */}
          <div className={classes.flexGrow} />
          <Divider />
          <List className={classes.list} component="nav">
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Group Preferences" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(withRouter(MiniDrawer));

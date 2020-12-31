import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import { ListItemIcon, ListItemText } from "material-ui/List";
import AppBar from "material-ui/AppBar";
import Badge from "material-ui/Badge";
import Menu, { MenuItem } from "material-ui/Menu";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import IconButton from "material-ui/IconButton";
import AnnouncementIcon from "material-ui-icons/Announcement";
import AccountCircleIcon from "material-ui-icons/AccountCircle";
import HelpIcon from "material-ui-icons/Help";
import LockIcon from "material-ui-icons/Lock";
import MenuIcon from "material-ui-icons/Menu";
import SettingsIcon from "material-ui-icons/Settings";

const styles = theme => ({
  appBar: {
    position: "absolute",
    backgroundColor: "#f1f1f1",
    color: "#000",
    zIndex: theme.zIndex.drawer + 1,
    // App bar - closing
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
      // duration: 2000
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 16
  },
  profileLogo: {
    marginRight: `${theme.spacing.unit}px`
  },
  flexGrow: {
    flexGrow: 1
  }
});

class AppHeader extends React.Component {
  state = {
    anchorEl: null
  };

  handleMenuOpen = event => {
    this.setState({
      menuAnchorEl: event.target
    });
  };

  handleMenuClose = () => {
    this.setState({
      menuAnchorEl: null
    });
  };

  render() {
    const { classes, toggleDrawer } = this.props;
    const { menuAnchorEl } = this.state;

    const isMenuOpen = Boolean(menuAnchorEl);

    return (
      <AppBar className={classNames(classes.appBar)}>
        <Toolbar disableGutters={true}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            className={classNames(classes.menuButton)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className={classes.flexGrow}
            align="left"
            variant="title"
            color="inherit"
            noWrap
          >
            Varejo XPTO
          </Typography>
          <div>
            <IconButton
              className={classes.profileLogo}
              color="inherit"
              onClick={this.handleMenuOpen}
            >
              <Badge badgeContent="2" color="secondary">
                <AccountCircleIcon />
              </Badge>
            </IconButton>
            <Menu
              anchorEl={menuAnchorEl}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={isMenuOpen}
              onClose={this.handleMenuClose}
              PaperProps={{
                style: {
                  width: 200
                }
              }}
            >
              <MenuItem onClick={this.handleMenuClose}>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </MenuItem>
              <MenuItem onClick={this.handleMenuClose}>
                <ListItemIcon>
                  <AnnouncementIcon />
                </ListItemIcon>
                <ListItemText primary="Notifications" />
              </MenuItem>
              <MenuItem onClick={this.handleMenuClose}>
                <ListItemIcon>
                  <HelpIcon />
                </ListItemIcon>
                <ListItemText primary="Help" />
              </MenuItem>
              <Divider />
              <MenuItem onClick={this.handleMenuClose}>
                <ListItemIcon>
                  <LockIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(AppHeader);

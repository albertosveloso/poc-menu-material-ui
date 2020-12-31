import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router } from "react-router-dom";
import { withStyles } from "material-ui/styles";

import AppHeader from "./AppHeader";
import MiniDrawer from "./Drawer";
// import Switcher from "./Switcher";
import Routes from "./Routes";

const styles = theme => ({
  root: {
    width: "100%",
    height: "100vh",
    zIndex: 1,
    overflow: "hidden"
  },
  appFrame: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%"
  },
  content: {
    width: "100%",
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 24,
    height: "calc(100% - 56px)",
    marginTop: 56,
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% - 64px)",
      marginTop: 64
    }
  }
});

class App extends React.Component {
  state = {
    isDrawerOpen: true
  };

  onDrawerToggle = () => {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen
    });
  };

  render() {
    const { classes } = this.props;
    const { isDrawerOpen } = this.state;

    return (
      <Router>
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <AppHeader
              drawerOpen={isDrawerOpen}
              toggleDrawer={this.onDrawerToggle}
            />
            {/* <Switcher /> */}
            <MiniDrawer open={isDrawerOpen} />
            <main className={classes.content}>
              <Routes />
            </main>
          </div>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(App);

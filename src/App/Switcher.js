import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

const switcherWidth = 60;
const groupSize = switcherWidth - 4 * 2 * 2;

const styles = theme => ({
  switcher: {
    width: `${switcherWidth}px`,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexShrink: 0,
    flexGrow: 1,
    padding: `${theme.spacing.unit * 2}px 0`,
    backgroundColor: "tomato"
  },
  switcherHeader: {
    ...theme.mixins.toolbar
  },
  group: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: `${groupSize}px`,
    height: `${groupSize}px`,
    marginBottom: `${theme.spacing.unit * 2}px`,
    borderRadius: "100%",
    color: "white",
    fontWeight: "bold",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.5)"
    }
  }
});

const groups = [{ name: "KR" }, { name: "T" }, { name: "BL" }];

const Switcher = props => {
  const { classes } = props;

  return (
    <section className={classes.switcher}>
      <div className={classes.switcherHeader} />
      {groups.map(g => <div className={classes.group}>{g.name}</div>)}
    </section>
  );
};

Switcher.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Switcher);

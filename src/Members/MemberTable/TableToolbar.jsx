import React, { Fragment } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import Tooltip from "material-ui/Tooltip";
import DeleteIcon from "material-ui-icons/Delete";
import FilterListIcon from "material-ui-icons/FilterList";
import LabelIcon from "material-ui-icons/Label";
import MoreVertIcon from "material-ui-icons/MoreVert";
import RefreshIcon from "material-ui-icons/Refresh";
import { lighten } from "material-ui/styles/colorManipulator";

const styles = theme => ({
  root: {
    paddingRight: theme.spacing.unit
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.dark,
          backgroundColor: lighten(theme.palette.secondary.light, 0.4)
        }
      : {
          color: lighten(theme.palette.secondary.light, 0.4),
          backgroundColor: theme.palette.secondary.dark
        },
  spacer: {
    flex: "1 1 100%"
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    color: theme.palette.text.secondary
  },
  title: {
    flex: "0 0 auto"
  }
});

let TableToolbar = props => {
  const { numSelected, classes } = props;

  const anySelected = numSelected > 0;

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: anySelected
      })}
    >
      <div className={classes.title}>
        {anySelected ? (
          <Typography variant="subheading">{numSelected} selected</Typography>
        ) : (
          <Typography variant="title">
            Members
            <IconButton variant="raised" color="default">
              <RefreshIcon />
            </IconButton>
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {anySelected ? (
          <Fragment>
            <Tooltip title="Subgroups">
              <IconButton aria-label="Subgroups">
                <LabelIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="More">
              <IconButton aria-label="More">
                <MoreVertIcon />
              </IconButton>
            </Tooltip>
          </Fragment>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="Filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  );
};

TableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired
};

export default withStyles(styles)(TableToolbar);

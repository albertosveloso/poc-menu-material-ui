import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Modal from "material-ui/Modal";
import Button from "material-ui/Button";

const styles = theme => ({
  backdrop: {
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  },
  toolbar: {
    backgroundColor: theme.palette.grey["200"]
  }
});

class MemberModal extends Component {
  render() {
    const { classes, onClose, open } = this.props;

    return (
      <Modal classes={{ root: classes.backdrop }} open={open} onClose={onClose}>
        <div>
          <Toolbar className={classes.toolbar}>
            <Typography variant="title">Contact</Typography>
          </Toolbar>
          <div className={classes.paper}>
            <Typography variant="title">Text in a modal</Typography>
            <Typography variant="subheading">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </div>
        </div>
      </Modal>
    );
  }
}

MemberModal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MemberModal);

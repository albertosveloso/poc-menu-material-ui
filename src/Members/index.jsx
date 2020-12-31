import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog";
import GroupAddIcon from "material-ui-icons/GroupAdd";
import DeleteIcon from "material-ui-icons/Delete";

import MemberTable from "./MemberTable";

const styles = theme => ({
  root: {
    position: "relative",
    height: "100%"
  },
  fab: {
    position: "absolute",
    bottom: `${theme.spacing.unit * 2}px`,
    right: `${theme.spacing.unit * 2}px`
  },
  rightIcon: {
    marginLeft: `${theme.spacing.unit}px`
  }
});

class Members extends Component {
  state = {
    isDeleteConfirmShown: false
  };

  onDeleteConfirmOpen = () => {
    this.setState({ isDeleteConfirmShown: true });
  };

  onDeleteConfirmCancel = () => {
    this.setState({ isDeleteConfirmShown: false });
  };

  onDeleteConfirmConfirm = () => {
    this.setState({ isDeleteConfirmShown: false });
  };

  render() {
    const { classes } = this.props;
    const { isDeleteConfirmShown } = this.state;

    return (
      <div>
        <MemberTable showDeleteConfirm={this.onDeleteConfirmOpen} />
        <Button className={classes.fab} color="secondary" variant="fab">
          <GroupAddIcon />
        </Button>
        <Dialog
          open={isDeleteConfirmShown}
          onClose={this.onDeleteConfirmCancel}
        >
          <DialogTitle>Delete Member?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Member(s) will be removed from group.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onDeleteConfirmCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={this.onDeleteConfirmConfirm} color="primary">
              Delete
              <DeleteIcon className={classes.rightIcon} />
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(Members);

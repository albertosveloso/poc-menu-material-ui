import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";
import { withStyles } from "material-ui/styles";
import Checkbox from "material-ui/Checkbox";
import Table, { TableBody, TableCell, TableRow } from "material-ui/Table";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";
import { lighten } from "material-ui/styles/colorManipulator";

import MemberModal from "./MemberModal";
import TableHeader from "./TableHeader";
import TableToolbar from "./TableToolbar";

const styles = theme => ({
  root: {
    width: "100%",
    // marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
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
    color: theme.palette.text.secondary
  },
  title: {
    textAlign: "left",
    marginBottom: `${theme.spacing.unit}px`
  },
  table: {
    tableLayout: "fixed",
    overflow: "hidden"
  },
  tableRow: {
    cursor: "pointer"
  },
  checkboxCell: {
    width: `${48 + 12 * 2}px`,
    boxSizing: "border-box"
  },
  overflowCell: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  },
  roleCell: {
    width: "125px",
    boxSizing: "border-box"
  }
});

let id = 0;
function createData(name, email, role) {
  id += 1;
  return { id, name, email, role };
}

class MembersTable extends Component {
  state = {
    data: [
      createData("Kendall Roth", "kendall@kendallroth.ca", "admin"),
      createData("First Person", "first@example.com", "manager"),
      createData("Another Human", "another@example.com", "manager"),
      createData("Declair Klee", "declair@example.com", "member"),
      createData("Ginger Brown", "ginger@example.com", "member")
    ],
    isMemberModalOpen: false,
    searchText: "",
    selected: [],
    order: "asc",
    orderBy: "name"
  };

  onMemberModalOpen = () => {
    this.setState({ isMemberModalOpen: true });
  };

  onMemberModalClose = () => {
    this.setState({ isMemberModalOpen: false });
  };

  onSearchChange = event => {
    this.setState({
      searchText: event.target.value
    });
  };

  onSortClick = (event, property) => {
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    const data =
      order === "desc"
        ? this.state.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
        : this.state.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

    this.setState({
      data,
      order,
      orderBy
    });
  };

  onToggleAllClick = (event, checked) => {
    const { data } = this.state;

    if (checked) {
      this.setState({
        selected: data.map(d => d.id)
      });
      return;
    }

    this.setState({ selected: [] });
  };

  onToggleItemClick = (event, id) => {
    const { selected } = this.state;

    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    // Handle list selections
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    this.setState({ selected: newSelected });
  };

  checkIsSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const {
      data,
      isMemberModalOpen,
      searchText,
      selected,
      order,
      orderBy
    } = this.state;

    const selectedCount = selected.length;
    const totalCount = data.length;

    const filteredData = data.filter(
      d =>
        d.name.toLowerCase().includes(searchText.toLowerCase()) ||
        d.email.toLowerCase().includes(searchText.toLowerCase())
    );
    // TODO: Change everything to be based on "filteredCount"
    const filteredCount = filteredData.length;
    const hasFilteredItems = filteredCount > 0;

    return (
      <Fragment>
        <Paper className={classes.root}>
          <TableToolbar numSelected={selectedCount} />
          {/* <TextField
            fullWidth
            label="Search"
            onChange={this.onSearchChange}
            values={searchText}
          />*/}
          <Table className={classes.table}>
            <TableHeader
              numSelected={selectedCount}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.onToggleAllClick}
              onRequestSort={this.onSortClick}
              rowCount={totalCount}
            />
            <TableBody>
              {filteredData.map(n => {
                const isSelected = this.checkIsSelected(n.id);

                return (
                  <TableRow
                    className={classes.tableRow}
                    onClick={this.onMemberModalOpen}
                    key={n.id}
                  >
                    <TableCell
                      className={classes.checkboxCell}
                      padding="checkbox"
                    >
                      <Checkbox
                        checked={isSelected}
                        onClick={event => this.onToggleItemClick(event, n.id)}
                      />
                    </TableCell>
                    <TableCell padding="none">{n.name}</TableCell>
                    <TableCell className={classes.overflowCell}>
                      {n.email}
                    </TableCell>
                    <TableCell className={classes.roleCell}>{n.role}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
        <MemberModal
          onClose={this.onMemberModalClose}
          open={isMemberModalOpen}
        />
      </Fragment>
    );
  }
}

MembersTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MembersTable);

import React from "react";
import { withStyles, createStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

function createData(postname, posttype, costperview, view, like, comment) {
  return {
    postname,
    posttype,
    costperview,

    view,
    like,
    comment,
  };
}

const rows = [
  createData("Image", "Story", 746, 116, 116, 255),
  createData("Audio", "Statics", 934, 104, 104, 674),
  createData("Image", "Igtv", 971, 991, 991, 891),
  createData("Text", "Reals", 877, 987, 987, 107),
  createData("Image", "Hate", 987, 977, 977, 457),
  createData("Text", "Reals", 877, 987, 987, 107),
];

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function TableData() {
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Post Name</StyledTableCell>
              <StyledTableCell align="center">Post Type</StyledTableCell>
              <StyledTableCell align="center">Cost Per View</StyledTableCell>

              <StyledTableCell align="center">Views</StyledTableCell>
              <StyledTableCell align="center">Likes</StyledTableCell>
              <StyledTableCell align="center">Comments</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.postname}>
                <StyledTableCell component="th" scope="row">
                  {row.postname}
                </StyledTableCell>
                <StyledTableCell align="center">{row.posttype}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.costperview}
                </StyledTableCell>

                <StyledTableCell align="center">{row.view}</StyledTableCell>
                <StyledTableCell align="center">{row.like}</StyledTableCell>
                <StyledTableCell align="center">{row.comment}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

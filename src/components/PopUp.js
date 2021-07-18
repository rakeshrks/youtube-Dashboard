import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Button, Divider, Grid, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  mainGrid: {
    float: "right",
  },
  buttonStyle: {
    marginTop: "17px",
  },
  appStyle: {
    alignItem: "center",
    marginLeft: "10px",
    marginRight: "10px",
    // backgroundColor: "#caced8",
  },
}));

export default function PopUp() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid className={classes.mainGrid}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Post Type
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem>Story</MenuItem>
          <MenuItem>Statics</MenuItem>
          <MenuItem>IGTV</MenuItem>
          <MenuItem>Reals</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Data Range</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem>Ten</MenuItem>
          <MenuItem>Twenty</MenuItem>
          <MenuItem>Thirty</MenuItem>
          <MenuItem>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        className={classes.buttonStyle}
        onClick={handleClickOpen}
      >
        Add Post Link
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add Post
        </DialogTitle>
        <DialogContent dividers>
          {/* <Divider /> */}
          <Typography gutterBottom>
            Paste your Yuotube Post URL to add it to the Campaign
          </Typography>
        </DialogContent>

        <TextField
          className={classes.appStyle}
          label="Enter URL"
          color="primary"
          variant="outlined"
        />

        <DialogActions>
          <ButtonGroup>
            <Button onClick={handleClose} variant="contained" color="primary">
              Cancle
            </Button>
            <Button onClick={handleClose} variant="contained" color="default">
              Submit
            </Button>
          </ButtonGroup>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

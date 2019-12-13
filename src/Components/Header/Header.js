import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import {withRouter, Link} from "react-router-dom"


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function ButtonAppBar({history}) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    const handleInput = (e) => {
        setValue(e.target.value);
    };


    const handleClickOpen = () => {
        setOpen(true);
    };
    const redirect = (to) => {
        history.push(to);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        localStorage.setItem("token", value);
        setValue("");
        redirect("/");
        handleClose();
    };
    const classes = useStyles();

    const exit = () => {
        localStorage.clear();
        redirect("/");
    };
    const IsTokenValid = () => localStorage.getItem("token") && ((localStorage.getItem("token").length) == 40);
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar style={{
                    background: "#2088ff"
                }}>
                    <Typography variant="h6" className={classes.title}>
                        <Button color='inherit' onClick={()=>redirect('/')}>GHC</Button>
                    </Typography>
                    {IsTokenValid() ? (
                        <React.Fragment>
                            <Button color='inherit' onClick={()=>redirect("/searchRepository")}>Search Repository</Button>
                            <Button color='inherit' onClick={()=>redirect("/searchUser")}>Search User</Button>
                            <Button color='inherit' onClick={()=>redirect("/profile")} >Profile</Button>
                            <Button color='inherit' onClick={exit}>Exit</Button>
                        </React.Fragment>
                    ) :  <Button color='inherit' onClick={handleClickOpen}>Login</Button>}

                </Toolbar>
            </AppBar>

            <div>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Login</DialogTitle>
                    <DialogContent>
                        <TextField
                            value={value}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Enter token"
                            type="text"
                            fullWidth
                            onChange={handleInput}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleSubmit} color="primary">
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

export default withRouter(ButtonAppBar);
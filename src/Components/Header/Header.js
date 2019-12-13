import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import { withRouter } from 'react-router-dom';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    name: {
        color: "red",
        textAlign: 'center'
    }
}));

function ButtonAppBar({ history, client }) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');
    const [isTokenValid, setValid] = React.useState(true);
    const [isLoggedIn, setLogin] = React.useState(false);
    const handleInput = e => {
        setValue(e.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };
    const redirect = to => {
        history.push(to);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        localStorage.setItem('token', value);
        setValue('');
        client
            .query({
                query: gql`
          {
            viewer {
              login
            }
          }
        `
            })
            .then(() => {
                setValid(true);
                setLogin(true);
                redirect('/');
                handleClose();
            })
            .catch((e) => { setValid(false);});
    };
    const classes = useStyles();

    const exit = () => {
        localStorage.clear();
        setLogin(false);
        redirect('/');
        client.resetStore();
    };
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar
                    style={{
                        background: '#2088ff'
                    }}
                >
                    <Typography variant="h6" className={classes.title}>
                        <Button color="inherit" onClick={() => redirect('/')}>
                            GHC
                        </Button>
                    </Typography>
                    {isLoggedIn ? (
                        <React.Fragment>
                            <Button
                                color="inherit"
                                onClick={() => redirect('/searchRepository')}
                            >
                                Search Repository
                            </Button>
                            <Button color="inherit" onClick={() => redirect('/searchUser')}>
                                Search User
                            </Button>
                            <Button color="inherit" onClick={() => redirect('/profile')}>
                                Profile
                            </Button>
                            <Button color="inherit" onClick={exit}>
                                Exit
                            </Button>
                        </React.Fragment>
                    ) : (
                        <Button color="inherit" onClick={handleClickOpen}>
                            Login
                        </Button>
                    )}
                </Toolbar>
            </AppBar>

            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title"
                >
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
                    {!isTokenValid && <div className={classes.name}>Invalid token</div>}
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

export default withApollo(withRouter(ButtonAppBar));

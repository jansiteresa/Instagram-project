import React from 'react';
import './profile.css';
// import logo from '../images/Avatar.png';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import edit from "../../assets/upgrad.svg";
import Modal from '@material-ui/core/Modal';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "red"
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Profile = () => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>item</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>item</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>item</Paper>
                </Grid>
            </React.Fragment>
        );
    }


    return (
        <div>
            <div className='header-details'>
                <div className='profile-dp'>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={edit} />
                        </ButtonBase>
                    </Grid>
                </div>
                <section id='details-section' className={classes.root}>
                    <div>
                        <h4><Typography noWrap>upgrad-sde</Typography></h4>
                        <ul className='profile-lists'>
                            <li><Typography noWrap>Posts: 6</Typography></li>
                            <li><Typography noWrap>Follows: 4</Typography></li>
                            <li><Typography noWrap>Followed by: 6</Typography></li>
                        </ul>
                        <div className='footing-header'>
                            <h4><Typography noWrap>Upgrad Education</Typography></h4>
                            <button className='edit-btn' onClick={handleOpen}><Avatar src={edit} /></button>
                        </div>
                    </div>
                </section>
            </div>
            <Modal ariaHideApp={false} open={open} contentLabel="Login" onClose={handleClose}>
                <Button variant="contained" color="primary"> Update</Button>
            </Modal>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
            </Grid>
        </div>
    )
}
export {Profile};

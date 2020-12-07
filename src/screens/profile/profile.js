import React, {Component} from 'react';
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
import axios from 'axios';
import { Header } from '../header/header';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import CircularProgress from '@material-ui/core/CircularProgress';

import { mockData } from '../home/mock-data';
import { mockData2 } from './mock-data-2';

const accessToken = sessionStorage.getItem('access-token');
const BASE_URL = 'https://graph.instagram.com';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      gridList: {
      //   width: 500,
        height: '100vh',
      },
    }));

    class Profile extends Component {

        constructor(props) {
            super(props)
    
            this.state = {
                profileImageData: [],
                description: 'Upgrad Education'
            }
        }
    
        componentDidMount() {

            if (accessToken) {
                axios.get(`${BASE_URL}/me/media`, {
                    params: {
                        fields: 'id,username',
                        access_token: accessToken
                    }
                }).then((data) => {
                    this.setState({
                        allImageData: data.data.data
                    })
                    const { allImageData } = this.state;
                    if (allImageData && Array.isArray(allImageData) && allImageData.length > 0) {
                        for (let i = 0; i < allImageData.length; i++) {
                            axios.get(`${BASE_URL}/${allImageData[i].id}`, {
                                params: {
                                    fields: 'id,media_type,media_url,username,timestamp,caption',
                                    access_token: accessToken
                                }
                            }).then((imageAttributes) => {
                                imageAttributes.data && this.setState((state) => {
                                    const profileImageData = state.profileImageData.concat(imageAttributes.data)
                                    return {
                                        profileImageData
                                    }
                                })
                            }).catch(() => {
                                // TODO - put alert here
                                alert('API call failed')
                            })
                        }
                    }
                }).catch(() => {
                    // TODO - put alert here
                    alert('API call failed')
                });
            }
        }
    
        render() {
            const { profileImageData, allImageData } = this.state;
    
            const ProfileImagesRenderer = () => {
                const classes = useStyles();
                return (
                    <div className={classes.root}>
                        <GridList cellHeight={160} className={classes.gridList} cols={3}>
                            {profileImageData.map((profileData, index) => (
                            <GridListTile style={{ height: '100vh'}} key={index} cols={1}>
                                <img src={profileData.media_url} alt='profile' />
                            </GridListTile>
                            ))}
                        </GridList>
                    </div>
                )
            }
    
            return (
                <div>
                    <Header {...this.props} />
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <img src={edit} className='p-5 rounded-circle' alt='avatar' />
                            </div>
                            <div className='col-lg-9'>
                                <div className='m-5 p-4'>
                                    <h3>{(allImageData && allImageData.length > 0 && allImageData[0].username) || 'upgrad_sde'}</h3>
                                    <div className='row'>
                                        <div className='col-lg-4'>
                                            <p>Posts: 6</p>
                                        </div>
                                        <div className='col-lg-4'>
                                            <p>Follows: 4</p>
                                        </div>
                                        <div className='col-lg-4'>
                                            <p>Followed By: 6</p>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <h4 className='d-inline pt-4'>Upgrad Education</h4>
                                        <span className='ml-3 edit-icon-container'><EditRoundedIcon /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            {Array.isArray(profileImageData) && profileImageData.length > 0 ? <ProfileImagesRenderer /> : (
                                <div className='d-flex justify-content-center align-items-center h-100 w-100'>
                                    <CircularProgress />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )
        }
    }
    
    export { Profile };
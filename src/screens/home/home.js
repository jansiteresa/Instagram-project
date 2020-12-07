import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import edit from "../../assets/upgrad.svg";
import CircularProgress from '@material-ui/core/CircularProgress';
import { mockData } from './mock-data';
import axios from 'axios';

const accessToken = `IGQVJXMDFOSnJHMGlCNXJJMDdQdW5WbFQ2VGlTU3BoOGVXUGVoXzZALcWtrN3ZAUajFILTlVX1dfNWJma3V6LW5ubEsxclpfNk1WZA3E4dzZAwUVlkdWw1b3pzbl9JX3JHT1ViQ3dLNXY0V18takJzQWZAUU0NmdEhSSEN4OVJ3`

class Home extends Component {

    constructor (props) {
        super(props)

        this.state = {
            newsFeedData: []
        };
    }

    componentDidMount () {
        const apiUrl = `https://graph.instagram.com/me/media?fields=id,caption&access_token=${accessToken}`;

        axios.get('https://akshatsoni.com/').then((data) => {
            const allImageData = mockData.data;
            // let caption = ''
            if (allImageData && Array.isArray(allImageData) && allImageData.length > 0) {
                for (let i = 0; i < 2; i++) {
                    // caption = allImageData[i].caption;
                    axios.get(`https://graph.instagram.com/${allImageData[i].id}?fields=id,media_type,media_url,username,timestamp,caption&access_token=${accessToken}`)
                    .then((imageAttributes) => {
                        imageAttributes.data && this.setState((state) => {
                            const newsFeedData = state.newsFeedData.concat(imageAttributes.data)
                                return {
                                    newsFeedData
                                }
                            })
                    })
                }
            }
        });
    }

    render () {

        const { newsFeedData } = this.state;

        const NewsFeedRenderer = () => {
            return newsFeedData.map(
                (newsFeedImages) => (
                    <Card className='w-40 vh-50 m-4'>
                        <CardContent>
                            <div className='card-header-logo'>
                                <Avatar alt="Remy Sharp" src={edit} />
                                <div className='card-header-label'>
                                    <span>upgrad_sde</span>
                                    <span>30/11/2020 13:00</span>
                                </div>
                            </div>
                            <img className='w-100' src={newsFeedImages.media_url} alt='sample' />
                            <Divider className='my-2' />
                            <span>Team of great people at upgrad</span>
                            <div>
                                <TextField className='comment-input' id="standard-basic" label="Add a comment" />
                                <Button className='comment-add-btn' variant="contained" color="primary">
                                    Add
                            </Button>
                            {/* Add a comment on an image and Search an image based on its caption */}
                            </div>
                        </CardContent>
                    </Card>
            ))
        }

        return (
            <div className='newsfeed-container'>
                { Array.isArray(newsFeedData) && newsFeedData.length > 0 ? NewsFeedRenderer() : <CircularProgress />}
            </div>
        )
    }

}

export { Home }
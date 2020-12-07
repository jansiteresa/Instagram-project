import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
 
// import Img from 'C:\Users\Admin\Desktop\insta-clone\src\assets\images\upgrad.png';

class Home extends Component {

    render() {
        return (
            <div>
                <Card className='w-40 vh-50 m-4'>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe"> r
                                {/* <img src={Img}/>*/}
                            </Avatar>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                        <Divider className='my-2' />
                            <span>Team of great people at upgrad</span>
                            <div>
                                <TextField className='comment-input' id="standard-basic" label="Add a comment" />
                                <Button className='comment-add-btn' variant="contained" color="primary">
                                    Add
                            </Button>
                            </div>
                    <CardHeader />
                </Card>
            </div>
        )
    }
}

export { Home };
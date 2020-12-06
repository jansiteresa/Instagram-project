import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
// import Img from 'C:\Users\Admin\Desktop\insta-clone\src\assets\images\upgrad.png';

class Home extends Component {

    render() {
        return (
            <div>
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe"> r
                                {/* <img src={Img}/>*/}
                            </Avatar>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />

                    <CardHeader />
                </Card>
            </div>
        )
    }
}

export { Home };
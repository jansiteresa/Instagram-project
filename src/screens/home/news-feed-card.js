import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import edit from "../../assets/upgrad.svg";
import Divider from '@material-ui/core/Divider';
import CardHeader from '@material-ui/core/CardHeader';
import { LikeComponent } from './like-component';
import './home.css';
import Sample from "../../assets/download.jpg";
import { createDateTime } from '../../common/utils/create-date-time';
import { CommentComponent } from './comment-component';

const NewsFeedCard = ({
    index,
    media_url = Sample,
    caption,
    username,
    timestamp = '2020-12-01T14:39:27+0000'
}) => {
    const finalDateTime = createDateTime(timestamp);
    const [comment, setComment] = useState([]);
    const [commentArray, setCommentArray] = useState([]);

    const handleComment = (event) => {
        setComment(event.target.value);
    }

    const handleCommentSubmit = () => {
        setCommentArray(commentArray.concat(comment));
        setComment('');
    }

    return (
        <Card className='w-40 vh-50 m-4'>
            <CardHeader
                avatar={<Avatar alt="Instagram Avatar" src={edit} />}
                title={username || 'upgrad_sde'}
                subheader={finalDateTime || '30/11/2020 13:00'}
            />
            <CardContent>
                <img
                    className='w-100'
                    src={media_url}
                    alt='sample' />
                <Divider className='my-2' />
                <div className='my-3 cation-head'>
                    {caption || 'Team of great people at upgrad'}
                </div>
                <h5 className='text-primary'>#ReactProject #Newthigs</h5>
                <LikeComponent />
                <div className='mt-5'>
                    <CommentComponent
                        commentIndex={index}
                        username={username}
                        comment={comment}
                        commentArray={commentArray}
                        handleComment={handleComment}
                        handleCommentSubmit={handleCommentSubmit}
                    />
                </div>
            </CardContent>
        </Card>
    )
}

export { NewsFeedCard };
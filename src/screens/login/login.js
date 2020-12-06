import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import './login.css';

class Login extends Component {
    render() {
        return (

            <div>
                <Card>
                    <CardContent>
                        <div style={{ height: '400px' }} className='d-flex flex-column p-5 vh-75 justify-content-between'>
                                            <Typography variant="h4" gutterBottom>
                                                LOGIN
                                        </Typography>
                                            <FormControl>
                                                <InputLabel htmlFor="username">Username</InputLabel>
                                                <Input id="username" type="text" />
                                                <FormHelperText ><span className="red">required</span></FormHelperText>
                                            </FormControl>
                                            <FormControl required>
                                                <InputLabel htmlFor="password">Password</InputLabel>
                                                <Input id="password" type="password"/>
                                                <FormHelperText><span className="red">required</span></FormHelperText>
                                            </FormControl>
                                            <FormHelperText ><span className="red" style={{ fontSize: "14px" }}>Incorrect username and/or password</span></FormHelperText>
                                            <Button className='w-25 d-inline justify-content-between' variant="contained" color="primary">
                                                Login
                                        </Button>
                                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }

}

export { Login };
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
    constructor (props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            usernameRequired: "dispNone",
            passwordRequired: "dispNone",
            incorrectUsernamePasswordMessage: "dispNone",
        };
    }
    loginClickHandler = () => {
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });
    }

    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }
    inputPasswordChangeHandler = (e) => {
        this.setState({ password: e.target.value });
    }

    render() {
        return (

            <div>
                <Card>
                    <CardContent>
                        <div style={{ height: '400px' }} className='d-flex flex-column p-5 vh-75 justify-content-between'>
                                            <Typography variant="h4" gutterBottom>
                                                LOGIN
                                        </Typography>
                                            <FormControl required>
                                                <InputLabel htmlFor="username">Username</InputLabel>
                                                <Input id="username" type="text" onChange={this.inputUsernameChangeHandler}/>
                                                <FormHelperText className={this.state.usernameRequired} ><span className="red">required</span></FormHelperText>
                                            </FormControl>
                                            <FormControl required>
                                                <InputLabel htmlFor="password">Password</InputLabel>
                                                <Input id="password" type="password" onChange={this.inputPasswordChangeHandler}/>
                                                <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
                                            </FormControl>
                                            <FormHelperText className={this.state.incorrectUsernamePasswordMessage}  ><span className="red" style={{ fontSize: "14px" }}>Incorrect username and/or password</span></FormHelperText>
                                            <Button className='w-25 d-inline justify-content-between' variant="contained" color="primary" onClick={this.loginClickHandler}>
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
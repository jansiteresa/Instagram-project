import React, { Component, Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Redirect } from 'react-router-dom';
import './login.css';
import { Header } from '../header/header';


class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            usernameRequired: "dispNone",
            passwordRequired: "dispNone",
            incorrectUsernamePasswordMessage: "dispNone",
            isAuthenticated: false || sessionStorage.getItem("access-token")
        };
    }

    loginClickHandler = () => {
        let username = "InstaGrad";
        let password = "Sass@123#";

        let accessToken = "xyz";
        if (this.state.username === "" || this.state.password === "") {
            // The usernameRequired and passwordRequired fields are used when we want to store the class to be assigned 
            this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
            this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });
            this.setState({ incorrectUsernamePasswordMessage: "dispNone" });
        } else if (this.state.username === username && this.state.password === password) {
            // Setting token in session storage
            sessionStorage.setItem("access-token", accessToken);
            // Setting state so as to check and route to home page if login is successful. 
            this.setState({
                isLoggedIn: true,
            });
        } else {
            // In case the username and password are incorrect
            this.setState({ incorrectUsernamePasswordMessage: "dispBlock" });
        }
    }
    // this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
    // this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });
    // }

        inputUsernameChangeHandler = (e) => {
            this.setState({ username: e.target.value });
        }
        inputPasswordChangeHandler = (e) => {
            this.setState({ password: e.target.value });
        }

        render() {
            // const { isAuthenticated } = this.state;

            const CardRenderer = () => {
                return (
                    <Card>
                        <CardContent>
                            <div style={{ height: '400px' }} className='d-flex flex-column p-5 vh-75 justify-content-between'>
                                <Typography variant="h4" gutterBottom>
                                    LOGIN
                                        </Typography>
                                <form className='form-container' onSubmit={this.handleSubmit}>
                                    <FormControl required>
                                        <InputLabel htmlFor="username">Username</InputLabel>
                                        <Input id="username" type="text" onChange={this.inputUsernameChangeHandler} />
                                        <FormHelperText className={this.state.usernameRequired} ><span className="red">required</span></FormHelperText>
                                    </FormControl>
                                    <FormControl required>
                                        <InputLabel htmlFor="password">Password</InputLabel>
                                        <Input id="password" type="password" onChange={this.inputPasswordChangeHandler} />
                                        <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
                                    </FormControl>
                                    <FormHelperText className={this.state.incorrectUsernamePasswordMessage}  ><span className="red" style={{ fontSize: "14px" }}>Incorrect username and/or password</span></FormHelperText>
                                    <Button className='w-25 d-inline justify-content-between' variant="contained" color="primary" onClick={this.loginClickHandler}>
                                        Login
                                        </Button>
                                </form>
                            </div>
                        </CardContent>
                    </Card>
                )
            }
            return (
                <Fragment>
                    <Header />
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='d-flex justify-content-center align-items-center vh-100'>
                                <div className='login-container w-50'>
                                    {this.state.isAuthenticated ? <Redirect to="/home" /> : <CardRenderer />}
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
        }
    }

export { Login };
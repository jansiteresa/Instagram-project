import React, { Component, Fragment } from 'react';
// dependencies
import { Redirect } from 'react-router-dom';

// Components
import { Header } from '../header/header';
import { CardComponent } from './card-component';

// CSS
import './login.css';

const accessToken = `IGQVJYWTljc0lpMU56R3ZAQX0NYZAjc0WnAzd3NXZAGxWU3M5SGxaV0VBZAzhlNExnY1BWNnJ0Vzl1U0sxZAHJHSEgwdnk1RDNvVHlNanVITmEwcjVkLWpuNlVDWFVFMnpNTGJFYmxONmRzb1JCY1VHbUh3SmJoRjhfN0wxU2dF`
class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            error: false,
            helperText: '',
            username: '',
            password: '',
            usernameReq: false,
            passwordReq: false,
            userPassIncorrect: false,
            isAuthenticated: false || sessionStorage.getItem("access-token")
        }
    };

    inputChangeHandler = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginClickHandler  = () => {
        const user = 'Jansi';
        const pass = 'Jansi@12';
        const { username, password } = this.state;
        
        if (username === '' || password === '') {
            if (username === '' && password === '') {
                this.setState({
                    usernameReq: true,
                    passwordReq: true
                })
            } else if (username === '' && password !== '') {
                this.setState({
                    usernameReq: true,
                    passwordReq: false
                })
            } else if (username !== '' && password === ''){
                this.setState({
                    usernameReq: false,
                    passwordReq: true
                })
            }
        } else if (username !== user && password !== pass) {
            this.setState({
                userPassIncorrect: true,
                usernameReq: false,
                passwordReq: false,
            })
        } else {
            this.setState({
                isAuthenticated: true
            })
            sessionStorage.setItem("access-token", accessToken);
        }
    }

    render() {
        const { isAuthenticated } = this.state;

        return (
            <Fragment>
                <Header {...this.props}/>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='d-flex justify-content-center align-items-center vh-100'>
                            <div className='login-container w-35'>
                                {isAuthenticated ? 
                                    <Redirect to="/home" /> 
                                    : 
                                    <CardComponent
                                        {...this.state}
                                        inputChangeHandler={this.inputChangeHandler}
                                        loginClickHandler ={this.loginClickHandler }
                                    />}
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export { Login };
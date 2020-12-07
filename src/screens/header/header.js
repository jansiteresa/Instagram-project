import React, { useState, Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './header.css';
import edit from "../../assets/upgrad.svg";
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';

const Header = (props) => {
    const isAuth = sessionStorage.getItem("access-token");
    const [toggler, setToggler] = useState(false);

    const onClickProfile = () => {
        setToggler(!toggler);
    }

    const handleLogout = () => {
        sessionStorage.clear();
        props.history.push('/');
    }

    const handleRedirect = () => {
        if (props.history.location.pathname !== '/profile') {
            props.history.push('/profile');
        }
    }

    const currentPage = props.history && props.history.location.pathname;

    console.log('currentPage currentPage', currentPage)

    return (
        <div className='header-bg'>
            <span className='head-logo'>Image Viewer</span>
            {
                isAuth ? (
                    <Fragment>
                        <div className={`d-flex ${currentPage !== '/profile' ? 'w-30' : ''}`}>
                            {
                                currentPage !== '/profile' && (
                                    <div className="has-search w-75">
                                        <span className=" text-dark form-control-feedback"><SearchIcon /></span>
                                        <input type="text" className="form-control" placeholder="Search..." />
                                    </div>
                                )
                            }
                            <Avatar onClick={onClickProfile} className='cursor-pointer mx-4 border border-light' alt="Remy Sharp" src={edit} />
                            {toggler && (
                                <span className='popup-container'>
                                    { currentPage !== '/profile' && <p
                                        onClick={handleRedirect}>
                                        My Account
                                    </p>}
                                    <p onClick={handleLogout}>Logout</p>
                                </span>
                            )}
                        </div>
                    </Fragment>
                ) : null
            }            
        </div>
    )
}

export { Header };
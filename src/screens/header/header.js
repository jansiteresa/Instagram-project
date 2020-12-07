import React, {Component} from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';

class Header extends Component {

    render(){
        const isAuth = sessionStorage.getItem("access-token");
        return (
            <div className='header-bg'>
            <span className='head-logo'>Image Viewer</span> 
            {
                isAuth ? (
                    <div class="has-search">
                        <SearchIcon />
                         <input type="text" placeholder="Search" />
                    </div> ) : null
            }           
            </div>
        )
    }    
    }

export { Header };
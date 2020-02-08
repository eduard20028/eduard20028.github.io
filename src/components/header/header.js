import React from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.png';
import './header.css';

const Header = () => {
    return (
        <div className="header bg-light">
            <div className="container">
            <nav className="navbar navbar-light justify-content-between">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} className="d-inline-block mr-sm-2" alt="logo"/>
                    </Link>

                <div className="nav-icons">
                    <Link to="/tv" data-toggle="tooltip" title="TV"><i className="fas fa-tv"></i></Link>
                    <Link to="/movies" data-toggle="tooltip" title="MOVIES"><i className="fas fa-film"></i></Link>
                    <Link to="/top-rated" data-toggle="tooltip" title="TOP RATED"><i className="fas fa-chart-bar"></i></Link>
                    <Link to="/upcoming" data-toggle="tooltip" title="UPCOMING"><i className="fas fa-theater-masks"></i></Link>
                </div>


                <div>
                </div>
            </nav>
            </div>
        </div>
    
    );
}

export default Header;
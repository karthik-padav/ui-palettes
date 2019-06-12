import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

function NavigationBar() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">WebSiteName</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">

                            <li class="dropdown">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1
                                <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Page 1-1</a></li>
                                    <li><a href="#">Page 1-2</a></li>
                                    <li><a href="#">Page 1-3</a></li>
                                </ul>
                            </li>
                            <li><NavLink exact activeStyle={{ color: 'red' }} to="/">Home</NavLink></li>
                            <li><NavLink exact activeStyle={{ color: 'red' }} to="/flatcolors">flatcolors</NavLink></li>
                            <li><NavLink exact activeStyle={{ color: 'red' }} to="/metrocolors">metrocolors</NavLink></li>
                            <li><NavLink exact activeStyle={{ color: 'red' }} to="/socialcolors">socialcolors</NavLink></li>
                            <li><NavLink exact activeStyle={{ color: 'red' }} to="/colorpicker">colorpicker</NavLink></li>
                            <li><NavLink exact activeStyle={{ color: 'red' }} to="/famouscolors">famouscolor</NavLink></li>
                            <li><NavLink exact activeStyle={{ color: 'red' }} to="/colorcombination">colorcombination</NavLink></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default NavigationBar;

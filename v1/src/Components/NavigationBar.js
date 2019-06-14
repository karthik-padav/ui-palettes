import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';
import {connect} from 'react-redux';

class NavigationBar extends Component {
    render(){
        console.log(this.props);
    return (
        <React.Fragment>
            <nav className="navbar">
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
                        <ul className="nav navbar-nav main-menu">
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Palette
                                <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><NavLink exact activeStyle={{ color: 'red' }} to="/famouscolors">FAMOUS PALETTES</NavLink></li>
                                    <li><NavLink exact activeStyle={{ color: 'red' }} to="/colorcombination">color combination</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink exact activeStyle={{ color: 'red' }} to="/">Material Design</NavLink></li>
                            <li><NavLink exact activeStyle={{ color: 'red' }} to="/flatcolors">Flat UI Colors</NavLink></li>
                            <li><NavLink exact activeStyle={{ color: 'red' }} to="/metrocolors">Metro Colors</NavLink></li>
                            <li><NavLink exact activeStyle={{ color: 'red' }} to="/socialcolors">Social Colors</NavLink></li>
                            <li><NavLink exact activeStyle={{ color: 'red' }} to="/colorpicker">colorpicker</NavLink></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            {/* <li className="fav-cart">
                            <a href="#">
                                <span class="glyphicon glyphicon-heart-empty"></span>
                                <span class="glyphicon glyphicon-heart"></span>
                            </a>
                            </li> */}
                            <button type="button" className="btn fav-color">
                                <span className="glyphicon glyphicon-heart"></span>
                                <span className="badge"></span>
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}
}

const mapStateToProps = (state) => {
    return {
        favColor: state.favColorReducer
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        favColor: (color) => {
            dispatch({
                type: 'PUSH_COLOR',
                payload: color
            })
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);

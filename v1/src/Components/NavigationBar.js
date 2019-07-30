import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';
import { connect } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import ShareMediaList from './shareMediaList';

class NavigationBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="./">
                                <img src={require('../utilities/images/logo.png')} alt="logo" />
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav main-menu">
                                <li><NavLink exact activeStyle={{ color: '#899bb4' }} to="/">Material Design</NavLink></li>
                                <li className="dropdown">
                                    <a href="/" className="dropdown-toggle" data-toggle="dropdown">Palette
                                <span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><NavLink exact activeStyle={{ color: '#899bb4' }} to="/popularcolors">Popular Colors</NavLink></li>
                                        <li><NavLink exact activeStyle={{ color: '#899bb4' }} to="/colorcombination">color combination</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink exact activeStyle={{ color: '#899bb4' }} to="/flatcolors">Flat UI Colors</NavLink></li>
                                <li><NavLink exact activeStyle={{ color: '#899bb4' }} to="/metrocolors">Metro Colors</NavLink></li>
                                <li><NavLink exact activeStyle={{ color: '#899bb4' }} to="/socialcolors">Social Colors</NavLink></li>
                                <li><NavLink exact activeStyle={{ color: '#899bb4' }} to="/about">About us</NavLink></li>
                                {/* <li><NavLink exact activeStyle={{ color: '#899bb4' }} to="/colorpicker">colorpicker</NavLink></li> */}
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <div className="dropdown color_list">
                                    <button className="btn fav-color">
                                        <span className="glyphicon glyphicon-heart"></span>
                                        <span className="badge">{this.props.favColorList.favColorArray.length}</span>
                                    </button>
                                    <div className="dropdown-content">
                                        <ul className="list-group">
                                            {this.props.favColorList.favColorArray.map((colorCode, index) =>
                                                <li
                                                    style={{ backgroundColor: colorCode }}
                                                    className="list-group-item"
                                                    key={index}>
                                                    <CopyToClipboard
                                                        text={colorCode}
                                                        onCopy={() => this.setState({ copied: true })}>
                                                        <span
                                                            title="Copy"
                                                            className="color-code">{colorCode}</span>
                                                    </CopyToClipboard>
                                                    <span
                                                        onClick={() => this.props.removeFavColor(colorCode)}
                                                        title="Remove"
                                                        className="remove-color-code glyphicon glyphicon-remove"></span>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>


                                {/* <div className="dropdown share_icon_w">
                                    <button className="btn fav-color">
                                        <span className="glyphicon glyphicon-share-alt"></span>
                                    </button>
                                    <div className="dropdown-content">
                                        <ShareMediaList />
                                    </div>
                                </div> */}
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
        favColorList: state.favColorReducer
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFavColor: (color) => {
            dispatch({
                type: 'POP_COLOR',
                payload: color
            })
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);

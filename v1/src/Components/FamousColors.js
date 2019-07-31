import React, { Component } from 'react';

import { getFamousColors } from '../dataServices/getColorCode';
import '../css/FamousColors.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";

class FamousColors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorList: [],
        }
    }
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Popular Colors - The color picker for graphic designers, web developers and many more.</title>
                    <meta charset="UTF-8" />
                    <meta name="description" content="The Popular color system can help you create a color theme that reflects your brand or style." />
                    <meta name="keywords" content="color picker, Popular colours, color picker hex, color schemes, color combination" />
                </Helmet>
                <h1 className="text-center margin-top-0 margin-bottom-15">Popular Colors</h1>
                {this.state.colorList.map((item, index) =>
                    <div
                        className="col col-md-6 FamousColors_box"
                        key={index}>
                        <table className="table">
                            <tbody>
                                <tr>
                                    {item.colors.map((code, i) =>
                                        <CopyToClipboard
                                            ref={code.hex}
                                            key={i}
                                            onCopy={() => this.showToastMessage(code.hex + ' Copied!')}
                                            title={code.hex}>
                                            <td
                                                className="color_w"
                                                style={{ 'backgroundColor': code.hex }}>
                                                <button
                                                    className="btn is-fav-color-btn">

                                                    {this.props.favColorList.favColorArray.indexOf(code.hex) > -1
                                                        ?
                                                        <span
                                                            onClick={(e) => this.props.removeFavColor(code.hex, e)}
                                                            title="Copy to favorite list"
                                                            className="glyphicon glyphicon-heart"></span>
                                                        :
                                                        <span
                                                            onClick={(e) => this.props.addFavColor(code.hex, e)}
                                                            title="Copy to favorite list"
                                                            className="glyphicon glyphicon-heart-empty"></span>
                                                    }
                                                </button>
                                            </td>
                                        </CopyToClipboard>
                                    )}
                                </tr>
                            </tbody>
                        </table>
                        <p>{item.name}</p>
                    </div>
                )}
            </React.Fragment>
        )
    }

    componentWillMount = () => {
        this.props.isLoading(true);
        getFamousColors().then(res => {
            if (res.status === 200) {
                this.setState({ colorList: res.data }, () => {
                    this.props.isLoading(false);
                });
            } else {
                this.props.isLoading(false);
                this.showToastMessage('Something went wrong please try after sometime.');
            }
        })
    }

    showToastMessage(msg) {
        this.props.toastMessage(msg, 'SHOW_TOAST_MSG');
        setTimeout(() => {
            this.props.toastMessage(null, 'HIDE_TOAST_MSG')
        }, 3000);
    }
}


const mapStateToProps = (state) => {
    return {
        favColorList: state.favColorReducer
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFavColor: (color, e) => {
            e.stopPropagation();
            dispatch({
                type: 'PUSH_COLOR',
                payload: color
            })
        },

        removeFavColor: (color, e) => {
            e.stopPropagation();
            dispatch({
                type: 'POP_COLOR',
                payload: color
            })
        },

        isLoading: (flag) => {
            dispatch({
                type: 'IS_LOADING',
                payload: flag
            })
        },

        toastMessage: (msg, type) => {
            dispatch({
                type: type,
                payload: msg
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FamousColors);
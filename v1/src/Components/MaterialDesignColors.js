import React, { Component } from 'react';

import { getMaterialDesignColors } from '../dataServices/getColorCode';
import '../css/MaterialDesignColors.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";

class MaterialDesignColors extends Component {
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
                    <title>Material Design colors - The color picker for graphic designers, web developers and many more.</title>
                    <meta charset="UTF-8" />
                    <meta name="description" content="The Material Design color system can help you create a color theme that reflects your brand or style." />
                    <meta name="keywords" content="color picker, color picker hex, color picker for html, color picker html, color picker in html" />
                </Helmet>
                <h1 className="text-center margin-top-0 margin-bottom-15">Material Design colors</h1>
                <table className="table material_table ml-5">
                    <tbody>
                        {this.state.colorList.map((item, index) =>
                            <tr key={index}>
                                <th style={{
                                    backgroundColor: item.color
                                }}
                                    className="text-center text-capitalize">
                                    {item.color}
                                </th>
                                {item.codeList.map((code, codeIndex) =>
                                    <CopyToClipboard
                                        text={code.code}
                                        key={codeIndex}
                                        onCopy={() => this.showToastMessage(code.code + ' Copied!')}>
                                        <td style={{ backgroundColor: code.code }}
                                            title={code.code}>
                                            <button
                                                className="btn is-fav-color-btn">

                                                {this.props.favColorList.favColorArray.indexOf(code.code) > -1
                                                    ?
                                                    <span
                                                        onClick={(e) => this.props.removeFavColor(code.code, e)}
                                                        title="Copy to favorite list"
                                                        className="glyphicon glyphicon-heart"></span>
                                                    :
                                                    <span
                                                        onClick={(e) => this.props.addFavColor(code.code, e)}
                                                        title="Copy to favorite list"
                                                        className="glyphicon glyphicon-heart-empty"></span>
                                                }
                                            </button>
                                            <p className="copy-title">Copy</p>
                                            <p className="copy-code">{code.name}</p>
                                        </td>
                                    </CopyToClipboard>
                                )}
                            </tr>
                        )}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }

    componentWillMount = () => {
        this.props.isLoading(true);
        getMaterialDesignColors().then(res => {
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

export default connect(mapStateToProps, mapDispatchToProps)(MaterialDesignColors);
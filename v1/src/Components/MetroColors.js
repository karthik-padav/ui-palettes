import React, { Component } from "react";

import { getMetroColors } from "../dataServices/getColorCode";
import "../css/MetroColors.css";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";

class MetroColors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorList: []
    };
  }
  render() {
    return (
      <React.Fragment>
      <Helmet>
          <title>Metro colors - The color picker</title>
          <meta charset="UTF-8" />
          <meta name="description" content="The Metro colors system can help you create a color theme that reflects your brand or style." />
          <meta name="keywords" content="color picker, Metro colors, color picker hex, color schemes, color combination" />
      </Helmet>
      <h1 className="text-center margin-top-0 margin-bottom-15">Metro colors</h1>
        {this.state.colorList.map((item, index) => (
          <CopyToClipboard
            key={index}
            onCopy={() => this.showToastMessage(item.metroColor + " " + item.colorCode + ' Copied!')}>
            <div
              style={{ backgroundColor: item.colorCode }}
              title={item.metroColor + " " + item.colorCode}
              className="col col-md-2 MetroColors_box"
            >
              <button
                className="btn is-fav-color-btn">
                {this.props.favColorList.favColorArray.indexOf(item.colorCode) > -1
                  ?
                  <span
                    onClick={(e) => this.props.removeFavColor(item.colorCode, e)}
                    title="Copy to favorite list"
                    className="glyphicon glyphicon-heart"></span>
                  :
                  <span
                    onClick={(e) => this.props.addFavColor(item.colorCode, e)}
                    title="Copy to favorite list"
                    className="glyphicon glyphicon-heart-empty"></span>
                }
              </button>
              <p className="copy-title">Copy</p>
              <p className="copy-code">{item.metroColor}</p>
            </div>
          </CopyToClipboard>
        ))}
      </React.Fragment>
    );
  }

  componentWillMount = () => {
    this.props.isLoading(true);
    getMetroColors().then(res => {
      if (res.status === 200) {
        this.props.isLoading(false);
        this.setState({ colorList: res.data }, () => {
        });
      } else {
        this.props.isLoading(false);
        this.showToastMessage('Something went wrong please try after sometime.');
      }
    });
  };

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

export default connect(mapStateToProps, mapDispatchToProps)(MetroColors);

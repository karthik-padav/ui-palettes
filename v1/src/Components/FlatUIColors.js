import React, { Component } from "react";

import { getFlatUiColors } from "../dataServices/getColorCode";
import "../css/FlatUIColors.css";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";

class FlatUIColors extends Component {
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
          <title>Flat UI colors - The color picker for graphic designers, web developers and many more.</title>
          <meta charset="UTF-8" />
          <meta name="description" content="The Flat UI colors system can help you create a color theme that reflects your brand or style." />
          <meta name="keywords" content="color picker, color picker hex, color picker for html, color picker html, color picker in html" />
      </Helmet>
      <h1 className="text-center margin-top-0 margin-bottom-15">Flat UI colors</h1>
        {this.state.colorList.map((item, index) => (
          <CopyToClipboard
            key={index}
            onCopy={() => this.showToastMessage(item.name + " " + item.code + ' Copied!')}>
            <div
              style={{ backgroundColor: item.code }}
              title={item.name + " " + item.code}
              className="col col-md-2 flatUi_box"
            >
              <button
                className="btn is-fav-color-btn">
                {this.props.favColorList.favColorArray.indexOf(item.code) > -1
                  ?
                  <span
                    onClick={(e) => this.props.removeFavColor(item.code, e)}
                    title="Copy to favorite list"
                    className="glyphicon glyphicon-heart"></span>
                  :
                  <span
                    onClick={(e) => this.props.addFavColor(item.code, e)}
                    title="Copy to favorite list"
                    className="glyphicon glyphicon-heart-empty"></span>
                }
              </button>
              <p className="copy-title">Copy</p>
              <p className="copy-code">{item.name}</p>
            </div>
          </CopyToClipboard>
        ))}
      </React.Fragment>
    );
  }

  componentWillMount = () => {
    this.props.isLoading(true);
    getFlatUiColors().then(res => {
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

export default connect(mapStateToProps, mapDispatchToProps)(FlatUIColors);

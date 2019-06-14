import React, { Component } from "react";

import { getFlatUiColors } from "../dataServices/getColorCode";
import "../css/FlatUIColors.css";

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
        <div className="row">
          <div className="col col-md-10">
            {this.state.colorList.map((item, index) => (
              <div
                style={{ backgroundColor: item.code }}
                ref={item.code}
                onMouseEnter={() => this.isMouseOver(item, "onMouseEnter")}
                onMouseLeave={() => this.isMouseOver(item, "onMouseLeave")}
                title={item.name + " " + item.code}
                className="col col-md-2 flatUi_box zoom"
                key={index}
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className="col col-md-2">asd</div>
        </div>
      </React.Fragment>
    );
  }

  isMouseOver = (item, event) => {
    if (event === "onMouseLeave") {
      this.refs[item.code].innerHTML = item.name;
    } else if (event === "onMouseEnter") {
      this.refs[item.code].innerHTML = "Copy";
    }
  };

  componentWillMount = () => {
    getFlatUiColors().then(res => {
      console.log(res.data);
      if (res.status === 200) {
        this.setState({ colorList: res.data }, () => {
          console.log(this.state.colorList);
        });
      }
    });
  };
}

export default FlatUIColors;

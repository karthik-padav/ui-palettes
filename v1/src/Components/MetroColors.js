import React, { Component } from 'react';

import { getMetroColors } from '../dataServices/getColorCode';
import '../css/MetroColors.css';

class MetroColors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorList: [],
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col col-md-10">
                        {this.state.colorList.map((item, index) =>
                            <div
                                style={{ 'backgroundColor': item.colorCode }}
                                className="col col-md-2 MetroColors_box" key={index}>
                                <div className="zoom"
                                    ref={item.colorCode}
                                    onMouseEnter={() => this.isMouseOver(item, 'onMouseEnter')}
                                    onMouseLeave={() => this.isMouseOver(item, 'onMouseLeave')}
                                    title={item.metroColor + ' ' + item.colorCode}
                                >
                                    {item.metroColor}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col col-md-2">
                        asd
                    </div>
                </div>
            </React.Fragment>
        )
    }

    isMouseOver = (item, event) => {
        if (event === 'onMouseLeave') {
            this.refs[item.colorCode].innerHTML = item.metroColor;
        } else if (event === 'onMouseEnter') {
            this.refs[item.colorCode].innerHTML = "Copy";
        }
    }

    componentWillMount = () => {
        getMetroColors().then(res => {
            console.log(res.data);
            if (res.status === 200) {
                this.setState({ colorList: res.data }, () => {
                    console.log(this.state.colorList);
                });
            }
        })
    }
}

export default MetroColors;
import React, { Component } from 'react';

import { getColorCombination } from '../dataServices/getColorCode';
import '../css/ColorCombination.css';

class ColorCombination extends Component {
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
                                className="col col-md-4 color_combination_box" key={index}>
                                <div className="box_w">
                                    {item.map((code, i) =>
                                        <div
                                            className="color_w zoom"
                                            ref={code.colorCode}
                                            onMouseEnter={() => this.isMouseOver(code, 'onMouseEnter')}
                                            onMouseLeave={() => this.isMouseOver(code, 'onMouseLeave')}
                                            title={code.colorCode}
                                            style={{ 'backgroundColor': code.colorCode }}
                                            key={i}>
                                            {code.colorCode}
                                        </div>
                                    )}
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

    isMouseOver = (code, event) => {
        if (event === 'onMouseLeave') {
            this.refs[code.colorCode].innerHTML = code.colorCode;
        } else if (event === 'onMouseEnter') {
            this.refs[code.colorCode].innerHTML = "Copy";
        }
    }

    componentWillMount = () => {
        getColorCombination().then(res => {
            console.log(res.data);
            if (res.status === 200) {
                this.setState({ colorList: res.data }, () => {
                    console.log(this.state.colorList);
                });
            }
        })
    }
}

export default ColorCombination;
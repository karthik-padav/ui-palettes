import React, { Component } from 'react';

import { getFamousColors } from '../dataServices/getColorCode';
import '../css/FamousColors.css';

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
                <div className="row">
                    <div className="col col-md-10">
                        {this.state.colorList.map((item, index) =>
                            <div
                                className="col col-md-6 FamousColors_box"
                                key={index}>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                        {item.colors.map((code, i) =>
                                                <td
                                                    className="color_w zoom"
                                                    ref={code.hex}
                                                    // onMouseEnter={() => this.isMouseOver(code, 'onMouseEnter')}
                                                    // onMouseLeave={() => this.isMouseOver(code, 'onMouseLeave')}
                                                    title={code.hex}
                                                    style={{ 'backgroundColor': code.hex }}
                                                    key={i}>
                                                    {/* {code.hex} */}
                                                </td>
                                        )}
                                        </tr>
                                    </tbody>
                                </table>
                                    <p>{item.name}</p>
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
            this.refs[item.hex].innerHTML = "";
        } else if (event === 'onMouseEnter') {
            this.refs[item.hex].innerHTML = "Copy";
        }
    }

    componentWillMount = () => {
        console.log('asdasda')
        getFamousColors().then(res => {
            console.log(res.data);
            if (res.status === 200) {
                this.setState({ colorList: res.data }, () => {
                    console.log(this.state.colorList);
                });
            }
        })
    }
}

export default FamousColors;
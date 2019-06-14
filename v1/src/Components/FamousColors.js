import React, { Component } from 'react';

import { getFamousColors } from '../dataServices/getColorCode';
import '../css/FamousColors.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

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
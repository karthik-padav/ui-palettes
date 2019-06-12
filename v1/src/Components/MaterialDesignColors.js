import React, { Component } from 'react';

import { getMaterialDesignColors } from '../dataServices/getColorCode';
import '../css/MaterialDesignColors.css';

export default class MaterialDesignColors extends Component {
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
                        <table className="table material_table ml-5">
                            <tbody>
                                {this.state.colorList.map((item, index) =>
                                    <tr key={index}>
                                        <th style={{
                                            backgroundColor:item.color,
                                            textTransform: 'capitalize'}}>{item.color}</th>
                                        {item.codeList.map((code, codeIndex) =>
                                            <td className="zoom"
                                                ref={code.code}
                                                onClick={()=>this.copyToClipboard(code.code)}
                                                onMouseEnter={()=>this.isMouseOver(code, 'onMouseEnter')}
                                                onMouseLeave={()=>this.isMouseOver(code, 'onMouseLeave')}
                                                style={{backgroundColor:code.code}}
                                                key={codeIndex}
                                                title={code.name+' '+code.code}>{code.name}</td>
                                        )}
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="col col-md-2">
                        asd
                    </div>
                </div>
            </React.Fragment>
        )
    }

    copyToClipboard = (code) => {
        console.log(code);
        document.execCommand('copy');
    }

    isMouseOver = (code, event) => {
        if(event === 'onMouseLeave'){
            this.refs[code.code].innerHTML = code.name;
        } else if(event === 'onMouseEnter') {
            this.refs[code.code].innerHTML = "Copy";
        }
    }


    componentWillMount = () => {
        getMaterialDesignColors().then(res => {
            console.log(res.data);
            if (res.status === 200) {
                this.setState({ colorList: res.data }, () => {
                    console.log(this.state.colorList);
                });
            }
        })
    }
}
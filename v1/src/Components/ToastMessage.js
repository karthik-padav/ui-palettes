import React, { Component } from 'react';
import '../css/ToastMsg.css';
import { connect } from 'react-redux';

class toastMessage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="toast_message_wrapper">
                {this.props.toastMsgArray.toastMsgArray.map((msg, index) =>
                    <div className="toast_message_box" key={index}>
                        <p className="message">
                            {msg}
                        </p>
                    </div>
                )}
                </div>
            </React.Fragment>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        toastMsgArray: state.toasMessageReducer
    }
}

export default connect(mapStateToProps)(toastMessage);
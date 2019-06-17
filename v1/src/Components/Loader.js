import React, { Component } from 'react';
import { connect } from 'react-redux';

class Loader extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.isLoading && <div style={{
                    position: 'fixed',
                    top: 0,
                    bottom: 0,
                    backgroundColor: '#00000078',
                    left: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <img style={{width: 70}} src={require('../utilities/images/loading.gif')} alt="Loading..." />
                </div>}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.loaderReducer.isLoading
    }
}

export default connect(mapStateToProps)(Loader);
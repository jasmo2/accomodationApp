import React from 'react';
import { connect } from 'react-redux';
import Component from './component';
import { hideModal } from './actions';


const mapStateToProps = (state) => {
    const { modal } = state;
    return { modal };
};


const mapDistapchToProps = (dispatch) => ({
    hideModal: () => { }
});

export default connect(mapStateToProps, mapDistapchToProps)(Component);

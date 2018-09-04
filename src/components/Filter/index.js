import React from 'react';
import { connect } from 'react-redux';
import Component from './component';
import { showModal as showModalD } from '../Modal/actions';

const mapDistapchToProps = (dispatch) => ({
    showModal: (data) => {
        return dispatch(showModalD(data))
    }
});
export default connect(null, mapDistapchToProps)(Component);

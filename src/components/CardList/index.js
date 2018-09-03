import React, { Component } from "react";
import injectSheet from 'react-jss'
import styles from './styles';

class CardList extends Component {
    render() {
        return (
            <div className={this.props.classes.test}></div>
        )
    }
}

export default injectSheet(styles)(CardList);
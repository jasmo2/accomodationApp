import React, { Component } from "react";
import injectSheet from 'react-jss'
import styles from './styles';

class App extends Component {
    render() {
        return (
            <div className={this.props.classes.test}></div>
        )
    }
}

export default injectSheet(styles)(App);
import React, { Component } from "react";
import injectSheet from 'react-jss'
import styles from './styles';

import CardList from '../CardList';

class App extends Component {
    render() {
        const { container } = this.props.classes;
        return (
            <div className={container}>
                <CardList />
            </div>
        )
    }
}

export default injectSheet(styles)(App);
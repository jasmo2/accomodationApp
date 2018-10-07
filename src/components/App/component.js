import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";

import CardList from "../CardList";
import Footer from "../Footer";
import Header from "../Header";
import Modal from "../Modal";

/**
 *  Get data for all the app
 *  initiate the whole application
 * @class {Component} App
 */

class App extends Component {
    componentWillMount() {
        this.props.getData();
    }
    render() {
        const { container } = this.props.classes;
        return (
            <div className={container}>
                <Modal />
                <Header />
                <CardList />
                <Footer />
            </div>
        )
    }
}

export default injectSheet(styles)(App);
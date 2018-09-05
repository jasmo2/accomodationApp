import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";

import CardList from "../CardList";
import Header from "../Header";
import Modal from "../Modal";
// import { data } from "../../mock";

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
            </div>
        )
    }
}

export default injectSheet(styles)(App);
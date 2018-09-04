import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";

import CardList from "../CardList";
import Header from "../Header";
import Modal from "../Modal";
import { data } from "../../mock";

function filterData(data) {
    const activities = new Set();
    const locations = new Set();
    for (const accomodation of data.accomodations) {
        accomodation.activities.forEach(activity => {
            activities.add(activity);
        });
        locations.add(accomodation.country);
    }
    return {
        activities: Array.from(activities),
        location: Array.from(locations)
    }
}
class App extends Component {
    render() {
        const { container } = this.props.classes;
        return (
            <div className={container}>
                <Modal />
                <Header filterData={filterData(data)} />
                <CardList />
            </div>
        )
    }
}

export default injectSheet(styles)(App);
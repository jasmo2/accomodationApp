import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";

import Card from "../Card";

class CardList extends Component {

    render() {
        const { classes, data } = this.props;
        if (data) {
            const { accomodations } = data;
            return (
                <ul className={classes.list} id="cardlist">
                    {accomodations.map(data => <Card key={data.name} accomodation={data} />)}
                </ul>
            );
        }
        return null;
    }
}

export default injectSheet(styles)(CardList);
import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";

import Card from "../Card";
// import { data } from '../../mock';

class CardList extends Component {
    render() {
        const { classes } = this.props;
        const { accomodations } = data;
        return (
            <ul className={classes.list}>
                {accomodations.map(data => <Card key={data.name} accomodation={data} />)}
            </ul>
        );
    }
}

export default injectSheet(styles)(CardList);
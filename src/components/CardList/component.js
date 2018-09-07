import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";

import Card from "../Card";

class CardList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        const { noFilteredData } = nextProps;
        if (noFilteredData) {
            const noCombinationMessage = `Your combinations doesn’t yield any results.
            Please try a different combination of activities.`
            alert(noCombinationMessage);
        }
        return true;
    }

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
import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { accomodation, classes } = this.props;
        return (
            <li className={classes.card}>
                <label className={`${classes.city} ${classes.topItems}`}>{accomodation.name}</label>
                <label className={`${classes.country} ${classes.topItems}`}>{accomodation.country}</label>
                <img
                    className={classes.imageBottom}
                    src={accomodation.image_urls[0]} alt={accomodation.name}
                />

            </li>
        )
    }
}

export default injectSheet(styles)(Card);
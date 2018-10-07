import React from "react";
import injectSheet from "react-jss"
import styles from "./styles";

import mapIcon from "../../icons/map.svg";
import cardsIcon from "../../icons/cards.svg";
import calendarIcon from "../../icons/calendar.svg";
import profileIcon from "../../icons/sign.svg";

/**
 * Stateless component in charge to render footer icons
 * @function Footer
 * @param {object} props
 */
const Footer = (props) => {
    const { classes } = props;
    return (
        <footer className={classes.footer}>
            <div
                className={classes.icon}
                dangerouslySetInnerHTML={{ __html: mapIcon }}
            />
            <div
                className={classes.icon}
                dangerouslySetInnerHTML={{ __html: cardsIcon }}
            />
            <div
                className={classes.icon}
                dangerouslySetInnerHTML={{ __html: calendarIcon }}
            />
            <div
                className={classes.icon}
                dangerouslySetInnerHTML={{ __html: profileIcon }}
            />
        </footer>
    );
}

export default injectSheet(styles)(Footer);
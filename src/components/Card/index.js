import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";

import heartBlank from "../../icons/heartBlank.svg";
import heartFilled from "../../icons/heartFilled.svg";
import placeholder from "../../icons/placeholder.svg";

function heartType(liked, classes, _onTouch) {
    let classesStr = "";
    let icon = null;
    if (liked) {
        classesStr = `${classes["heart--liked"]} ${classes.logo} ${classes.topItems}`;
        icon = heartFilled;
    } else {
        classesStr = `${classes["heart--unliked"]} ${classes.logo} ${classes.topItems}`;
        icon = heartBlank;
    }

    return (
        <div
            className={classesStr}
            dangerouslySetInnerHTML={{ __html: icon }}
            onTouchEnd={_onTouch}
        />
    );
}

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        }
        this._onTouch = this._onTouch.bind(this);
    }

    _onTouch() {
        const liked = !this.state.liked;
        this.setState({ liked });
    }

    render() {
        const { accomodation, classes } = this.props;
        return (
            <li className={classes.card}>
                <label className={`${classes.city} ${classes.topItems}`}>{accomodation.name}</label>
                <div className={`${classes.country} ${classes.topItems}`}>
                    <div className={classes.pointer} dangerouslySetInnerHTML={{ __html: placeholder }} />
                    <label>{accomodation.country}</label>
                </div>

                {heartType(this.state.liked, classes, this._onTouch)}
                <img
                    className={classes.imageBottom}
                    src={accomodation.image_urls[0]} alt={accomodation.name}
                />

            </li>
        )
    }
}

export default injectSheet(styles)(Card);
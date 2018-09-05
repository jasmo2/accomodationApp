import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";
import Carousel from "nuka-carousel";

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
                <Carousel
                    renderCenterLeftControls={() => null}
                    renderCenterRightControls={() => null}
                >
                    {accomodation.image_urls.map(picUrl =>
                        <img
                            className={classes.imageBottom}
                            key={picUrl}
                            src={picUrl} alt={accomodation.name}
                        />
                    )}
                </Carousel>

            </li>
        )
    }
}

export default injectSheet(styles)(Card);
import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            touchClass: "",
            filters: {
                activities: [],
                location: []
            }
        }
    }

    _onTouchStart() {
        this.setState({
            touchClass: "input--touch"
        });
    }

    _onTouchEnd({ type }) {
        this.setState({ touchClass: "" });
        this.props.showModal({ type });
    }

    _onTouchMove() {
        this.setState({ touchClass: "" });
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { filters: { location, activities }, filteredData } = nextProps;
        if (
            Array.from(location).length > 0 ||
            Array.from(activities).length > 0
        ) {
            return false;
        } else if (filteredData) {
            debugger
            this.setState({
                filters: { activities, location }
            });
        }
        return true;
    }

    render() {
        const { classes, children, type, icon } = this.props;
        const { touchClass } = this.state;

        return (
            <div
                className={`${classes.input} ${touchClass}`}
                onClick={() => this._onTouchEnd({ type })}
                onTouchStart={() => this._onTouchStart}
                onTouchEnd={() => this._onTouchEnd({ type })}
                onTouchMove={() => this._onTouMove}
            >
                <span
                    className={classes.logo}
                    dangerouslySetInnerHTML={{ __html: icon }}
                />
                <div>{children}</div>
            </div>
        )
    }
}

export default injectSheet(styles)(Filter);
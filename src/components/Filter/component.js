import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";
import { filterType } from "../../utils/filters";

function filterContentValidation({ children, filter = [], classes, filteredData }) {
    if (!filteredData || filter.size === 0) return children;

    const filters = Array.from(filter).map(el => (
        <div className={classes.filter}>
            {el}
        </div>
    ));

    return filters;
}

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            touchClass: "",
            activities: [],
            location: []
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
        const activitiesState = nextState.activities
        const locationState = nextState.location;
        if (
            (location.size > 0 || activities.size > 0) &&
            filteredData
        ) {
            return true
        } else if (
            Array.from(location).length > 0 ||
            Array.from(activities).length > 0
        ) {
            return false;
        }
        return true;
    }

    render() {
        const { classes, children, type, icon, filters, filteredData } = this.props;
        const { touchClass } = this.state;
        const { typeStr } = filterType(type)
        let filter = filters[typeStr];
        const content = filterContentValidation({ filteredData, children, filter, classes });

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
                <div className={classes["filter__wrapper"]}>{content}</div>
            </div>
        )
    }
}

export default injectSheet(styles)(Filter);
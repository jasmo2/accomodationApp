const iconSize = "20px";
const styles = {
    item: {
        alignItems: "center",
        borderBottom: "solid #d2d2d2 1px",
        display: "flex",
        height: "42px",
    },
    logo: {
        flex: 2,
        visibility: "hidden",

        "& svg": {
            width: iconSize,
            height: iconSize,
        }
    },
    "item--selected": {
        visibility: "visible"
    },

    "item--unselected": {
        visibility: "hidden"
    },
    text: {
        flex: 8,
    }

};

export default styles;
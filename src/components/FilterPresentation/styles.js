const iconSize = "36px";
import { GRAY as gray, BLUE as blue } from "../../constants";
const styles = {
    wrapper: {
        backgroundColor: "white",
        color: gray,
        display: "flex",
        flex: 1,
        flexDirection: "column",
        margin: "0 12px",
        height: "calc(90vh - 108px);",
    },

    title: {
        alignItems: "center",
        display: "flex",
        flex: 1,
        fontSize: "24px",
        justifyContent: "flex-start",
        marginTop: "30px",
        paddingLeft: "24px",
        textTransform: "uppercase",
    },

    body: {
        flex: 9,
        overflowY: "scroll",
        paddingLeft: "54px",
        paddingRight: "36px"
    },

    "button-wrapper": {
        alignItems: "center",
        display: "flex",
        justifyContent: "flex-end",
        paddingRight: "18px",
        minHeight: "30px",

        "& button": {
            "-webkitAppearance": "none",
            backgroundColor: "transparent",
            border: "transparent",
            borderRadius: 0,
            height: "30px",
            width: "66px"
        }
    },

    "button--show": {
        display: "block",
    },

    "button--hide": {
        display: "none",
    },

    "carousel--hide": {
        display: "none"
    },

    "carousel--show": {
        display: "block"
    },

    logo: {
        width: iconSize,
        height: iconSize
    },

    apply: {
        backgroundColor: "white",
        color: blue,
        display: "flex",
        flex: 1,
        height: "42px",
        justifyContent: "center",
        margin: "0 12px",

    },

    button: {
        color: "inherit"
    }

};

export default styles;
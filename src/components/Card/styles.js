import { ICON_SIZE as iconSize, GRAY as gray } from "../../constants";
const styles = {
    activities: {
        alignItems: "center",
        display: "flex",
        height: "36px",
        paddingLeft: "36px",
    },

    "activity": {
        color: gray,
        fontSize: "8px",
        marginRight: "12px",
        position: "relative",
        textTransform: "uppercase",
        "&:before": {
            content: "'•'",
            marginRight: "6px",
            display: "inline-block",

        },

        "&:first-child:before": {
            content: "''"
        }
    },

    card: {
        listStyleType: "none",
        position: "relative",
        "&:first-type-of": {
            marginTop: "18px"
        }
    },

    city: {
        fontSize: "48px",
        transform: "translate(36px, 96px)",
    },

    country: {
        display: "flex",
        fontSize: "16px",
        transform: "translate(36px, 146px)",

        "& svg": {
            fill: "currentColor"
        }
    },

    pointer: {
        height: iconSize,
        width: iconSize,
        marginRight: iconSize,
    },

    logo: {
        height: iconSize,
        width: iconSize,
        transform: "translateY(12px)",
        right: "12px",

        "& svg": {
            fill: "currentColor"
        }
    },
    "heart--liked": {
        color: "pink !important",
    },

    "heart--unliked": {
        color: "white",
    },

    imageBottom: {
        height: "180px",
        width: "100%",
        objectFit: "cover",
        zIndex: 0,

    },

    topItems: {
        position: "absolute",
        zIndex: 1,
        color: "white"
    },


};

export default styles;
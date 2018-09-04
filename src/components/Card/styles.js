const iconSize = "18px";
const styles = {
    card: {
        listStyleType: "none",
        margin: "16px 0",
        position: "relative",
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
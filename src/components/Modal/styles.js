const iconSize = "24px";

const styles = {
    "cancel-wrapper": {
        position: "absolute",
        right: "0",
        transform: "translate(-18px, 12px)",
        zIndex: "1",

        "& svg": {
            height: iconSize,
            widht: iconSize
        }
    },

    modal: {
        display: "flex",
        position: "fixed",
        transition: "background-color 0.3s ease-in, height 0.4s ease-in",
    },

    "modal--hide": {
        height: "0px",
        visibility: "hidden",
        zIndex: 0,
    },

    "modal--show": {
        backgroundColor: "#00000091",
        flexDirection: "column",
        height: "100vh",
        right: 0,
        top: 0,
        width: "100%",
        zIndex: 4,
    },
};

export default styles;
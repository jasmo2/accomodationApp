const iconSize = "24px";
const styles = {
    wrapper: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        height: "112px",
        paddingBottom: "16px",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 3,
    },

    bagpack: {
        alignItems: "center",
        display: "flex",
        justifyContent: "flex-end",
        marginRight: "18px",
        minHeight: "36px",

        "& svg": {
            width: iconSize,
            height: iconSize
        }
    }
};

export default styles;
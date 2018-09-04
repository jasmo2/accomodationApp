const styles = {

    modal: {
        transition: "background-color 3s ease",
    },
    "modal--hide": {
        display: "none",
    },
    "modal--show": {
        backgroundColor: "#00000091",
        display: "block",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        position: "fixed",
        right: 0,
        top: 0,
        width: "100%",
        zIndex: 4,
    },
};

export default styles;
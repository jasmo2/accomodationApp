const styles = {

    modal: {
        display: "flex",
        position: "fixed",
        transition: "background-color 0.3s ease, height 0.4s ease",
    },
    "modal--hide": {
        height: "0px",
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
import { ICON_SIZE as iconSize } from "../../constants";
const styles = {
    footer: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        height: "24px",
        padding: "6px 0",
        position: "fixed",
        bottom: 0,
        width: "100%",
        zIndex: 3,
    },
    icon: {
        alignItems: "center",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",

        "& svg": {
            height: iconSize,
            width: iconSize
        }
    }

};

export default styles;
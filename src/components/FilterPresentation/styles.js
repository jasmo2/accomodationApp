const iconSize = "36px";
import { GRAY as gray } from "../../constants";
const styles = {
    wrapper: {
        backgroundColor: "white",
        color: gray,
        display: "flex",
        flex: 1,
        flexDirection: "column",
        margin: "0 12px",
        maxHeight: "75%",
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
    logo: {
        width: iconSize,
        height: iconSize
    }

};

export default styles;
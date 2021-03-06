import { ICON_SIZE as iconSize } from "../../constants";
const styles = {
    item: {
        alignItems: "center",
        borderBottom: "solid #d2d2d2 1px",
        display: "flex",
        height: "36px",
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
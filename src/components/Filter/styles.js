import {
    GRAY as gray,
    GRAY_L as grayLight,
    ICON_SIZE as iconSize,
} from "../../constants";
const styles = {
    input: {
        alignItems: "center",
        backgroundColor: "#F5F5FF",
        color: gray,
        display: "flex",
        flex: "1",
        height: "112px",
        margin: "6px 12px",
        padding: "0 18px",
        verticalAlign: "text-bottom",

        "&:active, &--touch": {
            backgroundColor: "#f5f5ffa3",
            color: grayLight,
        }
    },

    filter: {
        backgroundColor: "gray",
        borderRadius: "9%",
        display: "inline-block",
        marginRight: "3px",
        padding: "3px 6px",

    },

    "filter__wrapper": {
        display: "inline-flex",
        flex: 12,
        overflowX: "scroll",
        height: "21px"
    },

    logo: {
        flex: 1,
        marginRight: "16px",

        "& svg": {
            height: iconSize,
            width: iconSize
        }
    }
};

export default styles;
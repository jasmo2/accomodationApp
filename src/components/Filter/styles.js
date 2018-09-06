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
    logo: {
        marginRight: "16px",

        "& svg": {
            height: iconSize,
            width: iconSize
        }
    }
};

export default styles;
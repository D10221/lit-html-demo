/**
 * 
 * @param {typeof import("./theme").default} theme 
 * @returns {{ [key: string]: import("react").CSSProperties }}
 */
const styles = (theme) => {
    /** @type {{ [key: string]: import("react").CSSProperties }} */
    const html = {
        margin: 0,
        padding: 0,
        height: "100%",

    };
    /** @type {{ [key: string]: import("react").CSSProperties }} */
    const body = {
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        fontFamily: theme.fonts["sans"]
    }
    return {
        "@global": {
            html,
            body,
        },
        h1: {
            fontSize: theme.textSizes["5xl"]
        },
        flexRow: {
            display: "flex",
            flexDirection: "row",
        },
        flexGrow: {
            flex: "1 0"
        },
        margin1: {
            margin: theme.margin["1"]
        },
        button: {
            backgroundColor: theme.backgroundColors["blue-lightest"],
            fontSize: theme.textSizes["base"],
            height: theme.textSizes["4xl"]
        }

    }
}
export default styles;
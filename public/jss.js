import jss, { preset } from 'https://unpkg.com/@australis/jss-with-preset-default-es@9.8.7-1/lib/index.js';
import theme from "./theme.js";
jss.setup(preset());
/** */
export default (styles) => {
    return jss.createStyleSheet(
        typeof styles === "function" ? styles(theme) : styles);
    // .attach()
}
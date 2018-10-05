import html from "../html.js";
/** */
const H1 = ({ content, className }) => (
    html`<h1 class=${className}>${content}
    <h1>`
);
/** */
export default H1;
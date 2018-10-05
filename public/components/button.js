import html from "../html.js";
/** */
const Button = ({ text, onClick , classes }) => (
    html`<button class=${classes} @click=${onClick}>${text}</button>`
)

export default Button;
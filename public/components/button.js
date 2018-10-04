import { html } from "../node_modules/lit-html/lit-html.js";
/** */
const Button = ({ text, onClick }) => (
    html`<button @click=${onClick}>${text}</button>`
)

export default Button;
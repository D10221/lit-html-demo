import html, { render } from "./html.js";
import store, { actions, connect } from "./store/index.js";
import Button from "./components/button.js";
import H1 from "./components/h1.js";
import jss from "./jss.js";
import styles from "./styles.js";
import classes from "./classes.js";

const App = ({ message, setState }) => {
    const { classes: css } = jss(styles).attach();
    const onClick = () => setState({ message: message + "!" });
    return html`
        <div class=${classes(css.flexRow, css.margin1)}>
            ${H1({ content: message, className: css.h1 })}
            <div class=${classes(css.flexGrow)}></div>
            ${Button({ onClick, text: "Click", classes: css.button })}
        </div>
        <div class=${classes(css.flexRow, css.flexGrow)}>C</div>
        <div class=${classes(css.flexGrow)}></div>
        <div class="panel panel-bottom">F</div>`;
};

store.subscribe(() => {
    render(connect(state => state, actions)(App)(), document.body);
})

store.dispatch({
    type: "!start"
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// import * as serviceWorker from './serviceWorker';
// serviceWorker.unregister();

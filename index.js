import { render, html } from "./node_modules/lit-html/lit-html.js";
import store, { bindActionCreators } from "./store.js";
import { actions } from "./reducer.js";

const connect = (selector, actions) => (Func) => {
    selector = selector || (() => { });
    const _actions = bindActionCreators(actions, store.dispatch);
    return props => Func({
        ...props,
        ...(selector(store.getState())),
        ..._actions
    });
}

const Button = ({ text, onClick }) => (
    html`<button @click=${onClick}>${text}</button>`
)

const Title = ({ message }) => (
    html`<h1>${message}
    <h1>`
);

const App = connect(state => state, actions)(
    ({ message, setState }) => {
        const onClick = () => setState({ message: message + "!" });        
        return html`
    
    <div id="top-panel" class="panel panel-top">
        ${Title({ message })}${Button({ onClick, text: "Click" })}
    </div>
    
    <div id="left-panel" class="panel panel-left">L</div>
    
    <div id="center-panel" class="panel panel-center">C</div>
    
    <div id="bottom-panel" class="panel panel-bottom">F</div>`;
    }
)

store.onChange(() => {
    render(App({}), document.body);
})

store.dispatch({
    type: "!start"
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// import * as serviceWorker from './serviceWorker';
// serviceWorker.unregister();

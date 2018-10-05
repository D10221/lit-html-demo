import store, { bindActionCreators } from "./store.js";

const connect = (selector, actions) => (Func) => {
    selector = selector || (() => { });
    const _actions = bindActionCreators(actions, store.dispatch);
    return props => Func({
        ...props,
        ...(selector(store.getState())),
        ..._actions
    });
}
export default connect;
import redux from "https://unpkg.com/@australis/redux-es@4.0.0/dist/index.js";
import reducer from "./reducer.js";
import middleware from "./middleware.js";
const { compose: kompose, createStore, bindActionCreators, applyMiddleware } = redux;
const { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ } = window;

const compose =
    typeof window === "object" && __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? __REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
        : kompose;

/**
 * @type {import("redux").Store}
 */
const store = createStore(
    reducer,
    compose(
        applyMiddleware(
            middleware,
        )
    ),
);

Object.defineProperty(store, "onChange", {
    enumerable: false, value: function onChange(subscriber) {
        this.subscribe(() => subscriber(store.getState()))
    },

});

export default store;
export {
    bindActionCreators
}
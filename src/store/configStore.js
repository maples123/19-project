import {createStore} from "redux";
import rootReducers from "../rducres/index";

// export const configStore = createStore(reducers);

export default function configStore(init){

    const store = createStore(
        rootReducers,
        init,
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )

    return store;
}
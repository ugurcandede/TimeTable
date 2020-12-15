import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./index";
import {composeWithDevTools} from 'redux-devtools-extension'

const configureStore = () => {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk))
    )
}
export default configureStore

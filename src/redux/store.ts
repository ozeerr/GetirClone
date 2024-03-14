import {createStore,combineReducers,applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"

import { composeWithDevTools } from "redux-devtools-extension"

import cartItems from "./reducers/cartItem"
const reducers= combineReducers({
    cartItems:cartItems
})

const store = createStore(
    reducers
)

export default store
import rootReducer from './reducers'
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

const initialState={}
const store = createStore(rootReducer,initialState,devToolsEnhancer())

export default store
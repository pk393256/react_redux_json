import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";

export const store = createStore(reducer,{todos:[]},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


    store.subscribe(()=>{
        console.log(store.getState());
    });

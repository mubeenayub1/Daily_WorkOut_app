import { createStore, combineReducers } from 'redux';

import countReducer from '../Redux/Reducers/CombineReducer';

const rootReducer = combineReducers(

{ count: countReducer }

);

const Store = () => {

return createStore(rootReducer);

}

export default Store;
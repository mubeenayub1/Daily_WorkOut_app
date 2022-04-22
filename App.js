import React from 'react';
import MainNav from './Components/Navigation/MainNav'
import rootReducer from './Redux/Reducers/Reducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'


const Store = createStore(rootReducer)

function App() {
  return (
     <Provider store={Store}>
       <MainNav />
     </Provider>
  
  
  );
}

export default App;

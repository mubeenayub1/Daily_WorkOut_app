import { GET_DATA } from '../ActionTypes/ActionTypes';


const initialState = {
    nameList : []
    };


const Reducer = (state  = initialState , action) =>{
    switch (action.type) {
        
        case  GET_DATA:
            console.log(action.payload)
            return {
            ...state, nameList: action.payload

        } 
    
        default:
            return state
    }
}


export default Reducer;

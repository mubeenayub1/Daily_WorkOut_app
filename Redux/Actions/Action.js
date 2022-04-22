import { GET_DATA } from '../ActionTypes/ActionTypes'

const storeData = (data) =>{
    return {
        type : GET_DATA,
        payload: data
    }

}

export default storeData
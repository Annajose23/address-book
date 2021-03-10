import * as actionTypes from '../actions/actionTypes';

const initialState = {
    persons : [],
    loading : false,
    hasError: false,
    selectedContact:null
} 

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_PERSONS_START:
            return{
                ...state,
                loading:true
            }
        case actionTypes.FETCH_PERSONS_SUCCESS:
            return{
                ...state,
                persons: action.payload,
                loading:false
            }
        case actionTypes.FETCH_PERSONS_FAILED:
            return{
                ...state,
                loading:false,
                hasError:true
            }
        case actionTypes.SELECT_PERSON_SUCCESS:
            return{
                ...state,
                selectedContact:action.payload
            }
        default:
        return state;
    }
}

export default reducer;
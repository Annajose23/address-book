import * as actionTypes from './actionTypes';

export const fetchPersonsStart = () => {
    return {
        type:actionTypes.FETCH_PERSONS_START
    }
}

export const fetchPersonsSuccess = (persons) => {
    return {
        type: actionTypes.FETCH_PERSONS_SUCCESS,
        payload: persons
    }
}

export const fetchPersonsFailed = () => {
    return {
        type: actionTypes.FETCH_PERSONS_FAILED
    }
}

export const fetchPersons = () => {
    return {
        type:actionTypes.FETCH_PERSONS
    }
}

export const selectPersonSuccess = (person) => {
    return{
        type:actionTypes.SELECT_PERSON_SUCCESS,
        payload:person
    }
}
